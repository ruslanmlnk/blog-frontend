import ArticleHeading from '@/app/components/article/blocks/ArticleHeading'
// import ArticleParagraph from '@/app/components/article/blocks/ArticleParagraph'
import ArticleImage from '@/app/components/article/blocks/ArticleImage'
import ArticleQuote from '@/app/components/article/blocks/ArticleQuote'
import { ArticleList } from '@/app/components/article/blocks/ArticleList'

interface RichContentProps {
  content: any;
}

function extractText(node: any): string {
  if (!node) return ''

  if (node.type === 'text') {
    let text = node.text || ''
    if (node.format & 1) text = `<strong>${text}</strong>`
    if (node.format & 2) text = `<em>${text}</em>`
    if (node.format & 8) text = `<u>${text}</u>`
    const style: string | undefined = node.style
    if (style) {
      const match = /font-size\s*:\s*([^;]+)\s*;?/i.exec(style)
      if (match?.[1]) {
        const fontSize = match[1].trim()
        return `<span style="font-size: ${fontSize};">${text}</span>`
      }
    }
    return text
  }

  if (node.type === 'link') {
    // ✅ url тепер у fields.url
    const href: string = node.fields?.url || ''
    const content = node.children?.map(extractText).join('') || ''
    return href
      ? `<a href="${href}" class="text-blue-600 hover:underline">${content || href}</a>`
      : content
  }

  if (node.children) return node.children.map(extractText).join('')
  return ''
}

export default function RichContent({ content }: RichContentProps) {
  if (!content?.root?.children) return null

  return (
    <div className="flex flex-col gap-[35px]">
      {content.root.children.map((child: any, index: number) => {
        const text = extractText(child)

        switch (child.type) {
          case 'paragraph':
            return text.trim() ? (
              <div
                key={index}
                dangerouslySetInnerHTML={{ __html: text }}
                className="text-black text-base leading-[165%] tracking-[-0.4px]"
              />
            ) : null

          case 'heading': {
            const typename =
              child.tag === 'h1' ? 'Heading1' :
              child.tag === 'h2' ? 'Heading2' :
              child.tag === 'h3' ? 'Heading3' : 'Heading4'
            return <ArticleHeading key={index} __typename={typename as any} text={text} />
          }

          case 'list':
            // ✅ передаємо ВЕСЬ lexical list-ноду — ArticleList сам розбереться (вкладені/звичайні)
            return <ArticleList key={index} node={child} extractText={extractText} />

          case 'quote':
            return <ArticleQuote key={index} __typename="Quote" text={text} />

          case 'upload':
            return child.value?.url ? (
              <ArticleImage
                key={index}
                __typename="Image"
                image={{ url: child.value.url, alt: child.value.alt || '' }}
                caption={child.value.alt || undefined}
              />
            ) : null

          case 'table': {
            const rows = child.children?.filter((n: any) => n.type === 'tablerow') || []
            return (
              <div key={index} className="overflow-x-auto">
                <table className="min-w-full table-auto text-[14px] md:text-[15px] text-[#151515]">
                  <tbody className="divide-y divide-[#E5E7EB]">
                    {rows.map((row: any, rIdx: number) => (
                      <tr key={rIdx} className="hover:bg-[#FAFAFA] transition-colors">
                        {(row.children || [])
                          .filter((cell: any) => cell.type === 'tablecell')
                          .map((cell: any, cIdx: number) => {
                            const Tag: any = cell.headerState && cell.headerState > 0 ? 'th' : 'td'
                            const html = extractText(cell)
                            const style: Record<string, string> = {}
                            if (cell.backgroundColor) style.backgroundColor = cell.backgroundColor
                            const baseCellClasses = 'px-4 py-3 align-top text-left'
                            const headerClasses = 'font-semibold'
                            return (
                              <Tag
                                key={cIdx}
                                colSpan={cell.colSpan && cell.colSpan > 1 ? cell.colSpan : undefined}
                                rowSpan={cell.rowSpan && cell.rowSpan > 1 ? cell.rowSpan : undefined}
                                className={Tag === 'th' ? `${baseCellClasses} ${headerClasses}` : baseCellClasses}
                                style={style}
                                dangerouslySetInnerHTML={{ __html: html }}
                              />
                            )
                          })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          }

          default:
            return null
        }
      })}
    </div>
  )
}
