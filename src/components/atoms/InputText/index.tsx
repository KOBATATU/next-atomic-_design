import { HTMLInputTypeAttribute } from "react";
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

export type ButtonProps = React.InputHTMLAttributes<HTMLInputElement> & {
  hasError?: boolean;
  outline?: Responsive<string>;
  boxSizing?: Responsive<string>;

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

const InputText = (props: ButtonProps) => {
  let className: string = "";
  const {
    hasError,
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
    marginX,
    marginY,
    border,
    outline,
    ...rest
  } = props;

  className += toTailWindValue(textColor, "text-gray-900");
  className += toTailWindValue(backgroundColor, "bg-gray-50");
  className += toTailWindValue(boxSizing, "box-border");
  className += toTailWindValue(fontSize, "text-base");
  className += toTailWindValue(fontWeight);
  className += toTailWindValue(letterSpacing);
  className += toTailWindValue(lineHeight, "leading-4");
  className += toTailWindValue(textAlign);
  className += toTailWindValue(borderRadius);
  className += toTailWindValue(width, "w-full");
  className += toTailWindValue(height, "y-full");
  className += toTailWindValue(paddingTop);
  className += toTailWindValue(paddingBottom);
  className += toTailWindValue(paddingLeft);
  className += toTailWindValue(paddingRight);
  className += toTailWindValue(paddingX, "px-3");
  className += toTailWindValue(paddingY, "py-2.5");
  className += toTailWindValue(outline, "outline-none");
  className += toTailWindValue(border, "border-2");

  if (hasError) {
    className += toTailWindValue("border-rose-500");
    className += toTailWindValue("rounded-md");
  }

  return <input className={className} {...rest} />;
};

export default InputText;
