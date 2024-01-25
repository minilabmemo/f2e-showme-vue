import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import HelloView from "../views/HelloView.vue";
import { useFavicon } from "@vueuse/core";
const icon = useFavicon();
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/hello",
    name: "hello",
    component: HelloView,
  },
  {
    path: "/meowsakka",
    name: "meowsakka",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "meowsakka" */ "../views/MeowView.vue"),
    meta: {
      hideNav: true,
      title: "meowsakka 官方網站",
      icon: "meowLogo.ico",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title as string;
  }
  if (to.meta.icon) {
    icon.value = to.meta.icon as string;
  } else {
    icon.value = "favicon.ico";
  }
});

export default router;
