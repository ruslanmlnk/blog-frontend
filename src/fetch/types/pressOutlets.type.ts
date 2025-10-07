import type { AltMedia } from "./image.type";

export interface PressOutlet {
  id: number | string;
  name: string;
  avatar?: AltMedia | null;
}

export interface PressOutletsQueryResponse {
  Press_outlets: {
    docs: PressOutlet[];
  };
}

