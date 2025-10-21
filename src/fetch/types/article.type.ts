import { AltMedia } from "./image.type";


export interface BlockHeading {
  __typename: 'Heading1' | 'Heading2' | 'Heading3' | 'Heading4'
  text: string;
}

export interface BlockImage {
  __typename: "Image";
  image: {
    url: string;
    alt?: string;
    width?: number;
    height?: number;
  };
  caption?: string;
}

export interface BlockQuote {
  __typename: "Quote";
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
  meta?: {
    metaTitle?: string | null;
    metaDescription?: string | null;
  };
  description: string;
  slug: string;
  createdAt: string;
  bg: AltMedia;
  category: {
    title: string;
    id: string;
  }
  richContent?: any;
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
