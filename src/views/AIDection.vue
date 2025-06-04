<template>
  <div>
    <input type="file" @change="detectDisease" />
    <div v-if="result">
      <h3>检测结果：{{ result.disease }}</h3>
      <p>置信度：{{ (result.confidence * 100).toFixed(2) }}%</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async detectDisease(e) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("image", file);

      const res = await axios.post("/api/ai/detect", formData);
      this.result = res.data;
    },
  },
};
</script>
