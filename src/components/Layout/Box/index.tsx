import React from "react";
import type {
  colorType,
  fontSizeType,
  HoverProp,
  Responsive,
} from "types/styles";
import { hoverExpansion, toTailWindValue } from "utils/styles";

export type BoxProps = {
  children?: React.ReactNode;
  outline?: Responsive<string>;
  boxSizing?: Responsive<string>;

  textColor?: Responsive<colorType>;
  backgroundColor?: Responsive<string>;

  fontSize?: Responsive<fontSizeType>;
  fontWeight?: Responsive<string>;
  letterSpacing?: Responsive<string>;
  lineHeight?: Responsive<string>;
  textAlign?: Responsive<string>;
  borderRadius?: Responsive<string>;

  //width/height
  width?: Responsive<string>;
  maxWidth?: Responsive<string>;

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

const Box = (props: BoxProps) => {
  let className: string = "";
  const {
    children,
    boxSizing,
    fontSize,
    textColor,
    backgroundColor,
    fontWeight,
    letterSpacing,
    lineHeight,
    textAlign,
    borderRadius,
    width,
    height,
    paddingBottom,
    paddingTop,
    paddingLeft,
    paddingRight,
    paddingX,
    paddingY,
    margin,
    marginBottom,
    marginTop,
    marginLeft,
    marginRight,
    marginX,
    marginY,
    border,
    outline,
    ...rest
  } = props;

  className += toTailWindValue(textColor);
  className += toTailWindValue(backgroundColor);
  className += toTailWindValue(boxSizing);
  className += toTailWindValue(fontSize);
  className += toTailWindValue(fontWeight);
  className += toTailWindValue(letterSpacing);
  className += toTailWindValue(lineHeight);
  className += toTailWindValue(textAlign);
  className += toTailWindValue(borderRadius);
  className += toTailWindValue(width);
  className += toTailWindValue(height);
  className += toTailWindValue(paddingTop);
  className += toTailWindValue(paddingBottom);
  className += toTailWindValue(paddingLeft);
  className += toTailWindValue(paddingRight);
  className += toTailWindValue(paddingX);
  className += toTailWindValue(paddingY);
  className += toTailWindValue(margin);
  className += toTailWindValue(marginTop);
  className += toTailWindValue(marginBottom);
  className += toTailWindValue(marginLeft);
  className += toTailWindValue(marginRight);
  className += toTailWindValue(marginX);
  className += toTailWindValue(marginY);
  className += toTailWindValue(outline);

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
};

export default Box;
