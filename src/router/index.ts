import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";
import ResultMaster from "@/views/ResultMaster.vue";

Vue.use(VueRouter);

const RouteHome: RouteConfig = {
  path: "/",
  name: "home",
  component: Home
};

const RouteEuroJackpot: RouteConfig = {
  path: "/results/euro-jackpot",
  name: "eurojackpot",
  component: ResultMaster,
  props: {
    drawLimit: 20,
    drawType: "eurojackpot"
  }
};

export const routes: RouteConfig[] = [RouteHome, RouteEuroJackpot];

const router = new VueRouter({
  routes
});

export default router;
