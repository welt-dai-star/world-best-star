<template>
  <n-layout class="full-screen">
    <navi-bar></navi-bar>
    <n-layout position="absolute" style="top: 64px;" has-sider>
      <n-layout-sider content-style="padding: 24px;" :native-scrollbar="false" collapse-mode="width" :collapsed-width="0"
        show-trigger="arrow-circle" bordered>
        <menu-item></menu-item>
      </n-layout-sider>
      <n-layout content-style="padding: 24px;" :native-scrollbar="false">
        <n-h2>功能开发中，敬请期待～</n-h2>
        <n-layout-footer position="absolute" style="height: 64px; padding: 24px" bordered>
          Develop by ShinonomeSetsuna & Hanane.
        </n-layout-footer>
      </n-layout>

    </n-layout>

  </n-layout>
</template>
<script setup lang="ts">
import NaviBar from './components/NavigationBar.vue';
import MenuItem from './components/MenuItem.vue'
import { NLayout, NLayoutSider, NLayoutFooter, NH2, } from 'naive-ui';
</script>
<style scoped lang="scss">
.full-screen {
  height: 100vh;
  width: 100%;
}
</style>
