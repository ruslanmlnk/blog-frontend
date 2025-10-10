import { graphQLClient } from "./gqlClient";
import { articleCategoriesQuery, categoryByIdQuery } from "./queries/articleCategories.query";
import type { ArticleCategoriesQueryResponse, CategoryByIdResponse, FetchArticleCategoriesResponse } from "./types/articleCategories.type";

export default async function fetchArticleCategories(): Promise<FetchArticleCategoriesResponse | null> {
  try {
    const { getServerLocale } = await import('./locale');
    const locale = getServerLocale();
    const data = await graphQLClient.request<ArticleCategoriesQueryResponse>(articleCategoriesQuery, { locale });
    return { categories: data.Article_categories.docs };
  } catch (error) {
    console.error("GraphQL Error:", JSON.stringify(error, null, 2));
    return null;
  }
}

export async function fetchCategories() {
  try {
    const { getServerLocale } = await import('./locale');
    const locale = getServerLocale();
    const data = await graphQLClient.request<ArticleCategoriesQueryResponse>(articleCategoriesQuery, { locale });
    return data.Article_categories.docs;
  } catch (error) {
    console.error("GraphQL Error:", JSON.stringify(error, null, 2));
    return [];
  }
}

export async function fetchCategoryById(id: string) {
  try {
    const { getServerLocale } = await import('./locale');
    const locale = getServerLocale();
    const data = await graphQLClient.request<CategoryByIdResponse>(categoryByIdQuery, { id: Number(id), locale });
    return data.Article_categories.docs[0] || null;
  } catch (error) {
    console.error("GraphQL Error (id):", JSON.stringify(error, null, 2));
    return null;
  }
}
