import { graphQLClient } from "./gqlClient";
import { contactQuery } from "./queries/contact.query";
import { getServerLocale } from "./locale";
import { Contacts } from "./types/contact.type";

export default async function fetchContact() {
  try {
    const locale = await getServerLocale();
    const data = await graphQLClient.request<Contacts>(contactQuery, { locale });
    return data.Contacts.docs[0];
  } catch (error) {
    console.error("GraphQL Error:", JSON.stringify(error, null, 2));
    return null;
  }
}
