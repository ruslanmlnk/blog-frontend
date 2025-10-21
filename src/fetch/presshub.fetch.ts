// fetch/pressHub.fetch.ts
import { graphQLClient } from "./gqlClient";
import { gql } from "graphql-request";
import imageFragment from "./fragments/image.fragment";
import { getServerLocale } from "./locale";

// 🔹 GraphQL запит для глобального pressHub
const pressHubQuery = gql`
  query getPressHub($locale: LocaleInputType) {
    PressHub(locale: $locale) {
      meta{
      	metaTitle
      	metaDescription
      }
      title
      description
      content {
        ... on PressOverlayHeroHub {
          __typename
          href
          title
          subtitle
          visibleFrom
          image { ${imageFragment} }
          linkedPress {
            id
            title
            createdAt
            icon { ${imageFragment} }
          }
        }
        ... on PressCardGridHub {
          __typename
          items {
            href
            title
            description
            visibleFrom
            image { ${imageFragment} }
            linkedPress {
              id
              title
              createdAt
              icon { ${imageFragment} }
            }
          }
        }
        ... on PressOverlayPairHub {
          __typename
          items {
            href
            title
            visibleFrom
            image { ${imageFragment} }
            linkedPress {
              id
              title
              createdAt
              icon { ${imageFragment} }
            }
          }
        }
      }
    }
  }
`;

export async function fetchPressHub() {
  try {
    const locale = await getServerLocale();
    const data = await graphQLClient.request<{ PressHub: any }>(pressHubQuery, { locale });
    return data.PressHub;
  } catch (error) {
    console.error("GraphQL Error (press hub):", JSON.stringify(error, null, 2));
    return null;
  }
}
