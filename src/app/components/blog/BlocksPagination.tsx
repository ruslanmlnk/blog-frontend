import Link from "next/link";
import { getServerLocale } from "@/fetch/locale";
import en from "@/i18n/locales/en.json";
import ru from "@/i18n/locales/ru.json";
import uk from "@/i18n/locales/uk.json";
import fr from "@/i18n/locales/fr.json";

export default async function BlocksPagination({
  page,
  totalPages,
  hrefFor,
}: {
  page: number;
  totalPages: number;
  hrefFor: (p: number) => string;
}) {
  if (totalPages <= 1) return null;

  const locale = await getServerLocale();
  const dict = locale === "ru" ? ru : locale === "uk" ? uk : locale === "fr" ? fr : en;
  const prevLabel = (dict as any)?.pagination?.prev || (dict as any)?.common?.prev || (locale === "uk" ? "Назад" : locale === "ru" ? "Назад" : locale === "fr" ? "Précédent" : "Previous");
  const nextLabel = (dict as any)?.pagination?.next || (dict as any)?.common?.next || (locale === "uk" ? "Далі" : locale === "ru" ? "Далее" : locale === "fr" ? "Suivant" : "Next");

  const prev = page > 1 ? page - 1 : null;
  const next = page < totalPages ? page + 1 : null;

  return (
    <div className="h-[56px] mt-[140px] flex items-center justify-between border border-[#E0E0E0] rounded-[10px] items-center px-[28.65px]">
      {prev ? (
        <Link
          href={hrefFor(prev)}
          className="font-bold text-[17px] leading-[160%] text-[#151515]"
        >
          {prevLabel}
        </Link>
      ) : (
        <span />
      )}
      <div className="mx-auto font-bold  text-[17px] text-[#151515]">
        {page} / {totalPages}
      </div>
      {next && (
        <Link
          href={hrefFor(next)}
          className="font-bold text-[17px] leading-[160%] text-[#151515]"
        >
          {nextLabel}
        </Link>
      )}
    </div>
  );
}

