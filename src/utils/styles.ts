import { themeKeyValue } from "themes";
import type { HoverProp, Responsive, ResponsiveProp } from "types/styles";

export function toTailWindValue<T>(prop?: Responsive<T>) {
  if (prop === undefined) return "";
  if (isResponsivePropType(prop)) {
    let className = [];
    for (const responsiveKey in prop) {
      if (responsiveKey === "base") {
        className.push(prop[responsiveKey]);
      } else if (
        responsiveKey === "sm" ||
        responsiveKey === "md" ||
        responsiveKey === "lg" ||
        responsiveKey === "xl"
      ) {
        className.push(responsiveKey + ":" + toThemeValue(prop[responsiveKey]));
      }
    }
    //最後に空白を入れ結合しないようにする
    return className.join(" ") + " ";
  }
  //responsiveのオブジェクト以外できた時の対応
  return toThemeValue(prop) + " ";
}

function isResponsivePropType<T>(prop: any): prop is ResponsiveProp<T> {
  return (
    prop &&
    (prop.base !== undefined ||
      prop.sm !== undefined ||
      prop.md !== undefined ||
      prop.lg !== undefined ||
      prop.xl !== undefined)
  );
}

function toThemeValue(props: any) {
  if (themeKeyValue[props] !== undefined) {
    return themeKeyValue[props];
  } else {
    return props;
  }
}

//hover用にリスト作成
export function hoverExpansion({ hover }: HoverProp) {
  if (hover === undefined) return "";
  return hover.join(" ") + " ";
}
