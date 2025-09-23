import { gql } from "graphql-request";

export const pressQuery = gql`
query getPress{
  Preses{
    docs{
        title
        description
    }
  }
}
`