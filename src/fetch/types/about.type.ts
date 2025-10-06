import type { AltMedia } from "./image.type";

export interface AboutCard {
  title: string;
  text: string;
}

export interface About {
  id: string;
  title: string;
  lead: string;
  heroImage?: AltMedia | null;
  cards: AboutCard[];
}

export interface Abouts {
  Abouts: {
    docs: About[];
  };
}
