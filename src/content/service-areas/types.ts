export type ServiceAreaArticleImage = {
  src: string;
  alt: string;
};

export type ServiceAreaArticle = {
  slug: string;
  title: string;
  excerpt: string;
  bodyMarkdown: string;
  images: ServiceAreaArticleImage[];
  model: string;
  wordCount: number;
  linkCount: number;
  generatedAt: string;
};
