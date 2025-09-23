import { graphQLClient } from "./gqlClient";
import { pressQuery } from "./queries/press.query";
import { Preses } from "./types/press.type";

export default async function fetchAbout() {
  try {
    const data = await graphQLClient.request<Preses>(pressQuery);
    return data.press.docs[0];
    
  } catch (error) {
    console.error("GraphQL Error:", JSON.stringify(error, null, 2));
    return null;
  }
} 