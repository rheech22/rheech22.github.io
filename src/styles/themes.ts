import { darkBg, darkMain } from "./colors";

export interface Theme {
  color: string;
  bgColor: string;
}

export const dark = {
  color: darkMain,
  bgColor: darkBg,
};

export const light = {
  color: 'black',
  bgColor: 'white',
};
