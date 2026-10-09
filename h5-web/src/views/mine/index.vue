<template>
  <div class="page">
    <van-nav-bar title="我的" />
    <div class="page-body">
      <van-cell-group inset>
        <van-cell title="当前账号" :value="userStore.userInfo?.username || '-'" />
        <van-cell title="登录状态" :value="userStore.token ? '已登录' : '未登录'" />
      </van-cell-group>
      <div style="margin: 24px 16px 0">
        <van-button round block type="danger" plain @click="onLogout">退出登录</van-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { showConfirmDialog } from 'vant'
import { useUserStore } from '@/store/user'

const router = useRouter()
const userStore = useUserStore()

async function onLogout() {
  await showConfirmDialog({ title: '提示', message: '确定退出登录吗？' })
  userStore.logout()
  router.replace('/login')
}
</script>

<style scoped>
.page {
  min-height: 100vh;
  background: #f7f8fa;
}
.page-body {
  padding-top: 16px;
}
</style>
