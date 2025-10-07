import { gql } from "graphql-request";
import imageFragment from "../fragments/image.fragment";

export const pressListQuery = gql`
  query getPressList {
    Presses {
      docs {
        id
        title
        icon { ${imageFragment} }
      }
    }
  }
`;

export const pressByIdQuery = gql`
  query getPressById($id: Int!) {
    Presses(where: { id: { equals: $id } }) {
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

