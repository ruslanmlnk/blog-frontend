import { BlockImage } from "@/fetch/types/article.type";
import Image from 'next/image';

export default function ArticleImage({ image, caption }: BlockImage) {
  if (!image) return null;

  return (
    <div className="mt-[40px]">
      <div className="w-full">
        <img
          src={image.url}
          alt={image.alt || caption || "Article image"}
          className="object-cover rounded-lg"
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