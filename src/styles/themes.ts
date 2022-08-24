import { darkBg, darkMain, lightBg, lightMain } from "./colors";

export interface Theme {
  color: string;
  bgColor: string;
}

export const dark = {
  color: darkMain,
  bgColor: darkBg,
};

export const light = {
  color: lightMain,
  bgColor: lightBg,
};
