import { keyType } from "types/styles";
import colors from "./colors";
import fontSize from "./fontSize";
export const theme = {
  colors,
  fontSize,
} as const;

export const themeKeyValue = {
  ...colors,
  ...fontSize,
};
