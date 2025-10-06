import { gql } from "graphql-request";
import imageFragment from "../fragments/image.fragment";

export const articleCategoriesQuery = gql`
query getArticleCategories {
  Article_categories {
    docs {
      id
      title
      icon { ${imageFragment} }
    }
  }
}
`;

export const categoryByIdQuery = gql`
  query getCategoryById($id: Int!) {
    Article_categories(where: { id: { equals: $id } }) {
      docs {
        id
        title
        icon { ${imageFragment} }
        content {
          ... on CategoryOverlayPair {
            __typename
            items {
              article {
                title
                slug
                description
                createdAt
                bg { ${imageFragment} }
                category { title id }
              }
            }
          }
          ... on CategoryCardGrid {
            __typename
            items {
              article {
                title
                slug
                description
                createdAt
                bg { ${imageFragment} }
                category { title id }
              }
            }
          }
          ... on CategoryOverlayHero {
            __typename
            article {
              title
              slug
              description
              createdAt
              bg { ${imageFragment} }
              category { title id }
            }
          }
        }
      }
    }
  }
`;
