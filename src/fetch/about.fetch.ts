import { graphQLClient } from "./gqlClient";
import { aboutQuery } from "./queries/about.query";
import { getServerLocale } from "./locale";
import { Abouts } from "./types/about.type";

export default async function fetchAbout() {
  try {
    const locale = await getServerLocale();
    const data = await graphQLClient.request<Abouts>(aboutQuery, { locale });
    return data.Abouts.docs[0];
  } catch (error) {
    console.error("GraphQL Error:", JSON.stringify(error, null, 2));
    return null;
  }
}
