import Link from "next/link";
import Image from "next/image";
import { fetchCategories } from "@/fetch/articleCategories.fetch";
import type { AltMedia } from "@/fetch/types/image.type";
import { getServerLocale } from "@/fetch/locale";
import en from "@/i18n/locales/en.json";
import ru from "@/i18n/locales/ru.json";
import uk from "@/i18n/locales/uk.json";
import fr from "@/i18n/locales/fr.json";

function BackToAllIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M17.25 11.25H9.31051L12.4012 8.15926C12.6945 7.866 12.6945 7.39126 12.4012 7.09875C12.108 6.80549 11.6333 6.80549 11.3407 7.09875L7.098 11.3415C6.91875 11.5207 6.86251 11.7675 6.90373 12C6.86247 12.2325 6.91875 12.4793 7.09875 12.6593L11.3415 16.902C11.6347 17.1953 12.1095 17.1953 12.402 16.902C12.6953 16.6087 12.6953 16.134 12.402 15.8415L9.31051 12.75H17.25C17.664 12.75 18 12.414 18 12C18 11.586 17.664 11.25 17.25 11.25ZM12 0C5.37224 0 0 5.37224 0 12C0 18.627 5.37224 24 12 24C18.6278 24 24 18.627 24 12C24 5.37224 18.6278 0 12 0ZM12 22.5C6.20098 22.5 1.5 17.799 1.5 12C1.5 6.20098 6.20098 1.5 12 1.5C17.799 1.5 22.5 6.20098 22.5 12C22.5 17.799 17.799 22.5 12 22.5Z" fill="white"/>
    </svg>
  );
}

type ChipItem = { id: string | number; title: string; icon?: AltMedia | null };

export default async function CategoriesChips({
  selectedId,
  items,
  hrefFor,
  backHref = "/",
  backLabel = "Вернуться на главную",
}: {
  selectedId?: string | null;
  items?: ChipItem[];
  hrefFor?: (id: string | number) => string;
  backHref?: string;
  backLabel?: string;
}) {
  const categories: any[] = items ?? (await fetchCategories());
  const locale = await getServerLocale();
  const dict = locale === "ru" ? ru : locale === "uk" ? uk : locale === "fr" ? fr : en;
  const BACK_TO_HOME = (dict as any)?.categories?.backHome || (dict as any)?.common?.backHome ||
    (locale === "uk" ? "Повернутися на головну" : locale === "ru" ? "Вернуться на главную" : locale === "fr" ? "Retour à l'accueil" : "Back to home");
  const ALL = locale === "uk" ? "Всі" : locale === "ru" ? "Все" : locale === "fr" ? "Tous" : "All";

  return (
    <div className="bg-[#0B4CC0] border border-[#E0E0E0]">
      <div className="max-w-[1312px] mx-auto px-4  not-md:flex-col not-md:py-5 not-md:gap-4 md:h-[152px] flex items-center justify-between text-white">
        {/* Back to all */}
        <Link href={backHref} className="inline-flex items-center gap-3 text-white/90 hover:text-white transition-colors">
          <BackToAllIcon />
          <span className="text-[16px] leading-[22px] tracking-[-0.4px]">{BACK_TO_HOME}</span>
        </Link>

        {/* Chips group */}
        <div className="flex items-center gap-4 not-md:flex-col justify-center">
          {categories.map((c: any) => {
            const id = (c.id ?? c._id) as string | number;
            const title = String(id) === "hub" ? ALL : ((c.title ?? c.name) as string);
            const icon = c.icon as AltMedia | null | undefined;
            const active = selectedId === String(id);
            const base = "inline-flex items-center px-5 py-3 md:px-6 md:py-[20px] rounded-[10px] text-[12px] md:text-[14px] leading-[160%] font-bold";
            const style = active
              ? "bg-white text-neutral-900 shadow-sm"
              : "text-white border border-white/60 hover:bg-white/10";
            return (
              <Link key={id} href={hrefFor ? hrefFor(id) : `/blog?category=${encodeURIComponent(String(id))}`} className={`${base} ${style}`}>
                {icon?.url ? (
                  <div className="relative w-6 h-6 mr-[10px]">
                    <Image
                      src={icon.url}
                      alt={icon.alt || title}
                      fill
                      style={{ objectFit: "contain" }}
                      loading="lazy"
                    />
                  </div>
                ) : null}
                {title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
