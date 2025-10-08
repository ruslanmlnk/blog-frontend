import { fetchArticle } from '@/fetch/articles.fetch';

import RichContent from '@/app/components/article/RichContent';

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await fetchArticle(slug);

  if (!article || !article.docs || article.docs.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-xl">Стаття не знайдена</p>
      </div>
    );
  }

  const articleData = article.docs[0];

  // const renderBlock = (block: BlockHeading | BlockParagraph | BlockList | BlockImage | BlockQuote, index: number) => {
  //   switch (block.__typename) {
  //     case 'Heading1':
  //     case 'Heading2':
  //     case 'Heading3':
  //     case 'Heading4':
  //       return <ArticleHeading key={index} {...block} />;
      
  //     case 'Paragraph':
  //       return <ArticleParagraph key={index} {...block} />;
      
  //     case 'List':
  //       return <ArticleList key={index} {...block} />;
      
  //     case 'Quote':
  //       return <ArticleQuote key={index} {...block} />;
        
  //     case 'Image':
  //       return <ArticleImage key={index} {...block} />;
      
  //     default:
  //       return null;
  //   }
  // };

  return (
    <article className="max-w-[1318px] mx-auto px-4 py-10 md:py-[74px]">
      <h1 className="text-[42px] font-bold text-[#151515] md:mb-[35px] text-center leading-[125%]">
          {articleData.title}
      </h1>


       {articleData.createdAt && (
            <div className="text-center font-bold text[12px] text-[#7F7F7F] mb-[74px] uppercase leading-[160%]">
              {new Date(articleData.createdAt).toLocaleDateString('uk-UA', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
        )}


      {/* {articleData.bg && (
        <div className="relative w-full mb-8 rounded-lg overflow-hidden">
          <img
            src={articleData.bg.url}
            alt={articleData.bg.alt || articleData.title}
            className="object-cover w-full"
          />
        </div>
      )} */}

        
        
        {/* {articleData.description && (
          <p className="text-xl text-[#6B7280] mb-4">
            {articleData.description}
          </p>
        )} */}

        {/* <div className="flex items-center gap-4 text-sm text-[#6B7280]">
          {articleData.category && (
            <span className="bg-gray-100 px-3 py-1 rounded-full">
              {articleData.category.title}
            </span>
          )}
          {articleData.createdAt && (
            <time dateTime={articleData.createdAt}>
              {new Date(articleData.createdAt).toLocaleDateString('uk-UA', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          )}
        </div> */}

      {/* Контент статті */}
      {/* <div className="w-full flex flex-col gap-[74px]">
        {articleData.content?.map((block, index) => renderBlock(block, index))}
      </div> */}

      {articleData.richContent && (
        <RichContent content={articleData.richContent} />
      )}
    </article>
  );
}