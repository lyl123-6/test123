<template>
  <div class="page">
    <van-nav-bar title="雷电预警" left-arrow @click-left="router.back()" />
    <div class="page-body">
      <van-empty description="建设中：雷电距离 / 强度实时预警列表" />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<style scoped>
.page {
  min-height: 100vh;
  background: #f7f8fa;
}
</style>
