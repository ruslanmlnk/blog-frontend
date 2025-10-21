import { gql } from "graphql-request";
import imageFragment from "../fragments/image.fragment";

export const articleCategoriesQuery = gql`
query getArticleCategories($locale: LocaleInputType) {
  Article_categories(locale: $locale, sort: "sortOrder") {
    docs {
      id
      title
      icon { ${imageFragment} }
    }
  }
}
`;

export const categoryByIdQuery = gql`
  query getCategoryById($id: Int!, $locale: LocaleInputType) {
    Article_categories(locale: $locale, where: { id: { equals: $id } }) {
      docs {
        id
        title
	meta{
          metaTitle
          metaDescription
        }
        icon { ${imageFragment} }
        content {
          ... on CategoryOverlayPair {
            __typename
            items {
              visibleFrom
              article {
                title
                slug
                description
                createdAt
                bg { ${imageFragment} }
                category { title id }
              }
            }
          }
          ... on CategoryCardGrid {
            __typename
            items {
              visibleFrom
              article {
                title
                slug
                description
                createdAt
                bg { ${imageFragment} }
                category { title id }
              }
            }
          }
          ... on CategoryOverlayHero {
            __typename
            visibleFrom
            article {
              title
              slug
              description
              createdAt
              bg { ${imageFragment} }
              category { title id }
            }
          }
        }
      }
    }
  }
`;
