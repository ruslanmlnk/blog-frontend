import Link from "next/link";
import Image from "next/image";

export type OverlayItem = {
  href: string;
  image: string;
  title: string;
  dateLabel?: string;
};

export default function BlogOverlayPair({ items = [] as OverlayItem[] }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-[35px]">
      {items.slice(0, 2).map((it, i) => (
        <article
          key={i}
          className="rounded-xl overflow-hidden ring-1 ring-neutral-200 shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
        >
          <div className="relative">
            <Link href={it.href}>
              <Image
                src={it.image}
                alt={it.title}
                width={1920}            // треба обов'язково вказати
                height={500}            // умовно (під твій h-100)
                className="w-full h-100 object-cover"
                loading="lazy"
              />
            </Link>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-[35px] left-4 right-4 text-white">
              {it.dateLabel && (
                <div className="text-[14px] font-bold opacity-70 mb-2 leading-[160%] uppercase">
                  {it.dateLabel}
                </div>
              )}
              <h3 className="text-[22px] font-bold leading-[160%]">
                <Link href={it.href}>{it.title}</Link>
              </h3>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
