"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import en from "./locales/en.json";
import ru from "./locales/ru.json";
import uk from "./locales/uk.json";
import fr from "./locales/fr.json";

export type Locale = "en" | "ru" | "uk" | "fr";

type Dict = Record<string, any>;

const DICTS: Record<Locale, Dict> = { en, ru, uk, fr } as const;

function get(obj: Dict, path: string): string {
  const parts = path.split(".");
  let cur: any = obj;
  for (const p of parts) {
    if (cur && typeof cur === "object" && p in cur) cur = cur[p];
    else return path; // fallback to key
  }
  return typeof cur === "string" ? cur : path;
}

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
};

const I18nCtx = createContext<Ctx | null>(null);

export function I18nProvider({ children, initialLocale = "en" as Locale }: { children: React.ReactNode; initialLocale?: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);

  // Persist locale in cookie + localStorage
  useEffect(() => {
    try {
      document.cookie = `lang=${locale}; path=/; max-age=31536000`;
      localStorage.setItem("lang", locale);
    } catch {}
  }, [locale]);

  const dict = useMemo(() => DICTS[locale] ?? DICTS.en, [locale]);

  const value = useMemo<Ctx>(() => ({
    locale,
    setLocale,
    t: (key: string) => get(dict, key),
  }), [locale, dict]);

  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

