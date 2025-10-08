import { BlockList } from "@/fetch/types/article.type"

export const ArticleList = ({list_items}: BlockList) => {
  return (
    <div>
      {/* {title && (<p className="font-bold text-[25px] text-[#353535]"> {title} </p>)} */}
      <ul className="list-disc list-inside">

      {list_items.map((item, idx) => (
        <li key={idx} className="text-base text-black leading-[165%] tracking-[-0.4px]"> {item.item_title} </li>
      ))}
      </ul>
    </div>
  )
}