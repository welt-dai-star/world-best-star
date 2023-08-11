import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    title: string;
    icon: string;
    shouldShowInHomepageNav: boolean;
    shouldShowInNavbar: boolean;
    description: string;
    navOrder: number;
  }
}

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    meta: {
      shouldShowInHomepageNav: false,
      shouldShowInNavbar: true,
      title: "Home",
      icon: "/image/home.svg",
      description: "传送回主页",
      navOrder: 0,
    },
    children: [
      {
        path: "episodePlayer",
        name: "EpisodePlayer",
        meta: {
          shouldShowInHomepageNav: false,
          shouldShowInNavbar: false,
          icon: "",
          title: "EpisodePlayer",
          description: "剧情播放器",
          navOrder: 1,
        },
        component: () => import("../tools/EpisodePlayer/EpisodePlayerApp.vue"),
      },
    ],
  },
];

const routerConvert = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export { routerConvert, routes };