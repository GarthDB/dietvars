<template>
  <div :class="classes">
    <input
      type="text"
      name="field"
      v-bind:id="id"
      v-bind:disabled="isDisabled"
      class="spectrum-Textfield-input"
    />
  </div>
</template>

<script>
import Icon from "./Icon.vue";
import FieldLabel from "./FieldLabel.vue";

export default {
  name: "TextField",

  props: {
    size: {
      type: String,
      default: "m",
      validator: function(value) {
        return ["s", "m", "l", "xl"].indexOf(value) !== -1;
      }
    },
    id: {
      type: String
    },
    quiet: {
      type: Boolean,
      default: false
    },
    validation: {
      type: String,
      default: "none",
      validator: function(value) {
        return ["none", "invalid", "valid"].indexOf(value) !== -1;
      }
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },

  components: {
    Icon
  },

  computed: {
    classes() {
      return {
        "spectrum-Textfield": true,
        [`spectrum-Textfield--size${this.size.toUpperCase()}`]: true,
        "spectrum-Textfield--quiet": this.quiet,
        "is-disabled": this.isDisabled,
        "focus-ring": this.focusRing
      };
    }
  },

  methods: {
    onClick() {
      this.$emit("onClick");
    }
  }
};
</script>

<style
  src="@spectrum-css/dietvars/dist/components/spectrum-textfield.css"
></style>
<style src="@spectrum-css/textfield/dist/index-vars.css"></style>
