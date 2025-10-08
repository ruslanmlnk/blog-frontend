import { graphQLClient } from "./gqlClient";
import { createContactMessageMutation } from "./queries/contact.mutation";
import type { CreateContactMessageResponse } from "./types/contactMessage.type";

export async function createContactMessage(data: {
  name: string;
  email?: string;
  phone?: string;
  message?: string;
}) {
  try {
    const res = await graphQLClient.request<CreateContactMessageResponse>(
      createContactMessageMutation,
      data
    );
    return res.createContactMessage;
  } catch (error) {
    console.error("Error creating contact message:", error);
    throw error;
  }
}
