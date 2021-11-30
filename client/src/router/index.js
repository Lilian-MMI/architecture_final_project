import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "/quizzs",
    children: [
      {
        path: "/quizzs",
        name: "Quizzs",
        component: () => import("../views/Quizzs.vue"),
      },
      {
        path: "/quizzs/:id",
        params: { id: "id" },
        name: "Quizz",
        component: () => import("../views/Quizz.vue"),
      },
      {
        path: "/scores",
        name: "Scores",
        component: () => import("../views/Scores.vue"),
      },
      {
        path: "/scores/:id",
        params: { id: "id" },
        name: "Score",
        component: () => import("../views/Score.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
