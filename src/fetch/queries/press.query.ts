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
          ... on PressOverlayHero {
            __typename
            date
            href
            title
            subtitle
            image { ${imageFragment} }
          }
          ... on PressCardGrid {
            __typename
            items {
              date
              href
              title
              description
              image { ${imageFragment} }
            }
          }
          ... on PressOverlayPair {
            __typename
            items {
              date
              href
              title
              image { ${imageFragment} }
            }
          }
        }
      }
    }
  }
`;
