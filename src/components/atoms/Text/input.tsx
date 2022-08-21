import React, { HTMLInputTypeAttribute } from "react";
import type {
  colorType,
  fontSizeType,
  HoverProp,
  keyType,
  Responsive,
} from "types/styles";
import { hoverExpansion, toTailWindValue } from "utils/styles";

export const textType = {
  p: "p",
  span: "span",
  code: "code",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
};

export type TextProps = {
  as?: keyof typeof textType;
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

const Text = (props: TextProps) => {
  let className: string = "";
  const {
    as,
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
    marginLeft,
    marginRight,
    marginTop,
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
  className += toTailWindValue(outline);

  if (as === "span") {
    return <span className={className}>{children}</span>;
  } else if (as === "p") {
    return <p className={className}>{children}</p>;
  } else if (as === "code") {
    return <code className={className}>{children}</code>;
  } else if (as === "h1") {
    return <h1 className={className}>{children}</h1>;
  } else if (as === "h2") {
    return <h2 className={className}>{children}</h2>;
  } else if (as === "h3") {
    return <h3 className={className}>{children}</h3>;
  } else if (as === "h4") {
    return <h4 className={className}>{children}</h4>;
  }
  return <span className={className}>{children}</span>;
};

export default Text;
