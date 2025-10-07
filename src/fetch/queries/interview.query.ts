import { gql } from "graphql-request";
import imageFragment from "../fragments/image.fragment";

export const interviewListQuery = gql`
  query getInterviewList {
    Interviews {
      docs {
        id
        title
      }
    }
  }
`;

export const interviewByIdQuery = gql`
  query getInterviewById($id: Int!) {
    Interviews(where: { id: { equals: $id } }) {
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
