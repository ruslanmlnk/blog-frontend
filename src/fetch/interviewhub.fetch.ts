// fetch/interviewhub.fetch.ts
import { gql } from "graphql-request";
import { graphQLClient } from "./gqlClient";
import imageFragment from "./fragments/image.fragment";
import { getServerLocale } from "./locale";

export const interviewHubQuery = gql`
  query getInterviewHub($locale: LocaleInputType) {
    InterviewHub(locale: $locale) {
      title
      description
      meta{
          metaTitle
          metaDescription
        }
      # якщо маєш SEO у глобалі — додай:
      # meta { metaTitle metaDescription }
      content {
        ... on InterviewOverlayHeroHub {
          __typename
          href
          title
          subtitle
	  visibleFrom
          image { ${imageFragment} }
          linkedInterview {
            id
            title
          }
        }
        ... on InterviewCardGridHub {
          __typename
          items {
            href
            title
            description
	    visibleFrom
            image { ${imageFragment} }
            linkedInterview {
              id
              title
            }
          }
        }
        ... on InterviewOverlayPairHub {
          __typename
          items {
            href
            title
	    visibleFrom
            image { ${imageFragment} }
            linkedInterview {
              id
              title
            }
          }
        }
      }
    }
  }
`;

export async function fetchInterviewHub() {
  try {
    const locale = await getServerLocale();
    const data = await graphQLClient.request<{ InterviewHub: any }>(interviewHubQuery, { locale });
    return data.InterviewHub ?? null;
  } catch (error) {
    console.error("GraphQL Error (interview hub):", JSON.stringify(error, null, 2));
    return null;
  }
}
