import Link from "next/link";

export type CardItem = {
  href: string;
  image: string;
  title: string;
  dateLabel?: string;
  description?: string;
  // Optional press/source avatar + label
  avatar?: string;
  sourceLabel?: string;
};

export default function BlogCardGrid({ items = [] as CardItem[], twoCols = false }: { items?: CardItem[]; twoCols?: boolean }) {
  return (
    <section className={`grid grid-cols-1 ${twoCols ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-[35px]`}>
      {items.map((it, i) => (
        <article
          key={i}
          className="bg-white rounded-xl ring-1 ring-neutral-200 shadow-[0_6px_18px_rgba(0,0,0,0.1)] overflow-hidden"
        >
          <Link href={it.href}>
            <img src={it.image} alt={it.title} className="w-full h-[234px] object-cover" />
          </Link>
          <div className="py-[35px] px-4">
            {it.avatar ? (
              <div className="mb-[25px]">
                <div className="flex items-center gap-3">
                  <img
                    src={it.avatar}
                    alt={it.sourceLabel || "source"}
                    className="w-10 h-10 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div className="flex flex-col">
                    {it.sourceLabel && (
                      <span className="text-[12px] font-bold text-[#767676] uppercase">
                        {it.sourceLabel}
                      </span>
                    )}
                    {it.dateLabel && (
                      <span className="text-[12px] text-[#767676] mt-1">
                        {it.dateLabel}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              it.dateLabel && (
                <div className="text-[12px] font-bold text-[#767676] mb-[25px] leading-[8px] uppercase">{it.dateLabel}</div>
              )
            )}
            <h3 className="font-bold text-base leading-[160%] mb-[25px]">
              <Link href={it.href}>{it.title}</Link>
            </h3>
            {it.description && (
              <p className="text-[#767676] text-base leading-[22px] tracking-[-0.4px]">{it.description}</p>
            )}
          </div>
        </article>
      ))}
    </section>
  );
}
