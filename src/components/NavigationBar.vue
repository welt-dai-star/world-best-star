<template>
    <n-layout-header class="navigation">
        <h1 class="title">World Best Star!</h1>
    </n-layout-header>
</template>
<script setup lang="ts">
import { NLayoutHeader } from "naive-ui";
</script>
<style scoped lang="scss">
.title {
    color: white;
    font-size: 30px;
}
.navigation {
    background-color: #6cf;
    box-shadow: 0 2px 8px #f0f1f2;
    height: 64px;
    line-height: 64px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
    text-align: left;
    padding-left: 1rem;
}
</style>