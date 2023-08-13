<template>
    <n-button v-if="configStore.getExampleState" :on-click="loadSpine">加载Spine</n-button>
    <div id="spine_layer"></div>
</template>
<script setup lang="ts">
import { NButton } from "naive-ui";
import {loadSpine} from "./spineLoader";
import { useConfigStore } from "../../../../store/config";
const configStore = useConfigStore();
configStore.exampleStart = true;
</script>
<style scoped lang="scss"></style>
