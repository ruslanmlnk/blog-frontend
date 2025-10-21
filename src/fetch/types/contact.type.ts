import type { AltMedia } from "./image.type";

export interface Contact {
  id: string;
  title: string;
  description: string;
  sideImage?: AltMedia | null;
  meta?: {
    metaTitle?: string | null;
    metaDescription?: string | null;
  };
}

export interface Contacts {
  Contacts: {
    docs: Contact[];
  };
}
