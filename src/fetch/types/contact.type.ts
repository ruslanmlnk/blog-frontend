import type { AltMedia } from "./image.type";

export interface Contact {
  id: string;
  title: string;
  description: string;
  sideImage?: AltMedia | null;
}

export interface Contacts {
  Contacts: {
    docs: Contact[];
  };
}
