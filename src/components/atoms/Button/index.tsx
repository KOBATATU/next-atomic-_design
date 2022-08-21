import type {
  colorType,
  fontSizeType,
  HoverProp,
  Responsive,
} from "types/styles";
import { hoverExpansion, toTailWindValue } from "utils/styles";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  fontSize?: Responsive<fontSizeType>;
  children?: React.ReactNode;
  fontWeight?: Responsive<string>;
  letterSpacing?: Responsive<string>;
  lineHeight?: Responsive<string>;
  textAlign?: Responsive<string>;
  borderRadius?: Responsive<string>;
  hover?: HoverProp;

  textColor?: Responsive<colorType>;
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
