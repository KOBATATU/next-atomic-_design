import { keyType } from "types/styles";

export const widthSize = {
  "w-0px": "w-0",
  "w-20px": "w-5",
  "w-40px": "w-10",
  "w-56px": "w-14",
  "w-80px": "w-20",
  "w-128px": "w-32",
  "w-144px": "w-36",
  "w-208px": "w-52",
  "w-240px": "w-60",
  "w-320px": "w-80",
  "w-384px": "w-96",
  "w-50%": "w-1/2",
  "w-60%": "w-3/5",
  "w-80%": "w-4/5",
  "w-100%": "w-full",
};

//postcssはhttps://zenn.dev/chabatake_i/articles/tailwindcss_introduction にある通り動的なものには反応せず文字列一致したものがクラスとして適用できる
//そのため使わないが、動的に使うものだけはここで記載
const _widthSize: keyType = { ...widthSize };

export const maxWidth = {
  "max-w-320px": "max-w-xs",
  "max-w-384px": "max-w-sm",
  "max-w-448px": "max-w-md",
  "max-w-512px": "max-w-lg",
  "max-w-576px": "max-w-xl",
  "max-w-768px": "max-w-3xl",
  "max-w-100%": "max-w-full",
};

const _maxWidth: keyType = { ...maxWidth };
