<template>
  <button type="button" :class="classes" @click="onClick" v-bind:disabled="isDisabled">{{ label }}</button>
</template>

<script>
export default {
  name: "button",

  props: {
    label: {
      type: String,
      required: true
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
    }
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
