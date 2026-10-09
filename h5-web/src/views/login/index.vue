<template>
  <div class="login-page">
    <div class="login-hero">
      <div class="login-title">智慧景区数智一体化平台</div>
      <div class="login-sub">游客端 · 气象 / 雷电 / 监控 / 消防 / 预警</div>
    </div>

    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="username"
          label="账号"
          placeholder="请输入账号"
          :rules="[{ required: true, message: '请输入账号' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请输入密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px 16px 0">
        <van-button round block type="primary" native-type="submit">登 录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { showToast } from 'vant'
import { useUserStore } from '@/store/user'

const username = ref('')
const password = ref('')
const router = useRouter()
const route = useRoute()
const userStore = useUserStore()

// 当前是模拟登录；后端就绪后改成调真实接口（store 里已留好位置）
async function onSubmit() {
  await userStore.login(username.value, password.value)
  showToast('登录成功')
  router.replace(route.query.redirect || '/')
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #94d8c3 0%, #f7f8fa 45%);
  box-sizing: border-box;
}
.login-hero {
  padding: 80px 24px 48px;
  text-align: center;
}
.login-title {
  font-size: 22px;
  font-weight: 600;
  color: #fff;
}
.login-sub {
  margin-top: 8px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.9);
}
</style>
