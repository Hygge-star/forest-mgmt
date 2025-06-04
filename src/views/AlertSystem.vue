<template>
  <div class="alerts">
    <div
      v-for="alert in alerts"
      :key="alert.id"
      :class="`alert-${alert.level}`"
    >
      {{ alert.message }}
    </div>
  </div>
</template>

<script setup>
import MapView from "./views/MapView.vue";
import SensorView from "./views/SensorView.vue";
export default {
  components: { MapView, SensorView },
  data() {
    return {
      alerts: [{ id: 1, level: "high", message: "东部区域检测到松材线虫风险" }],
    };
  },
};
</script>
