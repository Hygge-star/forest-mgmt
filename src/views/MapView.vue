<template>
  <div class="map-container">
    <div id="map" style="height: 500px"></div>
  </div>
</template>
<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default {
  data() {
    return {
      map: null,
    };
  },
  mounted() {
    this.initMap();
    this.loadGeoData(); // 调用加载地理数据的方法
  },
  methods: {
    initMap() {
      this.map = L.map("map").setView([51.505, -0.09], 13);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
        this.map
      );
    },

    // 这里放置模拟数据方法
    async loadGeoData() {
      const mockGeoJson = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {
              healthIndex: 85,
              treeId: "T001", // 可以添加更多属性
            },
            geometry: {
              type: "Point",
              coordinates: [-0.09, 51.505],
            },
          },
          {
            type: "Feature",
            properties: {
              healthIndex: 55,
              treeId: "T002",
            },
            geometry: {
              type: "Point",
              coordinates: [-0.1, 51.51],
            },
          },
          {
            type: "Feature",
            properties: {
              healthIndex: 25,
              treeId: "T003", // 可以添加更多属性
            },
            geometry: {
              type: "Point",
              coordinates: [-0.11, 51.515],
            },
          },
        ],
      };

      // 添加自定义图标
      const greenIcon = L.icon({
        iconUrl:
          "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
        iconSize: [25, 41],
      });

      const redIcon = L.icon({
        iconUrl:
          "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
        iconSize: [25, 41],
      });

      L.geoJSON(mockGeoJson, {
        pointToLayer: (feature, latlng) => {
          return L.marker(latlng, {
            icon: feature.properties.healthIndex > 60 ? greenIcon : redIcon,
          }).bindPopup(`
            <b>树木ID:</b> ${feature.properties.treeId}<br>
            <b>健康指数:</b> ${feature.properties.healthIndex}
          `);
        },
      }).addTo(this.map);
    },
  },
};
</script>
<style>
.map-container {
  width: 500px;
  height: 500px; /* 或固定高度如 500px */
  min-height: 300px;
}
</style>
