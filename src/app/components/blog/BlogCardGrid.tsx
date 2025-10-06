import Link from "next/link";

export type CardItem = {
  href: string;
  image: string;
  title: string;
  dateLabel?: string;
  description?: string;
};

export default function BlogCardGrid({ items = [] as CardItem[] }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-[35px]">
      {items.slice(0, 3).map((it, i) => (
        <article
          key={i}
          className="bg-white rounded-xl ring-1 ring-neutral-200 shadow-[0_6px_18px_rgba(0,0,0,0.1)] overflow-hidden"
        >
          <Link href={it.href}>
            <img src={it.image} alt={it.title} className="w-full h-[234px] object-cover" />
          </Link>
          <div className="py-[35px] px-4">
            {it.dateLabel && (
              <div className="text-[12px] font-bold text-[#767676] mb-[25px] leading-[8px] uppercase">{it.dateLabel}</div>
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

