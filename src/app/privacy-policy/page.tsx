import { fetchPrivacyPolicy } from '@/fetch/privacyPolicy.fetch';

import RichContent from '@/app/components/article/RichContent';

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const privacy = await fetchPrivacyPolicy();
    console.log(privacy);
    // return (<></>);
  if (!privacy) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-xl">Текст не отримано</p>
      </div>
    );
  }



  return (
    <article className="max-w-[1318px] mx-auto px-4 py-10 md:py-[74px]">
      <h1 className="text-[42px] font-bold text-[#151515] md:mb-[35px] text-center leading-[125%]">
          {privacy.title}
      </h1>

   
      {privacy.richContent && (
        <RichContent content={privacy.richContent} />
      )}
    </article>
  );
}

export async function generateMetadata() {
  const privacy = await fetchPrivacyPolicy()

  return {
    title: privacy?.metaTitle || 'Privacy Policy',
    description: privacy?.metaDescription || 'Privacy Policy page description',
  }
}
