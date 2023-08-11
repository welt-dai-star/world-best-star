<template>
    <n-result status="404" title="404 资源不存在" description="生活总归带点荒谬">
      <template #footer>
        <n-button><a href="/">返回主页</a></n-button>
      </template>
    </n-result>
  </template>
<script setup lang="ts">
import { NButton, NResult } from "naive-ui";
</script>