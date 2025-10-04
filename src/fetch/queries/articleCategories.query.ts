import { gql } from "graphql-request";

export const articleCategoriesQuery = gql`
query getArticleCategories {
  Article_categories {
    docs {
      id
      title
      slug
    }
  }
}
`;

