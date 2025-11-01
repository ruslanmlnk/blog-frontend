import { gql } from "graphql-request";
import { graphQLClient } from "./gqlClient";
import { getServerLocale } from "./locale";

const siteGlobalsQuery = gql`
  query getSiteGlobals($locale: LocaleInputType) {
    SiteGlobal(locale: $locale) {
      menu { about blog press interview contacts }
      categories { backToHome }
      press {
        meta { metaTitle metaDescription }
        allTitle
      }
      interview {
        meta { metaTitle metaDescription }
        allTitle
      }
    }
  }
`;

export async function fetchSiteGlobals() {
  try {
    const locale = await getServerLocale();
    const data = await graphQLClient.request<{ SiteGlobal: any }>(siteGlobalsQuery, { locale });
    return data?.SiteGlobal ?? null;
  } catch (error) {
    console.error("GraphQL Error (site globals):", JSON.stringify(error, null, 2));
    return null;
  }
}
