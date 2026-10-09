<template>
  <div class="page">
    <van-nav-bar title="消防监控" left-arrow @click-left="router.back()" />
    <div class="page-body">
      <van-empty description="建设中：报警点位地图 + 设备状态" />
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
