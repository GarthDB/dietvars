import ActionButton from "./ActionButton.vue";
import Icon from "./Icon.vue";

export default {
  title: "Action Button",
  component: ActionButton,
  argTypes: {
    label: { control: { type: "text" } },
    size: { options: ["s", "m", "l", "xl"], control: { type: "select" } },
    icon: { options: Icon.iconNames, control: { type: "select" } }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ActionButton },
  template: `<div>
    <h2>Basic</h2>
    <ActionButton @onClick="onClick" v-bind="$props" />
    <h2>Selected</h2>
    <ActionButton @onClick="onClick" v-bind="$props" v-bind:isSelected="true" />
    <h2>Basic &amp; Disabled</h2>
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
