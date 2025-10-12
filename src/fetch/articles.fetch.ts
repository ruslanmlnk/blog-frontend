import { graphQLClient } from "./gqlClient";
import { articleQuery, getArticleQuery } from "./queries/article.query";
import { getServerLocale } from "./locale";
import { ArticleQueryResponse, FetchArticleQueryResponse } from "./types/article.type";

export default async function fetchArticles(page: number = 1, categoryId: string = "", limit: number = 4): Promise<FetchArticleQueryResponse | null> {
    try {
      const locale = await getServerLocale();
      const data = await graphQLClient.request<ArticleQueryResponse>(articleQuery, {
        page,
        limit,
        where: categoryId ? { category: { equals: categoryId } } : undefined,
        locale,
      });
      return data.Articles
  
   
    } catch (error) {
      console.error('GraphQL Error:', JSON.stringify(error, null, 2));
      return null
    }
}

export async function fetchArticle(slug: string): Promise<FetchArticleQueryResponse | null> {
      try {
      const locale = await getServerLocale();
      const data = await graphQLClient.request<ArticleQueryResponse>(getArticleQuery, {
        where: { slug: { equals: slug } },
        locale,
      });
      return data.Articles
  

    } catch (error) {
      console.error('GraphQL Error:', JSON.stringify(error, null, 2));
      return null
    }
}
