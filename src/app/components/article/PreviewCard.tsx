import { Article } from "@/fetch/types/article.type";
import Link from "next/link";

export default function PreviewCard(article: Article){
    return (
        <Link href={`/blog/${article.slug}`}>{article.title}</Link>
    )
}