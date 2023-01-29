import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "src/ui/Button";

export default {
  component: Button,
  title: "Button",
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <div className="p-2">
    <Button {...args}>test</Button>
  </div>
);

export const Contained = Template.bind({});
Contained.args = {
  variant: "contained",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
