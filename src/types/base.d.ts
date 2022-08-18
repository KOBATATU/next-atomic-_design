import { Color } from "utils/styles";

export type BoxProps = {
  //color
  color?: Responsive<string>;
  backgroundColor?: Responsive<string>;
  //width/height
  width?: Responsive<string>;
  height?: Responsive<string>;
  minWidth?: Responsive<string>;
  minHeight?: Responsive<string>;

  // //margin
  margin?: Responsive<string>;
  marginTop?: Responsive<string>;
  marginRight?: Responsive<string>;
  marginBottom?: Responsive<string>;
  marginLeft?: Responsive<string>;
  marginY?: Responsive<string>;
  marginX?: Responsive<string>;

  // //padding
  padding?: Responsive<string>;
  paddingTop?: Responsive<string>;
  paddingRight?: Responsive<string>;
  paddingBottom?: Responsive<string>;
  paddingLeft?: Responsive<string>;
  paddingX?: Responsive<string>;
  paddingY?: Responsive<string>;

  // //そのほか
  display?: Responsive<string>;
  border?: Responsive<string>;
  overflow?: Responsive<string>;
};
