import { gql } from "graphql-request";
import imageFragment from "../fragments/image.fragment";

export const aboutQuery = gql`
  query getAbout($locale: LocaleInputType) {
    Abouts(locale: $locale) {
      docs {
        id
        title
        lead
        heroImage {
          ${imageFragment}
        }
        cards {
          title
          text
        }
      }
    }
  }
`;
