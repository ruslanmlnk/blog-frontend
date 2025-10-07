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
    { label: "Публикаци", href: "/blog" },
    { label: "В СМИ", href: "/press" },
    { label: "Интервью", href: "/interview" },
    { label: "Контакты", href: "/contacts" },
  ];

  return (
    <header className="w-full">
      <TopCategoriesBar items={categories.map((c) => c.title)} />

      {/* Main bar */}
      <div className="bg-white border border-[#E0E0E0]">
        <div className="site-container h-16 md:h-[110px] flex items-center justify-between !max-w-[1312px]">
          <Link
            href="/"
            className="uppercase font-extrabold text-2xl md:text-[32px] text-[#151515] select-none"
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
