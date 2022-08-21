import React from "react";
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

export type BoxProps = {
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
  overflow?: Responsive<string>;
};

const Box = (props: BoxProps) => {
  let className: string = "";
  const {
    children,
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
    ...rest
  } = props;

  className += toTailWindValue(textColor);
  className += toTailWindValue(backgroundColor);
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

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
};

export default Box;
