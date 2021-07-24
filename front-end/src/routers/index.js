import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "@/stores";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      title: "Kiwi Sneakers",
    },
  },
  {
    path: "/auth/sign-in",
    name: "sign-in",
    component: () => import("../views/authentications/Login.vue"),
    meta: {
      title: "Sign In",
      isPublic: true,
      isLogin: true,
    },
  },

  {
    path: "/user/sign-up",
    name: "sign-up",
    component: () => import("../views/authentications/SignUp.vue"),
    meta: {
      title: "Sign Up",
      isPublic: true,
      isLogin: true,
    },
  },
  {
    path: "/search/products",
    name: "products",
    component: () => import("../views/product/ListProduct.vue"),
  },
  {
    path: "/products/detail",
    name: "product-detail",

    component: () => import("../views/product/ProductDetail.vue"),
    
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

function itemTitle(item) {
  return item.title;
}

router.beforeEach(async (to, from, next) => {
  // const requiresAuth = to.matched.some((x) => !x.meta.isPublic);
  const isLogin = to.matched.some((x) => x.meta.isLogin);
  const isAuthenticated =
    store.state.auth.accessToken || !!localStorage.getItem("accessToken"); //add logic to check authen here
  // if (requiresAuth && !isAuthenticated) {
  //   router.push({ name: "sign-in" });
  // }
  if (isLogin && isAuthenticated) {
    next("");
  }
  document.title = itemTitle(to.meta) ? itemTitle(to.meta) : "";
  next();
});

export default router;
