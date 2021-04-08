import TextField from "./TextField.vue";
import FieldLabel from "./FieldLabel.vue";

export default {
  title: "TextField",
  component: TextField,
  argTypes: {
    id: { defaultValue: "inputId", control: { type: "text" } },
    label: { defaultValue: "Name", control: { type: "text" } },
    alignment: { defaultValue: false, options: [false, "left", "right"], control: { type: "select" } }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TextField, FieldLabel },
  template:
    '<div><FieldLabel :label="$props.label" :forId="$props.id" :alignment="$props.alignment"/><TextField v-bind="$props" :id="$props.id" /></div>'
});

export const Default = Template.bind({});
Default.args = {};

export const Quiet = Template.bind({});
Quiet.args = {
  quiet: true
};
