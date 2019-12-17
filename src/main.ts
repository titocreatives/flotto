import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { NavLinks } from "@/types";
import { routes } from "@/router";

Vue.config.productionTip = false;

const DefaultNavigation: NavLinks = routes.map(({ path, name }) => ({
  to: path,
  title: name
}));

new Vue({
  router,
  render: h =>
    h(App, {
      props: {
        links: DefaultNavigation
      }
    })
}).$mount("#app");
