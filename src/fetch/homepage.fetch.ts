import { graphQLClient } from "./gqlClient";
import { homepageQuery } from "./queries/homepage.query";
import { Homes } from "./types/homepage.type";

export default async function fetchHomepage() {
  try {
    const data = await graphQLClient.request<Homes>(homepageQuery);
    return data.Homes.docs[0] || null;
  } catch (error) {
    console.error("GraphQL Error:", JSON.stringify(error, null, 2));
    return null;
  }
}
