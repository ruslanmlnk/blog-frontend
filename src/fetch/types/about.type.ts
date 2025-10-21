import type { AltMedia } from "./image.type";

export interface AboutCard {
  title: string;
  text: string;
}

export interface About {
  id: string;
  title: string;
  meta?: {
    metaTitle?: string | null;
    metaDescription?: string | null;
  };
  lead: string;
  heroImage?: AltMedia | null;
  cards: AboutCard[];
}

export interface Abouts {
  Abouts: {
    docs: About[];
  };
}
