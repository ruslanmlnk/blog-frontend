"use client";

import Link from "next/link";
import HeaderNav from "./HeaderNav";
import TopCategoriesBar from "./TopCategoriesBar";
import MobileNav from "./MobileNav";
import LanguageSelector from "./LanguageSelector";
import { useI18n } from "@/i18n/I18nProvider";

export default function Header() {
  const { t } = useI18n();
  // Static items per request: no admin fetching
  const categories = [
    { id: "1", title: "ПОЛИТИКА И ВЫБОРЫ" },
    { id: "2", title: "РЕПРЕССИИ В РОССИИ" },
    { id: "3", title: "ЕВРОПА" },
    { id: "4", title: "УКРАИНА" },
  ];

  const navItems = [
    { label: "О центре", href: "/about" },
    { label: "Публикаци", href: "/blog" },
    { label: "В СМИ", href: "/press" },
    { label: "Интервью", href: "/interview" },
    { label: "Контакты", href: "/contacts" },
  ];

  // Localized versions for UI
  const i18nCategories = [
    { id: "1", title: t("top.cats.0") },
    { id: "2", title: t("top.cats.1") },
    { id: "3", title: t("top.cats.2") },
    { id: "4", title: t("top.cats.3") },
  ];
  const i18nNavItems = [
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.blog"), href: "/blog" },
    { label: t("nav.press"), href: "/press" },
    { label: t("nav.interview"), href: "/interview" },
    { label: t("nav.contacts"), href: "/contacts" },
  ];

  return (
    <header className="w-full">
      <TopCategoriesBar items={i18nCategories.map((c) => c.title)} />

      {/* Main bar */}
      <div className="bg-white border border-[#E0E0E0]">
        <div className="site-container h-16 md:h-[110px] flex items-center justify-between !max-w-[1312px]">
          <Link
            href="/"
            className="uppercase font-extrabold text-2xl max-w-[200px] md:max-w-[100%] md:text-[32px] text-[#151515] select-none"
          >
            {t("brand.name")}
          </Link>
          <div className="hidden md:flex items-center">
            <HeaderNav items={i18nNavItems} />
            <LanguageSelector className="ml-[70px]" />
          </div>
          <div className="flex items-center gap-3 md:hidden">
            <LanguageSelector />
            <MobileNav items={i18nNavItems} />
          </div>
        </div>
      </div>
    </header>
  );
}
