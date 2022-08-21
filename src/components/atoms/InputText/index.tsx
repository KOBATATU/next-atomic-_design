import { HTMLInputTypeAttribute } from "react";
import type {
  colorType,
  fontSizeType,
  HoverProp,
  Responsive,
} from "types/styles";
import { hoverExpansion, toTailWindValue } from "utils/styles";

export type ButtonProps = React.InputHTMLAttributes<HTMLInputElement> & {
  hasError?: boolean;
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
  className += toTailWindValue("border-2");

  if (hasError) {
    className += toTailWindValue("border-rose-500");
    className += toTailWindValue("rounded-md");
  }

  return <input className={className} {...rest} />;
};

export default InputText;
