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
  "text-7xl": "text-7xl",
};

//postcssはhttps://zenn.dev/chabatake_i/articles/tailwindcss_introduction にある通り動的なものには反応せず文字列一致したものがクラスとして適用できる
//そのため使わないが、動的に使うものだけはここで記載
const _fontSize: keyType = { ...fontSize };
_fontSize["md:text-base"] = "md:text-base";
_fontSize["sm:text-2xl"] = "sm:text-2xl";

export default fontSize;
