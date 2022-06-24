import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import DashboardLayout from "../layouts/DashboardLayout";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    props: true,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("../views/main/Dashboard.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
