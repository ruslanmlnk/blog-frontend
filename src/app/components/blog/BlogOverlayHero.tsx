import Link from "next/link";
import Image from "next/image";

export type HeroItem = {
  href: string;
  image: string;
  title: string;
  dateLabel?: string;
  subtitle?: string;
};

export default function BlogOverlayHero({ item }: { item?: HeroItem | null }) {
  if (!item) return null;

  return (
    <section className="rounded-[10px] overflow-hidden ring-1 ring-neutral-200 shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
      <div className="relative w-full h-64 md:h-[482px]">
        <Link href={item.href}>
          <Image
            src={item.image}
            alt={item.title}
            fill
            style={{ objectFit: "cover" }}
            className="w-full h-full"
            priority={false} // Lazy load
          />
        </Link>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 text-white text-center flex flex-col gap-[25px] items-center">
          {item.dateLabel && (
            <div className="text-[14px] font-bold opacity-70 leading-[160%] uppercase">
              {item.dateLabel}
            </div>
          )}
          <h3 className="text-2xl md:text-[42px] font-bold leading-[29px]">
            <Link href={item.href}>{item.title}</Link>
          </h3>
          {item.subtitle && (
            <p className="text-[14px] md:text-[22px] leading-[160%] font-bold max-w-[577px]">
              {item.subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
