import axios from "axios";
import { ElMessage } from "element-plus";

let request = axios.create({
  // 基础路径
  baseURL: "/api",
  timeout: 5000,
});
request.interceptors.request.use((config) => {
  config.headers.token = "admin";
  return config;
});
request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    let message = "";
    let status = error.response.status;
    switch (status) {
      case 401:
        message = "Token过期";
        break;
      case 403:
        message = "无权访问";
        break;
      case 404:
        message = "找不到地址";
        break;
      case 500:
        message = "服务器异常";
        break;
      default:
        message = "网络异常";
        break;
    }
    ElMessage({
      type: "error",
      message,
    });
    return Promise.reject(error);
  }
);

export default request;
