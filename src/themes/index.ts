import { keyType } from "types/styles";
import colors from "./colors";
import fontSize from "./fontSize";
import { widthSize, maxWidth } from "./width";
import { heightSize, maxHeight } from "./height";
import {
  marginSize,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  marginX,
  marginY,
} from "./margin";

import {
  paddingSize,
  paddingTop,
  paddingBottom,
  paddingRight,
  paddingLeft,
  paddingX,
  paddingY,
} from "./padding";
import backgroundColors from "./backgound";
import { borderColors, borderRadius, borders } from "./border";

export const themeKeyValue = {
  ...colors,
  ...fontSize,
  ...widthSize,
  ...maxWidth,
  ...heightSize,
  ...maxHeight,
  ...marginSize,
  ...marginTop,
  ...marginBottom,
  ...marginLeft,
  ...marginRight,
  ...marginX,
  ...marginY,
  ...paddingSize,
  ...paddingTop,
  ...paddingBottom,
  ...paddingLeft,
  ...paddingRight,
  ...paddingX,
  ...paddingY,
  ...backgroundColors,
  ...borders,
  ...borderColors,
  ...borderRadius,
};
