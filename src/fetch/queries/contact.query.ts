import { gql } from "graphql-request";
import imageFragment from "../fragments/image.fragment";

export const contactQuery = gql`
  query getContact($locale: LocaleInputType) {
    Contacts(locale: $locale) {
      docs {
        id
        title
        meta{
          metaTitle
          metaDescription
        }
        description
        sideImage {
          ${imageFragment}
        }
      }
    }
  }
`;
