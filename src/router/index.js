import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/home",
  //   name: "signin",
  //   component: () =>
  //     import( /* webpackChunkName: "SignIn" */ "../views/SignIn.vue"),
  // },
  {
    path: "/signin",
    name: "signin",
    component: () =>
      import(/* webpackChunkName: "SignIn" */ "../views/SignIn.vue"),
  },
  {
    path: "/quiz",
    name: "Quiz",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/QuizPanel.vue"),
    children: [
      {
        path: "/instructions",
        name: "instructions",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "Instructions" */ "../components/Instructions.vue"
          ),
      },
      {
        path: "/questions",
        name: "questions",
        props: true,
        component: () =>
          import(/* webpackChunkName: "Quiz" */ "../components/Quiz.vue"),
      },
    ],
  },
  {
    path: "/response",
    name: "response",
    component: () =>
      import(/* webpackChunkName: "response" */ "../components/Response.vue"),
  },
  {
    path: "/",
    name: "dashboard",
    component: () =>
      import(/* webpackChunkName: "Dashboard" */ "../views/Dashboard.vue"),
    children: [
      {
        path: ":leftpanel",
        name: "leftpanel",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "LeftPanel" */ "../components/LeftPanel.vue"
          ),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
