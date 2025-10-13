import Link from "next/link";
import Image from "next/image";
import { fetchCategories } from "@/fetch/articleCategories.fetch";

export default async function CategoriesPanel() {
  const categories = await fetchCategories();

  return (
    <div className="bg-white rounded-[10px] shadow-[0_8px_24px_rgba(0,0,0,0.08)] px-[25px] py-[45px]">
      <h4 className="text-[17px] leading-[12px] font-bold text-[#151515] mb-[30px]">Категории</h4>
      <div className="flex flex-col gap-5">
        {categories.map((c) => {
          const base = "duration-300 w-full h-[64px] rounded-[10px] flex items-center justify-center gap-[10px] px-4 bg-white border border-[#7F7F7F] hover:bg-[#0243A5] text-[#151515] hover:text-[#fff]";

          return (
            <Link
              key={c.id}
              href={`/blog?category=${encodeURIComponent(String(c.id))}`}
              className={`${base}`}
            >
              {c.icon?.url && (
                <div className="relative w-[24px] h-[24px] flex-shrink-0">
                  <Image
                    src={c.icon.url}
                    alt={c.icon.alt || c.title}
                    fill
                    className="object-contain"
                    loading="lazy"
                    sizes="24px"
                  />
                </div>
              )}
              <span className="font-medium text-[17px] leading-[160%]">{c.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
