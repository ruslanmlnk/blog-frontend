import { BlockHeading } from "@/fetch/types/article.type";

const headingMap = {
  Heading1: (t: string) => <h1>{t}</h1>,
  Heading2: (t: string) => <h2>{t}</h2>,
  Heading3: (t: string) => <h3>{t}</h3>,
  Heading4: (t: string) => <h3>{t}</h3>,
};

export default function ArticleHeading({ __typename, text }: BlockHeading) {
  return headingMap[__typename]?.(text) ?? <p>{text}</p>;
}
