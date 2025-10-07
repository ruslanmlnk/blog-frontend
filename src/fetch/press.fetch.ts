import { graphQLClient } from "./gqlClient";
import { pressListQuery, pressByIdQuery } from "./queries/press.query";
import type { PressListResponse, PressByIdResponse } from "./types/press.type";

export async function fetchPressList() {
  try {
    const data = await graphQLClient.request<PressListResponse>(pressListQuery);
    return data.Presses.docs;
  } catch (error) {
    console.error("GraphQL Error (press list):", JSON.stringify(error, null, 2));
    return [] as any[];
  }
}

export async function fetchPressById(id: string | number) {
  try {
    const data = await graphQLClient.request<PressByIdResponse>(pressByIdQuery, { id: Number(id) });
    return data.Presses.docs[0] || null;
  } catch (error) {
    console.error("GraphQL Error (press by id):", JSON.stringify(error, null, 2));
    return null;
  }
}

