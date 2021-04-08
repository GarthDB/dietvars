<template>
  <button
    type="button"
    :class="classes"
    @click="onClick"
    v-bind:disabled="isDisabled"
  >
    <Icon :icon="icon" v-if="icon" />
    <span class="spectrum-Button-label" v-if="label">{{ label }}</span>
  </button>
</template>

<script>
import Icon from "./Icon.vue";

export default {
  name: "Button",

  props: {
    label: {
      type: [String, Boolean]
    },
    size: {
      type: String,
      default: "m",
      validator: function(value) {
        return ["s", "m", "l", "xl"].indexOf(value) !== -1;
      }
    },
    quiet: {
      type: Boolean,
      default: false
    },
    variant: {
      type: String,
      default: "primary",
      validator: function(value) {
        return ["cta", "primary", "secondary", "warning"].indexOf(value) !== -1;
      }
    },
    overbackground: {
      type: Boolean,
      default: false
    },
    focusRing: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: [String, Boolean],
      default: false,
      validator: function(value) {
        return Icon.iconNames.indexOf(value) !== -1;
      }
    }
  },

  components: {
    Icon
  },

  computed: {
    classes() {
      return {
        "spectrum-Button": true,
        [`spectrum-Button--${this.variant}`]: true,
        [`spectrum-Button--size${this.size.toUpperCase()}`]: true,
        "spectrum-Button--quiet": this.quiet,
        "spectrum-Button--overBackground": this.overbackground,
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

<style src="@spectrum-css/dietvars/dist/components/spectrum-button.css"></style>
<style src="@spectrum-css/button/dist/index-vars.css"></style>
