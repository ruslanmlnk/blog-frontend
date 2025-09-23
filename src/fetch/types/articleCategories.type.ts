export interface ArticleCategory {
  title: string;
  slug: string;
  id: string;
}

export interface ArticleCategoriesQueryResponse {
  Article_categories: {
    docs: ArticleCategory[]
  }
}

export interface FetchArticleCategoriesResponse {
  categories: ArticleCategory[]
}