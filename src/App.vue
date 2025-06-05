<template>
  <div class="app-container">
    <!-- 顶部导航栏 -->
    <header class="app-header">
      <div class="header-content">
        <div class="logo-container">
          <h1>智慧森林管理系统</h1>
        </div>
        <nav class="main-nav">
          <router-link to="/dashboard" class="nav-link">控制台</router-link>
          <router-link to="/map" class="nav-link">森林地图</router-link>
          <router-link to="/alerts" class="nav-link">预警中心</router-link>
          <router-link to="/reports" class="nav-link">分析报告</router-link>
        </nav>
      </div>
    </header>
    <div id="app">
      <div class="container">
        <button @click="currentView = 'map'" class="btn btn-primary">
          地图
        </button>
        <button @click="currentView = 'sensor'" class="btn btn-info">
          传感器
        </button>
        <MapView v-if="currentView === 'map'" />
        <SensorView v-if="currentView === 'sensor'" />
      </div>
    </div>
    <!-- 主内容区 -->
    <main class="app-main">
      <AlertSystem />
      <AIDection />
      <MapView />
    </main>

    <!-- 状态栏 -->
    <footer class="app-footer">
      <div class="system-status">
        <span class="status-item" :class="{ active: systemOnline }">
          <i class="status-icon"></i> 系统状态:
          {{ systemOnline ? "在线" : "离线" }}
        </span>
        <span class="status-item">
          <i class="update-icon"></i> 最后更新: {{ lastUpdate }}
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
import MapView from "./views/MapView.vue";
import AlertSystem from "./views/AlertSystem.vue";
import AIDection from "./views/AIDection.vue";
export default {
  components: { MapView, AlertSystem, AIDection },
  data() {
    return {
      currentView: "map",
      systemOnline: true,
      lastUpdate: new Date().toLocaleString(),
    };
  },
  mounted() {
    // 模拟定期更新
    setInterval(() => {
      this.lastUpdate = new Date().toLocaleString();
    }, 60000);
  },
};
</script>

<style>
@import "bootstrap/dist/css/bootstrap.min.css";
body {
  font-family: Arial, sans-serif;
}
/* 全局颜色变量 */
:root {
  /* 主色调 */
  --primary-green: #2e7d32;
  --primary-green-light: #81c784;
  --primary-green-dark: #1b5e20;

  /* 辅助色 */
  --secondary-blue: #1976d2;
  --secondary-orange: #fb8c00;

  /* 状态色 */
  --status-healthy: #4caf50;
  --status-warning: #ffc107;
  --status-danger: #f44336;
  --status-offline: #9e9e9e;

  /* 中性色 */
  --text-primary: #212121;
  --text-secondary: #757575;
  --divider-color: #bdbdbd;
  --background-light: #f5f5f5;
}

/* 暗色模式适配 */
@media (prefers-color-scheme: dark) {
  :root {
    --primary-green: #388e3c;
    --text-primary: #ffffff;
    --text-secondary: #e0e0e0;
    --background-light: #121212;
  }
}

/* 基础样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", "Microsoft YaHei", sans-serif;
  background-color: var(--background-light);
  color: var(--text-primary);
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* 头部样式 */
.app-header {
  background-color: var(--primary-green);
  color: white;
  padding: 0.8rem 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo {
  height: 40px;
  width: auto;
}

.main-nav {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
}

.nav-link:hover {
  border-bottom-color: white;
}

.nav-link.router-link-exact-active {
  border-bottom-color: white;
  font-weight: 600;
}

/* 主内容区样式 */
.app-main {
  flex: 1;
  padding: 2rem;
  background-color: var(--background-light);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* 页脚样式 */
.app-footer {
  background-color: var(--primary-green-dark);
  color: white;
  padding: 1rem 2rem;
  font-size: 0.9rem;
}

.system-status {
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.status-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.status-item.active {
  color: var(--status-healthy);
}

.status-icon,
.update-icon {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.status-icon {
  background-color: var(--status-healthy);
}

.status-item.active .status-icon {
  animation: pulse 2s infinite;
}

.update-icon {
  background-color: var(--secondary-blue);
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 1rem;
  }

  .main-nav {
    width: 100%;
    justify-content: space-around;
  }

  .app-main {
    height: calc(100vh - 120px);
  }

  .system-status {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
