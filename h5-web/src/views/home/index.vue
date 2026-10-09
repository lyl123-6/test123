<template>
  <div class="home-page">
    <van-nav-bar title="智慧景区" />

    <!-- 概览摘要：数据接入后这里显示实时指标 -->
    <div class="hero-card">
      <div class="hero-title">汾河景区试点段 · 运行概览</div>
      <div class="hero-grid">
        <div class="hero-item">
          <div class="hero-num">0</div>
          <div class="hero-label">在线设备</div>
        </div>
        <div class="hero-item">
          <div class="hero-num">0</div>
          <div class="hero-label">今日预警</div>
        </div>
        <div class="hero-item">
          <div class="hero-num">0</div>
          <div class="hero-label">监控点位</div>
        </div>
      </div>
    </div>

    <!-- 五大系统入口 -->
    <van-grid :column-num="2" :border="false" class="sys-grid">
      <van-grid-item
        v-for="item in systems"
        :key="item.path"
        :icon="item.icon"
        :text="item.name"
        :to="item.path"
      />
    </van-grid>
  </div>
</template>

<script setup>
// 五大系统入口配置：图标用 Vant 内置图标名
const systems = [
  { name: '气象监测', icon: 'chart-trending-o', path: '/weather' },
  { name: '雷电预警', icon: 'flash', path: '/lightning' },
  { name: '视频监控', icon: 'play-circle-o', path: '/video' },
  { name: '消防监控', icon: 'fire-o', path: '/fire' },
  { name: '预警中心', icon: 'bell-o', path: '/warning' }
]
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  background: #f7f8fa;
}
.hero-card {
  margin: 12px 12px 4px;
  padding: 16px;
  border-radius: 12px;
  background: linear-gradient(135deg, #94d8c3, #7ec9b0);
  color: #fff;
}
.hero-title {
  font-size: 15px;
  font-weight: 600;
}
.hero-grid {
  display: flex;
  margin-top: 14px;
}
.hero-item {
  flex: 1;
  text-align: center;
}
.hero-num {
  font-size: 24px;
  font-weight: 600;
}
.hero-label {
  margin-top: 4px;
  font-size: 12px;
  opacity: 0.9;
}
.sys-grid {
  margin-top: 8px;
}
</style>
