import type { AltMedia } from "./image.type";

export interface PressOverlayHeroBlock {
  __typename: 'PressOverlayHero';
  date?: string;
  href: string;
  title: string;
  subtitle?: string;
  image: AltMedia;
}

export interface PressCardGridBlockItem {
  date?: string;
  href: string;
  title: string;
  description?: string;
  image: AltMedia;
}
export interface PressCardGridBlock {
  __typename: 'PressCardGrid';
  items: PressCardGridBlockItem[];
}

export interface PressOverlayPairBlockItem {
  date?: string;
  href: string;
  title: string;
  image: AltMedia;
}
export interface PressOverlayPairBlock {
  __typename: 'PressOverlayPair';
  items: PressOverlayPairBlockItem[];
}

export type PressBlock = PressOverlayHeroBlock | PressCardGridBlock | PressOverlayPairBlock;

export interface PressDoc {
  id: number | string;
  title: string;
  icon?: AltMedia | null;
  content?: PressBlock[];
}

export interface PressListResponse {
  Presses: {
    docs: PressDoc[];
  };
}

export interface PressByIdResponse {
  Presses: {
    docs: PressDoc[];
  };
}
