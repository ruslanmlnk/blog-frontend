import { BlockHeading } from "@/fetch/types/article.type";

const baseStyle = "text-[#151515] font-bold leading-[160%]";
const headingMap = {
  Heading1: (t: string) => <h1 className={`${baseStyle}`} dangerouslySetInnerHTML={{ __html: t }} />,
  Heading2: (t: string) => <h2 className={`${baseStyle}`} dangerouslySetInnerHTML={{ __html: t }} />,
  Heading3: (t: string) => <h3 className={`${baseStyle} text-[24px]`} dangerouslySetInnerHTML={{ __html: t }} />,
  Heading4: (t: string) => <h4 className={`${baseStyle}`} dangerouslySetInnerHTML={{ __html: t }} />,
};

export default function ArticleHeading({ __typename, text }: BlockHeading) {
  return headingMap[__typename]?.(text) ?? <p dangerouslySetInnerHTML={{ __html: text }} />;
}