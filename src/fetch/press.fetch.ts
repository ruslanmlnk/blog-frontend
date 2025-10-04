import { graphQLClient } from "./gqlClient";
import { pressQuery } from "./queries/press.query";
import { Presses } from "./types/press.type";

export default async function fetchPress() {
  try {
    const data = await graphQLClient.request<Presses>(pressQuery);
    return data.Presses.docs[0];
    
  } catch (error) {
    console.error("GraphQL Error:", JSON.stringify(error, null, 2));
    return null;
  }
} 
