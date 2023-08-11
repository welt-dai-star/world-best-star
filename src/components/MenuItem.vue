<template>
<n-layout-sider 
  id="menu"
  content-style="padding: 24px;" 
  :native-scrollbar="false" 
  collapse-mode="width" 
  :collapsed-width="0"
  show-trigger="arrow-circle" bordered
  >
  <n-config-provider :theme-overrides="themeOverrides">
    <n-menu :options="menuOptions" class="menu" :value="configStore.getPage"
    @update:value="handleMenuUpdate"
    default-expand-all></n-menu>
  </n-config-provider>
</n-layout-sider>
</template>
<script setup lang="ts">
import {h} from "vue";
import { RouterLink } from "vue-router";
import { MenuOption } from "naive-ui";
import { NMenu } from "naive-ui";
import { GlobalThemeOverrides, NConfigProvider,NLayoutSider } from "naive-ui";
import { useConfigStore } from "../store/config";
const menuOptions: MenuOption[] = [
  {
    label: "主页",
    key: "home",
    children: [
      {
        label: ()=> h(RouterLink, {to: "/"}, {default: () => "BestStar!"}),
        key: "",
      },
      {
        label: ()=>h(RouterLink, {to: "/news"}, {default: () => "资讯"}),
        key: "news",
      },
      {
        label: ()=>h(RouterLink, {to: "/join_us"}, {default: () => "加入我们"}),
        key: "join_us",
      },
      {
        label: ()=>h(RouterLink, {to: "/where/no/page"}, {default: () => "404网页（测试使用）"}),
        key: "404NotFound",
      },
    ],
  },
  {
    label: "信息",
    key: "information",
    children: [
      {
        label: ()=>h(RouterLink, {to: "/characters"}, {default: () => "角色"}),
        key: "characters",
      }, {
        label: ()=>h(RouterLink, {to: "/cards"}, {default: () => "卡牌"}),
        key: "cards",
      }, {
        label: ()=>h(RouterLink, {to: "/customs"}, {default: () => "服装"}),
        key: "customs",
      }, {
        label: ()=>h(RouterLink, {to: "/events"}, {default: () => "活动"}),
        key: "events",
      }, {
        label: ()=>h(RouterLink, {to: "/events_data"}, {default: () => "活动数据"}),
        key: "events_data",
      }, {
        label: ()=>h(RouterLink, {to: "/gacha"}, {default: () => "招募"}),
        key: "gacha",
      }, {
        label: ()=>h(RouterLink, {to: "/music"}, {default: () => "歌曲"}),
        key: "music",
      }, {
        label: ()=>h(RouterLink, {to: "/music_meta"}, {default: () => "歌曲Meta"}),
        key: "music_meta",
      }, {
        label: ()=>h(RouterLink, {to: "/comics"}, {default: () => "漫画"}),
        key: "comics",
      }, {
        label: ()=>h(RouterLink, {to: "/missions"}, {default: () => "任务"}),
        key: "missons",
      },
    ],
  },
  {
    label: "工具",
    key: "tools",
    children: [
      {
        label: ()=>h(RouterLink, {to: "/story_viewer"}, {default: () => "剧情浏览器"}),
        key: "story_viewer",
      },
      {
        label: ()=>h(RouterLink, {to: "/l2d_viewer"}, {default: () => "Live2D浏览器"}),
        key: "l2d_viewer",
      },
      {
        label: ()=>h(RouterLink, {to: "/simulation"}, {default: () => "谱面模拟器"}),
        key: "simulation",
      },
      {
        label: ()=>h(RouterLink, {to: "/music_player"}, {default: () => "音乐播放器"}),
        key: "music_player",
      },
      {
        label: ()=>h(RouterLink, {to: "/team_helper"}, {default: () => "组队助手"}),
        key: "team_helper",
      },
    ],
  },
];
const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: "#66ccff",
  },
};
const configStore = useConfigStore();
const handleMenuUpdate = (value: string) => {
  configStore.setPage(value);
};
</script>
<style lang="scss" scoped>
.menu {
  user-select: none;
  text-align: left;
}
</style>
