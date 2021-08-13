import Vue from "vue";
import App from "./App.vue";
import router from "./router";
//Axios
import VueAxios from "vue-axios";
import axios from "axios";
//Bootstrap + icons
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import VueTailwind from "vue-tailwind";
import Ads from "vue-google-adsense";
import VueGtag from "vue-gtag";

import Donut from "vue-css-donut-chart";
import "vue-css-donut-chart/dist/vcdonut.css";

Vue.use(Donut);

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
// libaraies are embeded like this separatly with use function
Vue.use(VueAxios, axios);

Vue.use(VueGtag, {
  config: { id: "279692243" },
});
Vue.use(require("vue-script2"));
Vue.config.productionTip = false;
Vue.use(Ads.Adsense);
const settings = {
  TInput: {
    classes: "form-input border-2 text-gray-700",
    variants: {
      error: "form-input border-2 border-red-300 bg-red-100",
      // ... Infinite variants
    },
  },
  TButton: {
    classes: "rounded-lg border block inline-flex items-center justify-center",
    variants: {
      secondary:
        "rounded-lg border block inline-flex items-center justify-center bg-purple-500 border-purple-500 hover:bg-purple-600 hover:border-purple-600",
    },
  },
  TAlert: {
    classes: {
      wrapper:
        "rounded bg-blue-100 p-4 flex text-sm border-l-4 border-blue-500",
      body: "flex-grow text-blue-700",
      close: "text-blue-700 hover:text-blue-500 hover:bg-blue-200 ml-4 rounded",
      closeIcon: "h-5 w-5 fill-current",
    },
    variants: {
      danger: {
        wrapper:
          "rounded bg-red-100 p-4 flex text-sm border-l-4 border-red-500",
        body: "flex-grow text-red-700",
        close: "text-red-700 hover:text-red-500 hover:bg-red-200 ml-4 rounded",
      },
      // ... Infinite variants
    },
  },
  // ... The rest of the components
};
Vue.use(VueTailwind, settings);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
