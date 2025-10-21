import type { Article } from "./article.type";
import type { AltMedia } from "./image.type";

export interface CategoryOverlayPairBlock {
  __typename: 'CategoryOverlayPair';
  items: { article: Article }[];
}

export interface CategoryCardGridBlock {
  __typename: 'CategoryCardGrid';
  items: { article: Article }[];
}

export interface CategoryOverlayHeroBlock {
  __typename: 'CategoryOverlayHero';
  article: Article;
}

export type CategoryBlock =
  | CategoryOverlayPairBlock
  | CategoryCardGridBlock
  | CategoryOverlayHeroBlock;

export interface ArticleCategory {
  title: string;
  meta?: {
    metaTitle?: string | null;
    metaDescription?: string | null;
  };
  id: number;
  icon?: AltMedia | null;
  content?: CategoryBlock[];
}

export interface ArticleCategoriesQueryResponse {
  Article_categories: {
    docs: ArticleCategory[]
  }
}

export interface FetchArticleCategoriesResponse {
  categories: ArticleCategory[]
}

export interface CategoryByIdResponse {
  Article_categories: {
    docs: ArticleCategory[]
  }
}
