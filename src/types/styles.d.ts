import backgroundColors from "themes/backgound";
import { borderColors, borderRadius, borders } from "themes/border";
import colors from "themes/colors";
import fontSize from "themes/fontSize";
import { heightSize, maxHeight } from "themes/height";
import {
  marginBottom,
  marginLeft,
  marginRight,
  marginSize,
  marginTop,
  marginX,
  marginY,
} from "themes/margin";
import {
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingSize,
  paddingTop,
  paddingX,
  paddingY,
} from "themes/padding";
import { widthSize, maxWidth } from "themes/width";

/**
 * Responsiveプロパティ
 */
export type ResponsiveProp<T> = {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
};
export type Responsive<T> = T | ResponsiveProp<T>;

export type HoverProp = {
  hover: Array<string>;
};

interface keyType {
  [key: string]: string;
}

/**
 * Flex
 */
type AlignSelf =
  | "self-auto"
  | "self-start"
  | "self-end"
  | "self-center"
  | "self-stretch"
  | "self-baseline";

type JustifyContent =
  | "justify-start"
  | "justify-end"
  | "justify-center"
  | "justify-between"
  | "justify-around"
  | "sm:justify-center"
  | "sm:justify-between";

type JustifyItems =
  | "justify-items-start"
  | "justify-items-end"
  | "justify-items-center"
  | "justify-items-stretch";

type AlignItems =
  | "items-start"
  | "items-end"
  | "items-center"
  | "items-baseline"
  | "items-stretch"
  | "sm:items-center";

type FlexWrap =
  | "flex-wrap"
  | "flex-wrap-reverse"
  | "flex-nowrap"
  | "sm:flex-wrap";

type AlignContent =
  | "content-center"
  | "content-start"
  | "content-end"
  | "content-between"
  | "content-around"
  | "content-evenly";

type FlexDirection =
  | "flex-row"
  | "flex-row-reverse"
  | "flex-col"
  | "flex-col-reverse"
  | "sm:flex-row"
  | "sm:flex-col";

//text
type textAlign =
  | "text-left"
  | "text-center"
  | "text-right"
  | "text-justify"
  | "text-start"
  | "text-end";

export type fontSizeType = keyof typeof fontSize;
export type colorType = keyof typeof colors | (string & {});
export type backgroundColorsType =
  | keyof typeof backgroundColors
  | (string & {});

//width,height
export type widthType = keyof typeof widthSize;
export type heightType = keyof typeof heightSize;
export type maxWidthType = keyof typeof maxWidth;
export type maxHeightType = keyof typeof maxHeight;

//margin
export type marginSizeType = keyof typeof marginSize;
export type marginTopType = keyof typeof marginTop;
export type marginBottomType = keyof typeof marginBottom;
export type marginLeftType = keyof typeof marginLeft;
export type marginRightType = keyof typeof marginRight;
export type marginXType = keyof typeof marginX;
export type marginYType = keyof typeof marginY;

//padding
export type paddingSizeType = keyof typeof paddingSize;
export type paddingTopType = keyof typeof paddingTop;
export type paddingBottomType = keyof typeof paddingBottom;
export type paddingLeftType = keyof typeof paddingLeft;
export type paddingRightType = keyof typeof paddingRight;
export type paddingXType = keyof typeof paddingX;
export type paddingYType = keyof typeof paddingY;

//border
export type borderType = keyof typeof borders;
export type borderColorType = keyof typeof borderColors;
export type borderRadiusType = keyof typeof borderRadius;
