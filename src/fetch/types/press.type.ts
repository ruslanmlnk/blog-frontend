import type { AltMedia } from "./image.type";
import type { CategoryBlock } from "./articleCategories.type";

export interface PressDoc {
  id: number | string;
  title: string;
  icon?: AltMedia | null;
  content?: CategoryBlock[];
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

