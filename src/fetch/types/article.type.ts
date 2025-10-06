import { AltMedia } from "./image.type";


export interface BlockHeading {
  __typename: 'Heading1' | 'Heading2' | 'Heading3' | 'Heading4'
  text: string;
}

export interface BlockList {
  __typename: "List";
  title?: string;
  list_items: {
    item_title: string
  }[]
}

export interface BlockParagraph {
  __typename: "Paragraph";
  text: string;
}


export interface Article {
  title: string;
  description: string;
  slug: string;
  createdAt: string;
  bg: AltMedia;
  category: {
    title: string;
    id: string;
  }
  content: Array<BlockList | BlockParagraph | BlockHeading>
}

export interface ArticleQueryResponse {
  Articles: {
    docs: Article[];
    hasNextPage: boolean;
    totalPages: number;
    page: number;
    totalDocs: number;
  }
}

export interface FetchArticleQueryResponse {
    docs: Article[];
    hasNextPage?: boolean;
    totalPages?: number;
    page?: number;
    totalDocs?: number;
}
