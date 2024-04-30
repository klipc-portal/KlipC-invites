// src/utils/request.js
import axios from 'axios';

const service = axios.create({
  baseURL: process.env.NODE_ENV, // 使用环境变量配置API接口
  timeout: 5000
});

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 可以在这里添加请求头、认证token等
    return config;
  },
  error => {
    // 请求错误处理
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  response => {
    // 对响应数据做处理
    return response.data;
  },
  error => {
    // 响应错误处理
    return Promise.reject(error);
  }
);

export default service;