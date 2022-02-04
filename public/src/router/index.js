import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sign-up",
    name: "Sign-up",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/sign-up.vue"),
  },
  {
    path: "/resister",
    name: "Resister",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/resister.vue"),
  },
  {
    path: "/history",
    name: "History",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/history.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
