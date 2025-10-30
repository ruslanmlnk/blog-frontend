// app/components/article/blocks/ArticleList.tsx
type LexicalListNode = {
  type: 'list'
  tag?: 'ul' | 'ol'
  listType?: 'bullet' | 'number'
  children?: any[]
}

type Props = {
  node: LexicalListNode
  extractText: (n: any) => string
}

export const ArticleList = ({ node, extractText }: Props) => {
  const isOrdered = node.tag === 'ol' || node.listType === 'number'
  const ListTag: any = isOrdered ? 'ol' : 'ul'

  return (
    <ListTag className="list-disc list-inside">
      {(node.children || [])
        .filter((li: any) => li?.type === 'listitem')
        .map((li: any, idx: number) => {
          const blocks = li.children || []

          // текст item'а = інлайновий HTML з НЕ-спискових дітей
          const labelHTML = blocks
            .filter((b: any) => b?.type !== 'list')
            .map((b: any) => extractText(b))
            .join('')

          // вкладені списки (0..N)
          const nestedLists = blocks.filter((b: any) => b?.type === 'list')

          return (
            <li key={idx} className="text-base text-black leading-[165%] tracking-[-0.4px]">
              {labelHTML ? (
                <span dangerouslySetInnerHTML={{ __html: labelHTML }} />
              ) : null}

              {nestedLists.length > 0 && (
                <div className="pl-6">
                  {nestedLists.map((nl: any, nIdx: number) => (
                    <ArticleList key={nIdx} node={nl} extractText={extractText} />
                  ))}
                </div>
              )}
            </li>
          )
        })}
    </ListTag>
  )
}
