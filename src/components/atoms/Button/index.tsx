import { BoxProps } from "types/base";
import type { HoverProp, Responsive } from "types/styles";
import { hoverExpansion, toTailWindValue } from "utils/styles";

//box系統、text系統でprops分ける
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  BoxProps & {
    fontSize?: Responsive<string>;
    children?: React.ReactNode;
    fontWeight?: Responsive<string>;
    letterSpacing?: Responsive<string>;
    lineHeight?: Responsive<string>;
    textAlign?: Responsive<string>;
    borderRadius?: Responsive<string>;
    hover?: HoverProp;
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
    color,
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
  className += color ? toTailWindValue(color) : "text-white" + " ";

  className += paddingX ? toTailWindValue(padding) : "";
  className += paddingY ? toTailWindValue(paddingTop) : "";
  className += paddingX ? toTailWindValue(paddingBottom) : "";
  className += paddingY ? toTailWindValue(paddingLeft) : "";
  className += paddingX ? toTailWindValue(paddingRight) : "";
  className += paddingX ? toTailWindValue(paddingX) : "px-4" + " ";
  className += paddingY ? toTailWindValue(paddingY) : "py-2" + " ";
  className += border ? toTailWindValue(border) : "";
  className += hover ? hoverExpansion(hover) : "hover:bg-blue-700" + " ";

  return <button className={className}>{children}</button>;
};

export default Button;
