import { graphQLClient } from "./gqlClient";
import { homepageQuery } from "./queries/homepage.query";
import { getServerLocale } from "./locale";

export default async function fetchHomepage() {
  try {
    const locale = await getServerLocale();
    const data = await graphQLClient.request<{Homes: any}>(homepageQuery, { locale });
    return data.Homes.docs[0] || null;
  } catch (error) {
    console.error("GraphQL Error:", JSON.stringify(error, null, 2));
    return null;
  }
}
