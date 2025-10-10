import { graphQLClient } from "./gqlClient";
import { homepageQuery } from "./queries/homepage.query";
import { getServerLocale } from "./locale";
import { Homes } from "./types/homepage.type";

export default async function fetchHomepage() {
  try {
    const locale = getServerLocale();
    const data = await graphQLClient.request<Homes>(homepageQuery, { locale });
    return data.Homes.docs[0] || null;
  } catch (error) {
    console.error("GraphQL Error:", JSON.stringify(error, null, 2));
    return null;
  }
}
