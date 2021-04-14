import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Landing from "@/views/landing/Landing.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "landing",
    component: Landing,
  },
  {
    path: "/",
    name: "footer",
    component: () =>
      import(/* webpackChunkName: "landing" */ "../components/app/Footer.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
