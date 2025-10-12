import { graphQLClient } from "./gqlClient";
import { interviewListQuery, interviewByIdQuery } from "./queries/interview.query";
import { getServerLocale } from "./locale";
import type { InterviewListResponse, InterviewByIdResponse } from "./types/interview.type";

export async function fetchInterviewList() {
  try {
    const locale = await getServerLocale();
    const data = await graphQLClient.request<InterviewListResponse>(interviewListQuery, { locale });
    return data.Interviews.docs;
  } catch (error) {
    console.error("GraphQL Error (interview list):", JSON.stringify(error, null, 2));
    return [] as any[];
  }
}

export async function fetchInterviewById(id: string | number) {
  try {
    const locale = await getServerLocale();
    const data = await graphQLClient.request<InterviewByIdResponse>(interviewByIdQuery, { id: Number(id), locale });
    return data.Interviews.docs[0] || null;
  } catch (error) {
    console.error("GraphQL Error (interview by id):", JSON.stringify(error, null, 2));
    return null;
  }
}
