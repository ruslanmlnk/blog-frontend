import { cookies } from "next/headers";

export async function getServerLocale(): Promise<string> {
  try {
    const c = await cookies();
    const v = c.get("lang")?.value || "ru";
    if (["ru", "uk", "en", "fr"].includes(v)) return v;
    return "ru";
  } catch {
    return "ru";
  }
}
