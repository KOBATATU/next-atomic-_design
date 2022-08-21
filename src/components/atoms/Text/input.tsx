import React, { HTMLInputTypeAttribute } from "react";
import type {
  backgroundColorsType,
  borderColorType,
  borderRadiusType,
  borderType,
  colorType,
  fontSizeType,
  heightType,
  marginBottomType,
  marginLeftType,
  marginRightType,
  marginSizeType,
  marginTopType,
  marginXType,
  marginYType,
  maxHeightType,
  maxWidthType,
  paddingBottomType,
  paddingLeftType,
  paddingRightType,
  paddingSizeType,
  paddingTopType,
  paddingXType,
  paddingYType,
  Responsive,
  textAlign,
  widthType,
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

  //color
  textColor?: Responsive<colorType>;
  backgroundColor?: Responsive<backgroundColorsType>;
  //text
  fontSize?: Responsive<fontSizeType>;
  fontWeight?: Responsive<string>;
  letterSpacing?: Responsive<string>;
  lineHeight?: Responsive<string>;
  textAlign?: Responsive<textAlign>;

  //width height
  width?: Responsive<widthType>;
  maxWidth?: Responsive<maxWidthType>;
  maxHeight?: Responsive<maxHeightType>;
  height?: Responsive<heightType>;
  minWidth?: Responsive<string>;
  minHeight?: Responsive<string>;
  //margin
  margin?: Responsive<marginSizeType>;
  marginTop?: Responsive<marginTopType>;
  marginRight?: Responsive<marginRightType>;
  marginBottom?: Responsive<marginBottomType>;
  marginLeft?: Responsive<marginLeftType>;
  marginY?: Responsive<marginYType>;
  marginX?: Responsive<marginXType>;
  //padding
  padding?: Responsive<paddingSizeType>;
  paddingTop?: Responsive<paddingTopType>;
  paddingRight?: Responsive<paddingRightType>;
  paddingBottom?: Responsive<paddingBottomType>;
  paddingLeft?: Responsive<paddingLeftType>;
  paddingX?: Responsive<paddingXType>;
  paddingY?: Responsive<paddingYType>;

  // そのほか
  border?: Responsive<borderType>;
  borderRadius?: Responsive<borderRadiusType>;
  borderColor?: Responsive<borderColorType>;
  display?: Responsive<string>;
  overflow?: Responsive<string>;
};

const Text = (props: TextProps) => {
  let className: string = "";
  const {
    as,
    children,
    fontSize,
    textColor,
    backgroundColor,
    fontWeight,
    letterSpacing,
    lineHeight,
    textAlign,
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
    borderColor,
    borderRadius,

    ...rest
  } = props;

  className += toTailWindValue(textColor);
  className += toTailWindValue(backgroundColor);
  className += toTailWindValue(fontSize);
  className += toTailWindValue(fontWeight);
  className += toTailWindValue(letterSpacing);
  className += toTailWindValue(lineHeight);
  className += toTailWindValue(textAlign);
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
  className += toTailWindValue(border);
  className += toTailWindValue(borderColor);
  className += toTailWindValue(borderRadius);

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
