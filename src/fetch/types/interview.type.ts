import type { AltMedia } from "./image.type";

export interface InterviewOverlayHeroBlock {
  __typename: 'InterviewOverlayHero';
  href: string;
  title: string;
  subtitle?: string;
  image: AltMedia;
}

export interface InterviewCardGridBlockItem {
  href: string;
  title: string;
  description?: string;
  image: AltMedia;
}
export interface InterviewCardGridBlock {
  __typename: 'InterviewCardGrid';
  items: InterviewCardGridBlockItem[];
}

export interface InterviewOverlayPairBlockItem {
  href: string;
  title: string;
  image: AltMedia;
}
export interface InterviewOverlayPairBlock {
  __typename: 'InterviewOverlayPair';
  items: InterviewOverlayPairBlockItem[];
}

export type InterviewBlock = InterviewOverlayHeroBlock | InterviewCardGridBlock | InterviewOverlayPairBlock;

export interface InterviewDoc {
  id: number | string;
  title: string;
  content?: InterviewBlock[];
}

export interface InterviewListResponse {
  Interviews: {
    docs: InterviewDoc[];
  };
}

export interface InterviewByIdResponse {
  Interviews: {
    docs: InterviewDoc[];
  };
}
