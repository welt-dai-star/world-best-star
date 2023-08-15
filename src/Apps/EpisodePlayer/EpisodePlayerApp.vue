<template>
    <n-button 
        v-if="configStore.getExampleState" 
        :on-click="loadSpine" 
        :disabled="!resourceStore.allMissionFinished">加载Spine</n-button>
    <div id="spine_layer" style=""></div>
</template>
<script setup lang="ts">
import { NButton } from "naive-ui";
import {loadSpine} from "./layers/spineLoader";
import { useConfigStore } from "../../store/config";
import { useResourceStore } from "../../store/resource";
const configStore = useConfigStore();
const resourceStore = useResourceStore();
configStore.exampleStart = true;
</script>
<style scoped lang="scss">
</style>