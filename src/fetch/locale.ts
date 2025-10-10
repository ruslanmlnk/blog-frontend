import { cookies } from "next/headers";

export function getServerLocale(): string {
  try {
    const c = cookies();
    const v = c.get("lang")?.value || "ru";
    if (["ru", "uk", "en", "fr"].includes(v)) return v;
    return "ru";
  } catch {
    return "ru";
  }
}

