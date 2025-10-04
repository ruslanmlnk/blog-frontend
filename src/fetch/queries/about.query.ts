import { gql } from "graphql-request";

export const aboutQuery = gql`
query getAbout {
  Abouts {
    docs {
      id
      title
      description
    }
  }
}
`;

