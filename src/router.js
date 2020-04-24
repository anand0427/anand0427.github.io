import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import DashboardLayout from "./layout/DashboardLayout";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "profile",
      components: {
        // header: AppHeader,
        default: Profile,
        footer: AppFooter
      }
    },
    {
      path: "/lanwefefwdineg",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/loaaaaaaaaaaaaaaaaaaaaaaaaaaaagin",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
      }
    },
    {
      path: "/re11111111111111111111111111111gister",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter
      }
    },
    // {
    //   path: "/pr111111111111111111111ofile",
    //   name: "profile",
    //   components: {
    //     header: AppHeader,
    //     default: Profile,
    //     footer: AppFooter
    //   }
    // }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
