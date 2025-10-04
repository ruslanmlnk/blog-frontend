import Link from "next/link";
import HeaderNav from "./HeaderNav";
import TopCategoriesBar from "./TopCategoriesBar";
import MobileNav from "./MobileNav";

export default function Header() {
  // Static items per request: no admin fetching
  const categories = [
    { id: "1", title: "ПОЛИТИКА И ВЫБОРЫ" },
    { id: "2", title: "РЕПРЕССИИ В РОССИИ" },
    { id: "3", title: "ЕВРОПА" },
    { id: "4", title: "УКРАИНА" },
  ];

  const navItems = [
    { label: "О центре", href: "/about" },
    { label: "Публикации", href: "/blog" },
    { label: "В СМИ", href: "/press" },
    { label: "Интервью", href: "/interview" },
    { label: "Контакты", href: "/contacts" },
  ];

  return (
    <header className="w-full">
      <TopCategoriesBar items={categories.map((c) => c.title)} />

      {/* Main bar */}
      <div className="bg-white border-b border-neutral-200">
        <div className="max-w-[1286px] mx-auto px-6 sm:px-8 md:px-10 h-16 md:h-20 flex items-center justify-between">
          <Link
            href="/"
            className="uppercase tracking-widest font-extrabold text-2xl md:text-3xl text-neutral-900 select-none"
          >
            Parubets Analytics
          </Link>
          <div className="hidden md:block">
            <HeaderNav items={navItems} />
          </div>
          <MobileNav items={navItems} />
        </div>
      </div>
    </header>
  );
}
