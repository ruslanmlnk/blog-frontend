import Link from "next/link";
import { fetchCategories } from "@/fetch/articleCategories.fetch";

function BackToAllIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M17.25 11.25H9.31051L12.4012 8.15926C12.6945 7.866 12.6945 7.39126 12.4012 7.09875C12.108 6.80549 11.6333 6.80549 11.3407 7.09875L7.098 11.3415C6.91875 11.5207 6.86251 11.7675 6.90373 12C6.86247 12.2325 6.91875 12.4793 7.09875 12.6593L11.3415 16.902C11.6347 17.1953 12.1095 17.1953 12.402 16.902C12.6953 16.6087 12.6953 16.134 12.402 15.8415L9.31051 12.75H17.25C17.664 12.75 18 12.414 18 12C18 11.586 17.664 11.25 17.25 11.25ZM12 0C5.37224 0 0 5.37224 0 12C0 18.627 5.37224 24 12 24C18.6278 24 24 18.627 24 12C24 5.37224 18.6278 0 12 0ZM12 22.5C6.20098 22.5 1.5 17.799 1.5 12C1.5 6.20098 6.20098 1.5 12 1.5C17.799 1.5 22.5 6.20098 22.5 12C22.5 17.799 17.799 22.5 12 22.5Z" fill="white"/>
    </svg>
  );
}

export default async function CategoriesChips({ selectedId }: { selectedId?: string | null }) {
  const categories = await fetchCategories();

  return (
    <div className="bg-[#0B4CC0] border border-[#E0E0E0]">
      <div className="max-w-[1312px] mx-auto px-4 h-[152px] flex items-center justify-between text-white">
        {/* Back to all news */}
        <Link href="/blog" className="inline-flex items-center gap-3 text-white/90 hover:text-white transition-colors">
            <BackToAllIcon />
          <span className="text-[16px] leading-[22px] tracking-[-0.4px]">Вернуться ко всем новостям</span>
        </Link>

        {/* Categories group */}
        <div className="flex items-center gap-4 flex-wrap justify-center">
          {categories.map((c) => {
            const active = selectedId === String(c.id);
            const base = "inline-flex items-center px-6 py-[20px] rounded-[10px] text-[14px] leading-[160%] font-bold";
            const style = active
              ? "bg-white text-neutral-900 shadow-sm"
              : "text-white border border-white/60 hover:bg-white/10";
            return (
              <Link key={c.id} href={`/blog?category=${encodeURIComponent(String(c.id))}`} className={`${base} ${style}`}>
                {c.icon?.url ? (
                  <img
                    src={c.icon.url}
                    alt={c.icon.alt || c.title}
                    className="mr-[10px] w-6"
                    loading="lazy"
                  />
                ) : (
                  active && (
                    <span className="mr-2 inline-block w-5 h-3 rounded-sm bg-[linear-gradient(#FFD54F,#FFD54F)_0_0/100%_50%_no-repeat,linear-gradient(#0B4CC0,#0B4CC0)_0_100%/100%_50%_no-repeat]" />
                  )
                )}
                {c.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
