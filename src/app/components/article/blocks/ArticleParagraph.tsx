import { BlockParagraph } from "@/fetch/types/article.type";

export default function ArticleParagraph({text}: BlockParagraph){
    return <p>{text}</p>
}