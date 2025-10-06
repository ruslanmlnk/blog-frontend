import { gql } from "graphql-request";
import imageFragment from "../fragments/image.fragment";

export const contactQuery = gql`
  query getContact {
    Contacts {
      docs {
        id
        title
        description
        sideImage {
          ${imageFragment}
        }
      }
    }
  }
`;
