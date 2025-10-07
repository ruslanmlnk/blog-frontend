import { graphQLClient } from "./gqlClient";
import { pressOutletsQuery } from "./queries/pressOutlets.query";
import type { PressOutletsQueryResponse } from "./types/pressOutlets.type";

export async function fetchPressOutlets() {
  try {
    const data = await graphQLClient.request<PressOutletsQueryResponse>(pressOutletsQuery);
    return data.Press_outlets.docs;
  } catch (error) {
    console.error("GraphQL Error (press outlets):", JSON.stringify(error, null, 2));
    return [] as any[];
  }
}

