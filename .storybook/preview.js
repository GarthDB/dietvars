import '!style-loader!css-loader!@spectrum-css/dietvars/dist/spectrum-global.css';
import '!style-loader!css-loader!@spectrum-css/dietvars/dist/spectrum-medium.css';
import '!style-loader!css-loader!@spectrum-css/dietvars/dist/spectrum-light.css';
import '!style-loader!css-loader!@spectrum-css/typography/dist/index-vars.css';
import '!style-loader!css-loader!@spectrum-css/page/dist/index-vars.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'fullscreen',
  controls: {
    matchers: {
      date: /Date$/,
    },
  },
}

// .storybook/preview.js

export const decorators = [(story) => ({
  components: { story },
  template: '<div id="content" class="spectrum spectrum--medium spectrum--light" dir="ltr"><story /></div>'
})];
