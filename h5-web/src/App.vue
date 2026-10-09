<template>
  <div class="app-container">
    <router-view />
    <!-- 底部导航：只在首页/气象/监控/预警/我的 这几个主页面显示 -->
    <van-tabbar v-if="showTabbar" route fixed placeholder>
      <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/weather" icon="chart-trending-o">气象</van-tabbar-item>
      <van-tabbar-item replace to="/video" icon="play-circle-o">监控</van-tabbar-item>
      <van-tabbar-item replace to="/warning" icon="bell-o">预警</van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
// 路由 meta.tabbar 为 true 时显示底部导航（登录页不显示）
const showTabbar = computed(() => !!route.meta.tabbar)
</script>

<style>
html,
body,
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  background: #f7f8fa;
}
</style>
