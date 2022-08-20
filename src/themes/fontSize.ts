import { keyType } from "types/styles";

const fontSize = {
  "text-xs": "text-xs",
  "text-sm": "text-sm",
  "text-base": "text-base",
  "text-lg": "text-lg",
  "text-xl": "text-xl",
  "text-2xl": "text-2xl",
  "text-3xl": "text-3xl",
  "text-4xl": "text-4xl",
};

const _fontSize: keyType = {};

//postcssが生成されたcssしか読み取らないようにしているため意図的にresponsive用途のcssを生成
for (const responsiveKey of ["sm", "md", "lg", "xl"]) {
  for (const key in fontSize) {
    // @ts-inogre keyTypeで型を指定すると保管が効かなくなるのでエラー無視
    const value = fontSize[key];
    _fontSize[key] = value;
    _fontSize[responsiveKey + ":" + key] = `${responsiveKey}:${value}`;
  }
}

export default fontSize;
