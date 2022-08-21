import { keyType } from "types/styles";

export const heightSize = {
  "h-0px": "h-0",
  "h-16px": "h-4",
  "h-20px": "h-5",
  "h-40px": "h-10",
  "h-56px": "h-14",
  "h-80px": "h-20",
  "h-128px": "h-32",
  "h-144px": "h-36",
  "h-208px": "h-52",
  "h-240px": "h-60",
  "h-320px": "h-80",
  "h-384px": "h-96",
  "h-50%": "h-1/2",
  "h-60%": "h-3/5",
  "h-80%": "h-4/5",
  "h-100%": "h-full",
};

//postcssはhttps://zenn.dev/chabatake_i/articles/tailwindcss_introduction にある通り動的なものには反応せず文字列一致したものがクラスとして適用できる
//そのため使わないが、動的に使うものだけはここで記載
const _heightSize: keyType = { ...heightSize };

export const maxHeight = {
  "max-h-320px": "max-h-xs",
  "max-h-384px": "max-h-sm",
  "max-h-448px": "max-h-md",
  "max-h-512px": "max-h-lg",
  "max-h-576px": "max-h-xl",
  "max-h-768px": "max-h-3xl",
  "max-h-100%": "max-h-full",
};

const _maxHeight: keyType = { ...maxHeight };
