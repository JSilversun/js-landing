import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueTypedJs from "vue-typed-js";
import VueScrollActive from "vue-scrollactive";
import VueAnimXYZ from "@animxyz/vue";
import "@animxyz/core";

Vue.use(VueScrollActive);
Vue.use(VueAnimXYZ);
Vue.use(VueTypedJs);
Vue.use(VueCompositionAPI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
