import Button from "./Button.vue";
import Icon from "./Icon.vue";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    label: { control: { type: "text" } },
    variant: {
      control: {
        type: "radio",
        options: ["cta", "primary", "secondary", "warning"]
      }
    },
    icon: { options: Icon.iconNames, control: { type: "select" } },
    size: { control: { type: "radio", options: ["s", "m", "l", "xl"] } },
    overbackground: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: '<Button @onClick="onClick" v-bind="$props" />'
});

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  label: "Action"
};

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
  variant: "primary",
  label: "Action",
  icon: "magic wand"
};

// export const IconOnly = Template.bind({});
// IconOnly.args = {
//   variant: "primary",
//   label: false,
//   icon: "magic wand"
// };

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  label: "Action"
};

export const CTA = Template.bind({});
CTA.args = {
  variant: "cta",
  label: "Action"
};

export const Warning = Template.bind({});
Warning.args = {
  variant: "warning",
  label: "Action"
};
