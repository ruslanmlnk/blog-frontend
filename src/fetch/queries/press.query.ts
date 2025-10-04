import { gql } from "graphql-request";

export const pressQuery = gql`
query getPress{
  Presses{
    docs{
        id
        title
        description
    }
  }
}
`
