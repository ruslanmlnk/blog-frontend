'use client'

import fetchArticles from "@/fetch/articles.fetch";
import { Article } from "@/fetch/types/article.type";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react"
import PreviewCard from "./PreviewCard";

export default function PreviewList(){
	const categoryParam = useSearchParams().get("category");
	const [articles, setArticles] = useState<Array<Article >>([]);
	const [page, setPage] = useState<number>(1);
	const [isShow, setIsShow] = useState<boolean>(false);
	const [categoryId, setCategoryId] = useState<string | undefined>(undefined);

    const showMoreHandler = () => {
		setPage((prev) => ++prev);
	};

	useEffect(() =>{
	 setPage(1)
		setCategoryId(categoryParam || "")
	},[categoryParam]) 


    useEffect(() => {
        (async () => {
            const data = await fetchArticles(page, categoryId || "");
            console.log(data);
            if (page === 1) {
                setArticles(data?.docs || []);
            } else {
                setArticles(prev => [...prev, ...(data?.docs || [])]);
            }

            setIsShow(data?.hasNextPage ?? false);
        })();
    }, [page, categoryId]);

    console.log(articles);
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {articles.map((article, idx) => (
            <PreviewCard {...article} key={idx} />
          ))}
        </div>
        {isShow && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={showMoreHandler}
              className="px-4 py-2 border rounded hover:bg-gray-50"
            >
              Show more
            </button>
          </div>
        )}
      </>
    );
}
