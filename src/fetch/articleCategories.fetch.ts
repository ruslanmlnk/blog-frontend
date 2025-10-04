import { graphQLClient } from "./gqlClient";
import { articleCategoriesQuery } from "./queries/articleCategories.query";
import { ArticleCategoriesQueryResponse, FetchArticleCategoriesResponse } from "./types/articleCategories.type";

export default async function fetchArticleCategories(): Promise<FetchArticleCategoriesResponse | null> {
  try {
    const data = await graphQLClient.request<ArticleCategoriesQueryResponse>(articleCategoriesQuery);
    return { categories: data.Article_categories.docs };
  } catch (error) {
    console.error("GraphQL Error:", JSON.stringify(error, null, 2));
    return null;
  }
}

