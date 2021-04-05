import Button from "./Button.vue";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    label: { control: { type: "text" } },
    variant: {
      control: {
        type: "radio",
        options: ["cta", "primary", "secondary", "warning"]
      }
    },
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
  label: "Button"
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  label: "Button"
};

export const CTA = Template.bind({});
CTA.args = {
  variant: "cta",
  label: "Button"
};

export const Warning = Template.bind({});
Warning.args = {
  variant: "warning",
  label: "Button"
};

//
// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
