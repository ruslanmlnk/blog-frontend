import { gql } from "graphql-request";
import { articleFragment } from "../fragments/article.fragment";

export const homepageQuery = gql`
  query getHomepage {
    Homes {
      docs {
        id
        title
        description
        trends {
          title
          items { article { ${articleFragment} } }
        }
        content {
          ... on HomeFeatured {
            __typename
            article { ${articleFragment} }
          }
          ... on CategoryCardGrid {
            __typename
            items { article { ${articleFragment} } }
          }
        }
      }
    }
  }
`;
