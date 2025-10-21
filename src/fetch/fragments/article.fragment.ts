import { gql } from "graphql-request";
import imageFragment from "./image.fragment";


export const articleFragment = gql`
  title
  meta{
     metaTitle
     metaDescription
  }
  slug
  description
  createdAt
  bg {
    ${imageFragment}
  }
  category {
    title
    id
  }
  richContent 
  
`
// content {
//     ... on List {
//       title
//       __typename
//       list_items {
//         item_title            
//       }
//     }
//     ... on Paragraph {
//       text
//       __typename
//     }
//     ... on Heading1 {
//       __typename
//       text
//     }
//     ... on Heading2 {
//       __typename
//       text
//     }
//     ... on Heading3 {
//       __typename
//       text
//     }
//     ... on Heading4 {
//       __typename
//       text
//     }

//     ... on Quote {
//       __typename
//       text
//     }
//     ... on Image {
//       __typename
//       image {
//         ${imageFragment}
//       }
//       caption
//     }
//   }
