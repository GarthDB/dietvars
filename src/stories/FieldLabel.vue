<template>
  <label v-bind:for="forId" :class="classes" v-if :style="alignment ? 'width: 72px' : ''">{{ label }}
    <svg v-if="required" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8" class="spectrum-Icon spectrum-UIIcon-Asterisk100 spectrum-FieldLabel-requiredIcon">
      <path d="M6.575 6.555c.055.056.092.13 0 .2l-1.149.741c-.092.056-.129.019-.166-.074L3.834 4.94 1.963 7c-.019.036-.074.073-.129 0l-.889-.927c-.093-.055-.074-.111 0-.166l2.111-1.76L.648 3.24c-.037 0-.092-.074-.056-.167l.63-1.259a.097.097 0 01.167-.036L3.5 3.148l.13-2.7a.1.1 0 01.081-.111.15.15 0 01.03 0l1.537.2c.093 0 .111.037.093.13l-.723 2.647 2.445-.741c.055-.037.111-.037.148.074l.241 1.37c.018.093 0 .13-.074.13l-2.556.2z"/>
    </svg>
  </label>
</template>

<script>
export default {
  name: "FieldLabel",

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
    required: {
      type: Boolean,
      default: false
    },
    alignment: {
      type: [String, Boolean],
      default: false,
      validator: function(value) {
        return ["left", "right", false].indexOf(value) !== -1;
      }
    },
    forId: {
      type: String,
      required: true
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classes() {
      return {
        "spectrum-FieldLabel": true,
        [`spectrum-FieldLabel--size${this.size.toUpperCase()}`]: true,
        [`spectrum-FieldLabel--${this.alignment}`]: this.alignment,
        "is-disabled": this.isDisabled
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
  src="@spectrum-css/dietvars/dist/components/spectrum-fieldlabel.css"
></style>
<style src="@spectrum-css/fieldlabel/dist/index-vars.css"></style>
