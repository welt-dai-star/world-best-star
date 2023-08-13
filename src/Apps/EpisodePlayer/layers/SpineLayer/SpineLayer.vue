<template>
    <n-button :on-click="loadSpine">加载Spine</n-button>
    <div id="spine_layer">Spine Layer</div>
</template>
<script setup lang="ts">
import { NButton } from "naive-ui";
import {loadSpine} from "./spineLoader";
</script>
<style scoped lang="scss"></style>
