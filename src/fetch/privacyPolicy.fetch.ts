import { gql } from "graphql-request";
import { graphQLClient } from "./gqlClient";
import { getServerLocale } from "./locale";

// --- GraphQL Query ---
export const getPrivacyPolicyQuery = gql`
  query getPrivacyPolicy($locale: LocaleInputType) {
    PrivacyPolicies(locale: $locale) {
      docs {
        id
        title
        metaTitle
        metaDescription
        richContent
      }
    }
  }
`;

// --- Types ---
export interface PrivacyPolicy {
  id: string;
  title: string;
  metaTitle?: string | null;
  metaDescription?: string | null;
  richContent?: any; // можна деталізувати JSON schema від lexical
}

export interface PrivacyPolicyQueryResponse {
  PrivacyPolicies: {
    docs: PrivacyPolicy[];
  };
}

// --- Fetch Function ---
export async function fetchPrivacyPolicy(): Promise<PrivacyPolicy | null> {
  try {
    const locale = await getServerLocale();
    const data = await graphQLClient.request<PrivacyPolicyQueryResponse>(
      getPrivacyPolicyQuery,
      { locale }
    );

    return data.PrivacyPolicies.docs[0] ?? null;
  } catch (error) {
    console.error("GraphQL Error:", JSON.stringify(error, null, 2));
    return null;
  }
}

