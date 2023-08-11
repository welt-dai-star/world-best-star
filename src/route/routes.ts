import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";


const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("../components/WelcomePage.vue"),
  },
  {
    path:"/news",
    component: () => import("../components/UnfinishedPage.vue"),
  },
  {
    path:"/join_us",
    component: () => import("../components/UnfinishedPage.vue"),
  },
  {
    path:"/characters",
    component: () => import("../components/UnfinishedPage.vue"),
  },
  {
    path:"/cards",
    component: () => import("../components/UnfinishedPage.vue"),
  },
  {
    path:"/customs",
    component: () => import("../components/UnfinishedPage.vue"),
  },
  {
    path:"/events",
    component: () => import("../components/UnfinishedPage.vue"),
  },
  {
    path:"/events_data",
    component: () => import("../components/UnfinishedPage.vue"),
  },
  {
    path:"/gacha",
    component: () => import("../components/UnfinishedPage.vue"),
  },
  {
    path:"/music",
    component: () => import("../components/UnfinishedPage.vue"),
  },
  {
    path:"/music_data",
    component: () => import("../components/UnfinishedPage.vue"),
  },
  {
    path:"/comics",
    component: () => import("../components/UnfinishedPage.vue"),
  },
  {
    path:"/missions",
    component: () => import("../components/UnfinishedPage.vue"),
  },
  {
    path: "/story_viewer",
    component: () => import("../components/EpisodePlayer/EpisodePlayerApp.vue"),
  },
  {
    path:"/l2d_viewer",
    component: () => import("../components/UnfinishedPage.vue"),
  },
  {
    path:"/simulation",
    component: () => import("../components/UnfinishedPage.vue"),
  },
  {
    path:"/music_player",
    component: () => import("../components/UnfinishedPage.vue"),
  },
  {
    path:"/team_helper",
    component: () => import("../components/UnfinishedPage.vue"),
  },
  {
    path:"/:pathMatch(.*)*", // 404
    component: () => import("../components/UnfoundPage.vue"),
  },
];

const routerConvert = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export { routerConvert, routes };