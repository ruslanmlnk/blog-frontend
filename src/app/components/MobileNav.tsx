"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

type Item = { label: string; href: string };

export default function MobileNav({ items }: { items: Item[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Close menu when route changes
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    // Lock body scroll when menu is open
    if (open) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        aria-label="Открыть меню"
        aria-expanded={open}
        className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-neutral-200 text-neutral-800"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="sr-only">Меню</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {open ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <>
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 overflow-y-auto overscroll-contain" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/30" onClick={() => setOpen(false)} />
          <div className="relative w-full pt-[7.5rem] pb-4 px-4">
            <nav className="w-full rounded-xl bg-white shadow-xl ring-1 ring-neutral-200 p-2 divide-y divide-neutral-100 max-h-[calc(100svh-7.5rem-1rem)] overflow-y-auto">
              {items.map((item) => {
                const active =
                  pathname === item.href || pathname?.startsWith(item.href + "/") ||
                  (item.href === "/contacts" && (pathname?.startsWith("/contact") || pathname?.startsWith("/contacts")));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-3 text-base font-semibold uppercase tracking-wide ${active ? "text-blue-600" : "text-neutral-800"}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
