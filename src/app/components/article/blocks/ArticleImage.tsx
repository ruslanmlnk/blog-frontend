import { BlockImage } from "@/fetch/types/article.type";
import Image from "next/image";

export default function ArticleImage({ image, caption }: BlockImage) {
  if (!image) return null;

  return (
    <div className="mt-[40px]">
      <div className="relative w-full h-auto">
        <Image
          src={image.url}
          alt={image.alt || caption || "Article image"}
          width={1200} // бажано вказати орієнтовну ширину
          height={800} // і висоту для оптимізації
          className="object-cover rounded-lg min-w-[30%] max-w-[100%] w-auto h-auto"
          sizes="(max-width: 768px) 100vw, 1200px"
          loading="lazy"
        />
      </div>
      {caption && (
        <div className="text-[#7F7F7F] text-base tracking-[-0.4px] leading-[22px] mt-6">
          {caption}
        </div>
      )}
    </div>
  );
}
