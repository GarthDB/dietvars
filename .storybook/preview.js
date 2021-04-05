import '!style-loader!css-loader!@spectrum-css/dietvars/dist/spectrum-global.css';
import '!style-loader!css-loader!@spectrum-css/dietvars/dist/spectrum-medium.css';
import '!style-loader!css-loader!@spectrum-css/dietvars/dist/spectrum-light.css';
import '!style-loader!css-loader!@spectrum-css/page/dist/index-vars.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// .storybook/preview.js

export const decorators = [(story) => ({
  components: { story },
  template: '<div class="spectrum spectrum--medium spectrum--light"><story /></div>'
})];
