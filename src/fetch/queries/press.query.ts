import { gql } from "graphql-request";
import imageFragment from "../fragments/image.fragment";

export const pressListQuery = gql`
  query getPressList($locale: LocaleInputType) {
    Presses(sort: "sortOrder", locale: $locale) {
      docs {
        id
        title
        icon { ${imageFragment} }
      }
    }
  }
`;

export const pressByIdQuery = gql`
  query getPressById($id: Int!, $locale: LocaleInputType) {
    Presses(locale: $locale, where: { id: { equals: $id } }) {
      docs {
        id
        title
	meta{
          metaTitle
          metaDescription
        }
        icon { ${imageFragment} }
        content {
          ... on PressOverlayHero {
            __typename
            visibleFrom
            href
            title
            subtitle
            image { ${imageFragment} }
          }
          ... on PressCardGrid {
            __typename
            items {
              visibleFrom
              href
              title
              description
              image { ${imageFragment} }
            }
          }
          ... on PressOverlayPair {
            __typename
            items {
              visibleFrom
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
