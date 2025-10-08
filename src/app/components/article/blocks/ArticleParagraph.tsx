import { BlockParagraph } from "@/fetch/types/article.type";

export default function ArticleParagraph({text}: BlockParagraph){
    return <p className="text-black text-base leading-[165%] trtacking-[-0.4px]">{text}</p>
}