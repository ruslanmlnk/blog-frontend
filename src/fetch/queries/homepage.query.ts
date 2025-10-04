import { gql } from "graphql-request";

export const homepageQuery = gql`
query getHomepage {
  Homes {
    docs {
      id
      title
      description
    }
  }
}
`;
