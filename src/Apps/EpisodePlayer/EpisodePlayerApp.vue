<template>
    <div id="phaser_canvas">
    <n-button :on-click="loadSpine">示例用</n-button></div>
</template>
<script setup lang="ts">
import { NButton } from "naive-ui";
import {app} from "./layers/GameManager";
function loadSpine() {
  document.getElementById("phaser_canvas")?.appendChild(app.canvas);
  app.canvas.style.display = "block";
  app.canvas.requestFullscreen();
  
}
</script>
<style scoped lang="scss">
#phaser_canvas {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>