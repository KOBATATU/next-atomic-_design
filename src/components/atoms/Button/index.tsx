import type {
  backgroundColorsType,
  borderColorType,
  borderRadiusType,
  borderType,
  colorType,
  fontSizeType,
  heightType,
  HoverProp,
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

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;

  hover?: HoverProp;

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

const Button = (props: ButtonProps) => {
  let className: string = "";
  const {
    fontSize,
    fontWeight,
    letterSpacing,
    lineHeight,
    textAlign,
    children,
    borderRadius,
    backgroundColor,
    textColor,
    padding,
    paddingBottom,
    paddingTop,
    paddingLeft,
    paddingRight,
    paddingX,
    paddingY,
    marginX,
    marginY,
    hover,
    border,
    ...rest
  } = props;
  className += fontSize ? toTailWindValue(fontSize) : "text-base" + " ";
  className += fontWeight ? toTailWindValue(fontWeight) : "";
  className += letterSpacing ? toTailWindValue(letterSpacing) : "";
  className += lineHeight ? toTailWindValue(lineHeight) : "";
  className += textAlign ? toTailWindValue(textAlign) : "center" + " ";
  className += borderRadius ? toTailWindValue(borderRadius) : "rounded" + " ";
  className += backgroundColor
    ? toTailWindValue(backgroundColor)
    : "bg-blue-500" + " ";
  className += textColor ? toTailWindValue(textColor) : "text-white" + " ";
  className += paddingX ? toTailWindValue(padding) : "";
  className += paddingY ? toTailWindValue(paddingTop) : "";
  className += paddingX ? toTailWindValue(paddingBottom) : "";
  className += paddingY ? toTailWindValue(paddingLeft) : "";
  className += paddingX ? toTailWindValue(paddingRight) : "";
  className += paddingX ? toTailWindValue(paddingX) : "px-4" + " ";
  className += paddingY ? toTailWindValue(paddingY) : "py-2" + " ";
  className += border ? toTailWindValue(border) : "";
  className += hover ? hoverExpansion(hover) : "hover:bg-blue-700" + " ";

  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
};

export default Button;
