## 概要

tailwind + next + atomic design

## 実行

```bash
npm install
npm run dev

```

## ページ
nextのデフォルトページをatomicデザイン風に作成


## デザイン
tailwindは可読性が低いので、可読性が高くなるようにpropsでそれぞれでCSS Classを適用できるようにした具体的には以下
```javascript
//propsでcss classを渡す。それぞれのpropsには型宣言がされている(一部やっていないが)
<Flex
  paddingY="py-64px"
  flexDirection="flex-col"
  justifyContent="justify-start"
  alignItems="items-center"
>
<Text as="p" fontSize="text-2xl">
  Next
</Text>
</Flex>
```


```javascript
//レスポンシブ用に {sm:T,md:T,lg:T,xl:T} | T という形で型宣言を行っている。それぞれのpropsには型が宣言されている(一部やっていないが)
fontSize={{ base:"text-base", md: "text-lg" }} or fontSize="text-base"
```
tailwindの仕様上動的なcssを書くことができないので、レスポンシブをする場合は型を宣言している場所で、`md:text-base`を記載しておく必要がある`themes/fontSize.ts`を参照。
