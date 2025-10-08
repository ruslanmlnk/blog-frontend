import { BlockQuote } from "@/fetch/types/article.type";

export default function ArticleQuote({ text }: BlockQuote) {
  return (
    <blockquote className="mt-[40px] border-l-2 border-black pl-6">
      <p className="text-base text-black leading-[165%] tracking-[-0.4px]"dangerouslySetInnerHTML={{ __html: text }}/>
    </blockquote>
  );
}