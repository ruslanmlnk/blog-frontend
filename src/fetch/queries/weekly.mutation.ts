import { gql } from "graphql-request";

export const createWeeklyNewsletterMutation = gql`
  mutation CreateWeeklyNewsletter(
    $email: String
  ) {
    createWeeklyNewsletter(
      data: {
        email: $email
      }
    ) {
      id
      email
      createdAt
    }
  }
`;
