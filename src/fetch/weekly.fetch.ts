import { graphQLClient } from "./gqlClient";
import { createWeeklyNewsletterMutation } from "./queries/weekly.mutation";
import type { CreateWeeklyNewsletterResponse } from "./types/weekly.type";

export async function createWeeklyNewsletter(data: {
  email?: string;
}) {
  try {
    const res = await graphQLClient.request<CreateWeeklyNewsletterResponse>(
      createWeeklyNewsletterMutation,
      data
    );
    return res.createWeeklyNewsletter;
  } catch (error) {
    console.error("Error creating contact message:", error);
    throw error;
  }
}
