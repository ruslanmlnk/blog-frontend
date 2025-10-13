import Image from "next/image";
import type { AltMedia } from "@/fetch/types/image.type";

export default function AboutHero({ image }: { image?: AltMedia | null }) {
  const src =
    image?.url ||
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop";
  const alt = image?.alt || "About hero image";

  return (
    <div className="relative rounded-[30px] overflow-hidden ring-1 ring-neutral-200 shadow-[0_8px_24px_rgba(0,0,0,0.08)] w-full md:h-[600px]">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 100vw"
        loading="lazy"
      />
    </div>
  );
}
