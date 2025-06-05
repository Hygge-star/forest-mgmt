<template>
  <div class="alerts-container">
    <div
      v-for="alert in alerts"
      :key="alert.id"
      class="alert-item"
      :class="`alert-${alert.level}`"
    >
      <span class="alert-icon">{{ getAlertIcon(alert.level) }}</span>
      <span class="alert-message">{{ alert.message }}</span>
    </div>
  </div>
</template>

<script setup>
const alerts = [
  { id: 1, level: "high", message: "东部区域检测到松材线虫风险" },
  { id: 2, level: "medium", message: "北部区域土壤湿度偏低" },
  { id: 3, level: "low", message: "西部区域需要例行检查" },
];

const getAlertIcon = (level) => {
  const icons = {
    high: "⚠️",
    medium: "ℹ️",
    low: "🔍",
  };
  return icons[level] || "📌";
};
</script>

<style scoped>
.alerts-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  max-width: 600px;
  margin: 0 auto;
}

.alert-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 1rem;
  border-radius: 4px;
  font-size: 0.95rem;
}

.alert-icon {
  font-size: 1.2rem;
}

.alert-high {
  background-color: #ffebee;
  border-left: 4px solid #f44336;
  color: #d32f2f;
}

.alert-medium {
  background-color: #fff8e1;
  border-left: 4px solid #ffc107;
  color: #ff8f00;
}

.alert-low {
  background-color: #e8f5e9;
  border-left: 4px solid #4caf50;
  color: #2e7d32;
}
</style>
