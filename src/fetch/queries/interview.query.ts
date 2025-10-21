import { gql } from "graphql-request";
import imageFragment from "../fragments/image.fragment";

export const interviewListQuery = gql`
  query getInterviewList($locale: LocaleInputType) {
    Interviews(sort: "sortOrder", locale: $locale) {
      docs {
        id
        title
      }
    }
  }
`;

export const interviewByIdQuery = gql`
  query getInterviewById($id: Int!, $locale: LocaleInputType) {
    Interviews(locale: $locale, sort: "sortOrder", where: { id: { equals: $id } }) {
      docs {
        id
	meta{
          metaTitle
          metaDescription
        }
        title
        content {
          ... on InterviewOverlayHero {
            __typename
            visibleFrom
            href
            title
            subtitle
            image { ${imageFragment} }
          }
          ... on InterviewCardGrid {
            __typename
            items {
              visibleFrom
              href
              title
              description
              image { ${imageFragment} }
            }
          }
          ... on InterviewOverlayPair {
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
