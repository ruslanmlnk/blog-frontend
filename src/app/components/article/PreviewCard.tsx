import { Article } from "@/fetch/types/article.type";
import Link from "next/link";

function formatDate(dateStr: string) {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString(undefined, { month: "short", day: "2-digit" }).toUpperCase();
  } catch {
    return "";
  }
}

function estimateReadMinutes(article: Article) {
  const texts: string[] = [];
  for (const block of article.content || []) {
    if ((block as any).text) texts.push((block as any).text);
    if ((block as any).list_items) {
      for (const it of (block as any).list_items) {
        if (it?.item_title) texts.push(it.item_title);
      }
    }
  }
  const words = texts.join(" ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export default function PreviewCard(article: Article) {
  const dateLabel = formatDate(article.createdAt);
  const readMins = estimateReadMinutes(article);

  return (
    <article className="mb-12">
      {article.bg?.url && (
        <Link href={`/blog/${article.slug}`}>
          {/* Using img to keep setup simple */}
          <img
            src={article.bg.url}
            alt={article.bg.alt || article.title}
            className="w-full h-64 object-cover mb-4"
          />
        </Link>
      )}
      <div className="text-xs font-semibold tracking-wide text-gray-500 mb-3 flex gap-6">
        {dateLabel && <span>{dateLabel}</span>}
        <span>{readMins} MIN READ</span>
      </div>
      <h2 className="text-2xl md:text-3xl font-extrabold leading-tight mb-3">
        <Link href={`/blog/${article.slug}`}>{article.title}</Link>
      </h2>
      <p className="text-gray-700 text-base leading-relaxed">{article.description}</p>
    </article>
  );
}
