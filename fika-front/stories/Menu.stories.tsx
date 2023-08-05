import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Menu from "../src/components/common/menu";

export default {
  component: Menu,
  title: "Menu",
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => (
  <div className="p-2">
    <Menu {...args} />
  </div>
);

// export const defaulte = Template.bind({});
// defaulte.args = {
//   title: "title이 들어갑니다.",
//   desc: "subtitle이 들어갑니다.",
//   tabItem: ["탭항목", "으로", "사용할", "값이", "들어갑니다."],
// };

// export const noSubTitle = Template.bind({});
// noSubTitle.args = {
//   title: "title이 들어갑니다.",
//   tabItem: ["탭항목", "으로", "사용할", "값이", "들어갑니다."],
// };
