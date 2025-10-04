import { gql } from "graphql-request";

export const contactQuery = gql`
query getContact {
  Contacts {
    docs {
      id
      title
      description
    }
  }
}
`;

