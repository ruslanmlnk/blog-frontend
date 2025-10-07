import { gql } from "graphql-request";
import imageFragment from "../fragments/image.fragment";

export const pressOutletsQuery = gql`
  query getPressOutlets {
    Press_outlets {
      docs {
        id
        name
        avatar { ${imageFragment} }
      }
    }
  }
`;

