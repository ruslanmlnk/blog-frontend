import { BlockList } from "@/fetch/types/article.type"

export const ArticleList = ({title, list_items}: BlockList) => {
  return (
    <div className="mt-[40px]">
      {title && (<p className="font-bold text-[25px] text-[#353535]"> {title} </p>)}
      <ul className="list-disc list-inside mt-[30px]">

      {list_items.map((item, idx) => (
        <li key={idx} className="text-xl text-[#6B7280] leading-[2.5] "> {item.item_title} </li>
      ))}
      </ul>
    </div>
  )
}