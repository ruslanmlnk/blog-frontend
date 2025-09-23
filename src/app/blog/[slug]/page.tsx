import ArticleHeading from "@/app/components/article/blocks/ArticleHeading";
import { ArticleList } from "@/app/components/article/blocks/ArticleList";
import ArticleParagraph from "@/app/components/article/blocks/ArticleParagraph";
import { fetchArticle } from "@/fetch/articles.fetch";
import { ArticleCategory } from "@/fetch/types/articleCategories.type";


type Props = { params: { slug: string } };

export default async function Article({ params }: Props) {
    const {slug} = await params;

    const articleQuery = await fetchArticle(slug);
    const article = articleQuery?.docs[0];


    const headingArticle: ArticleCategory[] = article?.content
    .filter((block): block is { __typename: 'Heading2'; text: string } => block.__typename === 'Heading2')
    .map((block) => ({
        title: block.text,
        id: block.text,
        slug: block.text,
    })) || [];
    return(
        <>
            <h1>
                {article?.title || ""}
            </h1>

            {article?.content.map((block, idx) => {
              switch(block.__typename){
                case 'List':
                  return <ArticleList key={idx} {...block}/>
                case 'Paragraph':
                  return <ArticleParagraph key={idx} {...block} />
                case 'Heading1':
                case 'Heading2':
                case 'Heading3':
                case 'Heading4':
                  return <ArticleHeading key={idx} {...block} />
              }
            })}
        </>
    )
}

export async function generateMetadata({params}: Props){
    const articleQuery = await fetchArticle(params.slug);
    const article = articleQuery?.docs[0];
    return {
        title: article?.title || " ",
        description: article?.description || ""
    }
}