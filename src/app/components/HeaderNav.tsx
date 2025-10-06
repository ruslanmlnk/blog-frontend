"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Item = { label: string; href: string };

export default function HeaderNav({ items }: { items: Item[] }) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "#") return false;
    if (href === "/contacts") {
      return pathname?.startsWith("/contact") || pathname?.startsWith("/contacts");
    }
    return pathname === href || pathname?.startsWith(href + "/");
  };

  return (
    <nav className="flex items-center gap-[25px] text-sm md:text-base">
      {items.map((item) => (
        <Link
          key={item.href + item.label}
          href={item.href}
          className={
            "uppercase font-semibold transition-colors " +
            (isActive(item.href)
              ? "text-[#0243A5]"
              : "text-[#151515] hover:text-neutral-900")
          }
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
