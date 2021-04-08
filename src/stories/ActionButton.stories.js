import ActionButton from "./ActionButton.vue";
import Icon from "./Icon.vue";

export default {
  title: "Action Button",
  component: ActionButton,
  argTypes: {
    label: { control: { type: "text" } },
    size: { options: ["s", "m", "l", "xl"], control: { type: "select" } },
    icon: { options: Icon.iconNames, control: { type: "select" } },
    overbackground: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ActionButton },
  template: `<div>
    <ActionButton @onClick="onClick" v-bind="$props" />&nbsp;
    <ActionButton @onClick="onClick" v-bind="$props" v-bind:isSelected="true" />&nbsp;
    <ActionButton @onClick="onClick" v-bind="$props" v-bind:isSelected="true" v-bind:isDisabled="true" />
  </div>`
});

export const Default = Template.bind({});
Default.args = {
  label: "Edit"
};

export const Quiet = Template.bind({});
Quiet.args = {
  label: "Edit",
  quiet: true
};

export const Emphasized = Template.bind({});
Emphasized.args = {
  label: "Edit",
  emphasis: true
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  label: false
};
