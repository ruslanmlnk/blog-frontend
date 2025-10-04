import { gql } from "graphql-request";
import { articleFragment } from "../fragments/article.fragment";

export const articleQuery = gql`
query getArticles($page: Int!, $limit: Int!, $where: Article_where) {
	Articles(limit: $limit, page: $page, where: $where) {
    totalDocs
    totalPages
    page
    hasNextPage
    docs {
      ${articleFragment}
    }
  }
}
`

export const getArticleQuery = gql`
query getArticles($where: Article_where) {
	Articles(where: $where) {
    docs {
      ${articleFragment}
    }
  }
}
`
