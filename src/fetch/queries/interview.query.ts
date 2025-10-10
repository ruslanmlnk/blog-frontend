import { gql } from "graphql-request";
import imageFragment from "../fragments/image.fragment";

export const interviewListQuery = gql`
  query getInterviewList($locale: LocaleInputType) {
    Interviews(locale: $locale) {
      docs {
        id
        title
      }
    }
  }
`;

export const interviewByIdQuery = gql`
  query getInterviewById($id: Int!, $locale: LocaleInputType) {
    Interviews(locale: $locale, where: { id: { equals: $id } }) {
      docs {
        id
        title
        content {
          ... on InterviewOverlayHero {
            __typename
            href
            title
            subtitle
            image { ${imageFragment} }
          }
          ... on InterviewCardGrid {
            __typename
            items {
              href
              title
              description
              image { ${imageFragment} }
            }
          }
          ... on InterviewOverlayPair {
            __typename
            items {
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
