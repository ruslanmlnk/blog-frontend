"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useI18n, type Locale } from "@/i18n/I18nProvider";

type Props = {
  className?: string;
};

const LANGS = ["en", "ru", "uk", "fr"] as const;
type Lang = typeof LANGS[number];

export default function LanguageSelector({ className = "" }: Props) {
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <div ref={ref} className={`relative select-none ${className}`}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 uppercase font-semibold text-[#151515] hover:text-neutral-900 transition-colors"
      >
        <span>{locale.toUpperCase()}</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform ${open ? "rotate-180" : "rotate-0"}`}
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 mt-2 min-w-[80px] rounded-md bg-white shadow-lg ring-1 ring-black/5 p-1 z-20"
        >
          {LANGS.map((l) => (
            <li key={l} role="option" aria-selected={l === locale}>
              <button
                className={`w-full text-left px-3 py-2 uppercase text-sm font-medium rounded-md transition-colors ${
                  l === locale ? "text-blue-600" : "text-[#151515] hover:bg-neutral-50"
                }`}
                onClick={() => {
                  setLocale(l as Locale);
                  // Ensure cookie is updated before refreshing (server reads it)
                  try {
                    document.cookie = `lang=${l}; path=/; max-age=31536000`;
                    localStorage.setItem("lang", l);
                  } catch {}
                  setOpen(false);
                  // Refresh server components to re-fetch localized content
                  try { router.refresh(); } catch {}
                }}
              >
                {l.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
