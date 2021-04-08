<template>
  <button type="button" :class="classes" @click="onClick" v-bind:disabled="isDisabled">
    <Icon :icon="this.icon" v-if="this.icon"/>
    <span class="spectrum-ActionButton-label" v-if="this.label">{{ label }}</span>
  </button>
</template>

<script>
import Icon from "./Icon.vue";

export default {
  name: "ActionButton",
  props: {
    label: {
      type: String
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
    emphasis: {
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
    isSelected: {
      type: Boolean,
      default: false
    },
    icon : {
      type: [String, Boolean],
      default: "stickers",
      validator: function(value) {
        return Icon.iconNames.indexOf(value) !== -1;
      }
    }
  }, components: { Icon },

  computed: {
    classes() {
      return {
        "spectrum-ActionButton": true,
        [`spectrum-ActionButton--size${this.size.toUpperCase()}`]: true,
        "spectrum-ActionButton--quiet": this.quiet,
        "spectrum-ActionButton--emphasized": this.emphasis,
        "is-selected": this.isSelected,
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

<style src="@spectrum-css/dietvars/dist/components/spectrum-actionbutton.css"></style>
<style src="@spectrum-css/actionbutton/dist/index-vars.css"></style>
