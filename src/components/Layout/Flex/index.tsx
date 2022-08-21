import React from "react";
import type {
  colorType,
  fontSizeType,
  HoverProp,
  Responsive,
} from "types/styles";
import { hoverExpansion, toTailWindValue } from "utils/styles";

export type FlexProps = {
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

  //width height
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
  border?: Responsive<string>;
  overflow?: Responsive<string>;

  //align
  alignItems?: Responsive<string>;
  alignContent?: Responsive<string>;
  //justify
  justifyContent?: Responsive<string>;
  justifyItems?: Responsive<string>;
  //flex
  flexWrap?: Responsive<string>;
  flexBasis?: Responsive<string>;
  flexDirection?: Responsive<string>;
  flexGrow?: Responsive<string>;
  flexShrink?: Responsive<string>;
  justifySelf?: Responsive<string>;
  alignSelf?: Responsive<string>;
  order?: Responsive<string>;
};

const Flex = (props: FlexProps) => {
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
    maxWidth,
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
    alignItems,
    alignContent,
    justifyContent,
    justifyItems,
    flexWrap,
    flexBasis,
    flexDirection,
    flexGrow,
    flexShrink,
    justifySelf,
    alignSelf,
    order,

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
  className += toTailWindValue(maxWidth);
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
  className += toTailWindValue(alignItems);
  className += toTailWindValue(alignContent);
  className += toTailWindValue(justifyContent);
  className += toTailWindValue(justifyItems);
  className += toTailWindValue(flexWrap);
  className += toTailWindValue(flexBasis);
  className += toTailWindValue(flexDirection);
  className += toTailWindValue(flexGrow);
  className += toTailWindValue(flexShrink);
  className += toTailWindValue(justifySelf);
  className += toTailWindValue(alignSelf);

  //default flex
  className += toTailWindValue("flex");

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
};

export default Flex;
