import type { CategoryCardGridBlock } from "./articleCategories.type";
import type { Article } from "./article.type";

export interface HomeFeaturedBlock {
  __typename: 'HomeFeatured';
  article: Article;
}

export type HomeBlock = HomeFeaturedBlock | CategoryCardGridBlock;

export interface Homepage {
  id: string;
  title: string;
  description: string;
  meta?: {
    metaTitle?: string | null;
    metaDescription?: string | null;
  };
  trends?: {
    title?: string;
    items: { article: Article }[];
  } | null;
  content?: HomeBlock[];
}

export interface Homes {
  Homes: {
    docs: Homepage[];
  };
}
