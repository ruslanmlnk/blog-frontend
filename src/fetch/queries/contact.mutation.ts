import { gql } from "graphql-request";

export const createContactMessageMutation = gql`
  mutation CreateContactMessage(
    $name: String!
    $phone: String
    $email: String
    $message: String
  ) {
    createContactMessage(
      data: {
        name: $name
        phone: $phone
        email: $email
        message: $message
      }
    ) {
      id
      name
      email
      phone
      message
      createdAt
    }
  }
`;
