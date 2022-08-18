import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./index";

export default {
  title: "Atoms/Button",
  argTypes: {
    children: {
      control: { type: "text" },
      defaultValue: "Button",
      description: "ボタンテキスト",
      table: {
        type: { summary: "string" },
      },
    },
    disabled: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "Disabledのフラグ",
      table: {
        type: { summary: "boolean" },
      },
    },
    fontSize: {
      control: { type: "text" },
      defaultValue: "text-base",
      description: "フォントサイズ",
      table: {
        type: { summary: "string" },
      },
    },
    color: {
      control: { type: "text" },
      description: "テキストの色",
      table: {
        type: { summary: "string" },
      },
    },
    backgroundColor: {
      control: { type: "text" },
      description: "背景色",
      table: {
        type: { summary: "string" },
      },
    },
    onClick: {
      description: "イベントハンドラ",
      table: {
        type: { summary: "function" },
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
