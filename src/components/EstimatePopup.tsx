"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { CheckCircle, Loader2, Phone, X } from "lucide-react";
import { ESTIMATE_FORM_NAME, ESTIMATE_HONEYPOT_FIELD } from "@/lib/contact";
import {
  ESTIMATE_POPUP_COPY,
  ESTIMATE_POPUP_DELAY_MS,
  ESTIMATE_POPUP_SCROLL_PX,
  isContactPath,
  markEstimatePopupDismissed,
  markEstimatePopupSubmitted,
  shouldSuppressEstimatePopup,
  validatePopupPhone,
} from "@/lib/estimatePopup";
import { submitEstimate } from "@/lib/submitEstimate";
import { trackLeadIntent, trackLeadSubmitted, trackPhoneCall } from "@/lib/analytics";

export default function EstimatePopup() {
  const pathname = usePathname();
  const titleId = useId();
  const descId = useId();
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    bot_check: "",
  });
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const shownRef = useRef(false);

  const close = useCallback((reason: "dismiss" | "submitted") => {
    setOpen(false);
    document.body.style.overflow = "";
    if (typeof window === "undefined") return;
    if (reason === "submitted") {
      markEstimatePopupSubmitted(window.localStorage);
    } else {
      markEstimatePopupDismissed(window.localStorage);
      trackLeadIntent("popup_dismissed");
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (shownRef.current) return;
    if (isContactPath(pathname)) return;
    const force =
      new URLSearchParams(window.location.search).get("popup") === "1";
    if (
      !force &&
      shouldSuppressEstimatePopup(pathname, Date.now(), window.localStorage)
    ) {
      return;
    }

    const reveal = () => {
      if (shownRef.current) return;
      if (
        !force &&
        shouldSuppressEstimatePopup(window.location.pathname, Date.now(), window.localStorage)
      ) {
        return;
      }
      shownRef.current = true;
      setOpen(true);
      trackLeadIntent("popup_shown");
    };

    const onScroll = () => {
      if (window.scrollY >= ESTIMATE_POPUP_SCROLL_PX) reveal();
    };

    if (force) {
      const immediate = window.setTimeout(reveal, 0);
      return () => window.clearTimeout(immediate);
    }

    const timer = window.setTimeout(reveal, ESTIMATE_POPUP_DELAY_MS);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  useEffect(() => {
    if (!open || isContactPath(pathname)) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    const previous = document.activeElement as HTMLElement | null;
    const nameInput = dialogRef.current?.querySelector<HTMLInputElement>("input[name='name']");
    (nameInput ?? closeButtonRef.current)?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close("dismiss");
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previous?.focus?.();
    };
  }, [open, close, pathname]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (submitting) return;
    const phoneError = validatePopupPhone(form.phone);
    if (phoneError) {
      setError(phoneError);
      return;
    }
    setError(null);
    setSubmitting(true);
    const result = await submitEstimate({
      name: form.name,
      email: form.email,
      phone: form.phone,
      service: "Popup estimate request",
      message: "Requested a free estimate from the site popup.",
      bot_check: form.bot_check,
    });
    setSubmitting(false);
    if (!result.ok) {
      setError(result.error || "Could not send your request. Please call us.");
      return;
    }
    trackLeadSubmitted("estimate_popup", { service_type: "unspecified" });
    setSubmitted(true);
    markEstimatePopupSubmitted(window.localStorage);
  };

  if (!open || isContactPath(pathname)) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center p-4 sm:items-center">
      <button
        type="button"
        aria-label="Close estimate popup"
        className="absolute inset-0 bg-black/70"
        onClick={() => close("dismiss")}
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        className="relative w-full max-w-lg border border-[#c9a458]/30 bg-[#111111] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.55)] sm:p-8"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={() => close(submitted ? "submitted" : "dismiss")}
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center text-white/50 transition-colors hover:text-white"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="py-6 text-center">
            <CheckCircle size={40} className="mx-auto mb-4 text-[#c9a458]" />
            <h2 id={titleId} className="font-display text-3xl font-bold text-white">
              {ESTIMATE_POPUP_COPY.successTitle}
            </h2>
            <p id={descId} className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-white/60">
              {ESTIMATE_POPUP_COPY.successBody}
            </p>
            <button
              type="button"
              onClick={() => close("submitted")}
              className="mt-6 px-6 py-3 bg-[#c9a458] text-sm font-bold tracking-widest uppercase text-[#0d0d0d] hover:bg-[#e0bc7a]"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-[#c9a458]">
              {ESTIMATE_POPUP_COPY.offer}
            </p>
            <h2 id={titleId} className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
              {ESTIMATE_POPUP_COPY.heading}
            </h2>
            <p id={descId} className="mt-3 text-sm leading-relaxed text-white/60">
              {ESTIMATE_POPUP_COPY.body}
            </p>

            <form
              name={ESTIMATE_FORM_NAME}
              method="POST"
              action="/api/contact"
              onSubmit={handleSubmit}
              className="mt-6 space-y-3"
            >
              <input type="hidden" name="form-name" value={ESTIMATE_FORM_NAME} />
              <input type="hidden" name="service" value="Popup estimate request" />
              <input
                type="hidden"
                name="message"
                value="Requested a free estimate from the site popup."
              />
              <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                <label htmlFor={`popup-${ESTIMATE_HONEYPOT_FIELD}`}>Website</label>
                <input
                  id={`popup-${ESTIMATE_HONEYPOT_FIELD}`}
                  type="text"
                  name={ESTIMATE_HONEYPOT_FIELD}
                  tabIndex={-1}
                  autoComplete="off"
                  data-lpignore="true"
                  data-1p-ignore="true"
                  value={form.bot_check}
                  onChange={(e) => setForm({ ...form, bot_check: e.target.value })}
                />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-[10px] uppercase tracking-widest text-white/40">
                    Name *
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-white/10 bg-[#1a1a1a] px-3 py-3 text-sm text-white focus:border-[#c9a458]/50 focus:outline-none"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-[10px] uppercase tracking-widest text-white/40">
                    Email *
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-white/10 bg-[#1a1a1a] px-3 py-3 text-sm text-white focus:border-[#c9a458]/50 focus:outline-none"
                  />
                </label>
              </div>
              <label className="block">
                <span className="mb-1.5 block text-[10px] uppercase tracking-widest text-white/40">
                  Phone *
                </span>
                <input
                  type="tel"
                  name="phone"
                  required
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="(253) 000-0000"
                  className="w-full border border-white/10 bg-[#1a1a1a] px-3 py-3 text-sm text-white placeholder-white/20 focus:border-[#c9a458]/50 focus:outline-none"
                />
              </label>
              {error && (
                <p className="text-sm text-red-400" role="alert">
                  {error}
                </p>
              )}
              <button
                type="submit"
                disabled={submitting}
                className="flex w-full items-center justify-center gap-2 bg-[#c9a458] px-6 py-4 text-sm font-bold tracking-widest uppercase text-[#0d0d0d] transition-all duration-300 hover:bg-[#e0bc7a] disabled:opacity-60"
              >
                {submitting ? <Loader2 size={16} className="animate-spin" /> : null}
                {submitting ? "Sending..." : ESTIMATE_POPUP_COPY.button}
              </button>
            </form>

            <p className="mt-4 text-center text-xs leading-relaxed text-white/40">
              {ESTIMATE_POPUP_COPY.footer}
            </p>
            <a
              href="tel:2534143937"
              onClick={() => trackPhoneCall("2534143937")}
              className="mt-3 flex items-center justify-center gap-2 text-sm text-white/70 transition-colors hover:text-[#c9a458]"
            >
              <Phone size={14} />
              Or call (253) 414-3937
            </a>
          </>
        )}
      </div>
    </div>
  );
}
