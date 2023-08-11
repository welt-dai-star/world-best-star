<template>
  <n-menu :options="menuOptions" class="menu" default-expand-all></n-menu>
</template>
<script setup lang="ts">
import { MenuOption } from 'naive-ui';
import { NMenu } from 'naive-ui';
const menuOptions: MenuOption[] = [
  {
    label: "主页",
    key: "home",
    children: [
      {
        label: "BestStar!",
        key: "best_star"
      },
      {
        label: "资讯",
        key: "news"
      },
      {
        label: "加入我们",
        key: "join_us"
      }
    ]
  },
  {
    label: "信息",
    key: "information",
    children: [
      {
        label: "角色",
        key: "characters"
      }, {
        label: "卡牌",
        key: "cards"
      }, {
        label: "服装",
        key: "customs"
      }, {
        label: "活动",
        key: "events"
      }, {
        label: "活动数据",
        key: "events_data"
      }, {
        label: "招募",
        key: "gacha"
      }, {
        label: "歌曲",
        key: "music"
      }, {
        label: "歌曲Meta",
        key: "music_meta"
      }, {
        label: "漫画",
        key: "comics"
      }, {
        label: "任务",
        key: "missons"
      }
    ]
  },
  {
    label: "工具",
    key: "tools",
    children: [
      {
        label: "故事浏览器",
        key: "story_viewer"
      },
      {
        label: "Live2D浏览器",
        key: "l2d_viewer"
      },
      {
        label: "谱面模拟器",
        key: "game_simulation"
      },
      {
        label: "歌曲播放器",
        key: "music_player"
      },
      {
        label: "组队助手",
        key: "team_helper"
      }
    ]
  }
]
</script>
<style lang="scss" scoped>
.menu {
  user-select: none;
  text-align: left;
}
</style>
