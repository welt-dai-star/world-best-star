<template>
  <n-layout class="full-screen">
    <navi-bar></navi-bar>
    <n-layout position="absolute" style="top: 64px;" has-sider>
      <menu-item></menu-item>
      <n-layout content-style="padding: 24px;" :native-scrollbar="false">
        <n-layout id="main_viewer">
          <router-view></router-view>
        </n-layout>
        <footer-info></footer-info>
      </n-layout>
    </n-layout>
  </n-layout>
</template>
<script setup lang="ts">
import NaviBar from "./components/NavigationBar.vue";
import MenuItem from "./components/MenuItem.vue";
import FooterInfo from "./components/FooterInfo.vue";
import {NLayout} from "naive-ui";
import {RouterView} from "vue-router";
</script>
<style scoped lang="scss">
.full-screen {
  height: 100vh;
  width: 100%;
}

#main_viewer {
  height: 100%;
  width: 100%;
  display: block;
}

#menu {
  display: block;
}
@media screen and (max-width: 768px) {
  #menu {
    display: none;
  }
}
</style>
