'use client'
import { AltMedia } from "@/fetch/types/image.type";
import { createWeeklyNewsletter } from "@/fetch/weekly.fetch";
import Link from "next/link";


type ChipItem = { id: string | number; title: string; icon?: AltMedia | null };

export default function Footer({categories}:{categories?: ChipItem[];}) {


    console.log(categories);
  
    const handleSubmitWeekly = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      const form = e.currentTarget;
      const formData = {
        email: (form.elements.namedItem("email") as HTMLInputElement).value,
      };
  
      console.log(formData);
      try {
        await createWeeklyNewsletter(formData);
        form.reset();
        // alert("✅ Сообщение отправлено!");
      } catch {
        // alert("❌ Ошибка при отправке!");
      }
    };

    const handleSubmitWeeklyWithEmail = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.currentTarget;
      const formData = {
        email: (form.elements.namedItem("email") as HTMLInputElement).value,
      };
      try {
        await createWeeklyNewsletter(formData);
        try {
          await fetch("/api/newsletter-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });
        } catch (err) {
          console.error("Failed to send newsletter email", err);
        }
        form.reset();
      } catch (err) {
        console.error("Failed to save newsletter subscription", err);
      }
    };
    
  const navItems = [
    { label: "О центре", href: "/about" },
    { label: "Публикаци", href: "/blog" },
    { label: "В СМИ", href: "/press" },
    { label: "Интервью", href: "/interview" },
    { label: "Контакты", href: "/contacts" },
  ];

  return (
    <footer className="mt-22">
      {/* Upper footer */}
      <div className="site-container">
        <div className="md:flex md:items-start">
          {/* Newsletter (fixed width 581px) */}
          <div className="w-full md:w-[581px]">
            <h3 className="text-[12px] font-extrabold text-neutral-700 uppercase tracking-widest">
              РАССЫЛКА НОВОСТЕЙ
            </h3>
            <p className="mt-[18px] text-[#000] text-[14px]">
              Подпишитесь на еженедельную рассылку, чтобы получать актуальные новости
            </p>
            <div className="mt-4">
              <form className="w-full flex items-center gap-3 bg-neutral-100 border border-neutral-200 rounded-lg px-2 md:px-4 py-3 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.02)]" onSubmit={handleSubmitWeeklyWithEmail}>
                <input
                  type="email"
                  name="email"
                  placeholder="Введите свой адрес электронной почты"
                  className="flex-1 bg-transparent outline-none text-[15px] placeholder-neutral-500 px-1"
                />
                <button
                  className="shrink-0 h-10 px-4 rounded-md bg-blue-700 text-white font-semibold uppercase text-[10px] md:text-[13px] tracking-wide hover:bg-blue-800 transition-colors" type="submit"
                >
                  подписаться
                </button>
              </form>
            </div>
          </div>

          {/* Right cluster (ml 200px, width 505px -> two cols 252px + 1px border + 252px) */}
          <div className="w-full not-md:gap-10 md:w-[505px] md:ml-[200px] flex flex-col not-md:my-[20px] gap-y-[20px] md:flex-row min-h-[330px]">
            {/* Details column (252px, with left divider) */}
            <div className=" md:w-[314px] box-border md:border-l md:border-neutral-200 md:pl-10">
              <h3 className="text-[14px] md:text-[12px] font-extrabold text-neutral-700 uppercase tracking-widest">
                ДЕТАЛЬНЕЕ
              </h3>
              <ul className="mt-3 space-y-[10px] leading-[27px] text-[#000] whitespace-nowrap">
                {navItems.map((item) => (
                  <li className="hover:text-neutral-950 cursor-pointer">
                    <Link
                      key={item.href + item.label}
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Categories column (252px, with left divider) */}
            <div className=" md:w-[191px] box-border md:border-l md:border-neutral-200 md:pl-10">
              <h3 className="text-[14px] md:text-[12px] font-extrabold text-neutral-700 uppercase tracking-widest">
                КАТЕГОРИИ
              </h3>
              <ul className="mt-3 space-y-[10px] leading-[27px] text-[#000] whitespace-nowrap">
                {categories?.map((c: any) => {
                  return <li className="hover:text-neutral-950 cursor-pointer"><Link key={c.id} href={`/blog?category=${encodeURIComponent(String(c.id))}`}>{c.title}</Link></li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#E0E0E0]">
        <div className="site-container not-md:text-center not-md:gap-2 not-md:py-[20px] md:h-[117px] flex not-md:flex-col items-center justify-between text-sm text-neutral-600">
          <a className="hover:text-neutral-900" href="#">Политика конфиденциальности</a>
          <div>© 2025 Parubets Analytics. Все права защищены.</div>
        </div>
      </div>
    </footer>
  );
}
