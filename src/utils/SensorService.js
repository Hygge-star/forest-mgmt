// 模拟无人机数据API
export const fetchUAVData = async () => {
  const res = await axios.get("https://api.example.com/uav?type=multispectral");
  return res.data; // 包含RGB和多光谱数据
};

// 地面传感器数据
export const fetchSensorData = () => {
  return {
    temperature: 25.3,
    humidity: 68,
    ph: 6.2,
    timestamp: new Date(),
  };
};
