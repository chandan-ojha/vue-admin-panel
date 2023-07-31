import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/components/AdminPanel/Dashboard.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Dashboard,
      meta: {
        layout: "content",
      },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/Register.vue"),
    },
    {
      path: "/password",
      name: "password",
      component: () => import("../views/PasswordReset.vue"),
    },
    {
      path: "/employees",
      name: "employees",
      component: () => import("../components/AdminPanel/Employees.vue"),
      meta: {
        layout: "content",
      },
    },
  ],
});

export default router;
