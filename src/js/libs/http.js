// 封装axios请求

import axios from 'axios';
import _glTools from '@/js/core/utils/';
import { Notification, Message } from 'element-ui';
import router from '../../router';

const baseUrl = 'http://182.61.48.201:8080';
const http = axios.create({
  baseURL: baseUrl
});

// 添加请求拦截器
http.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么(判断是否存在token，如果存在，在请求的header上加token)
  const token = _glTools.getStore('token', true);
  if (token) {
    config.headers['X-Auth-Token'] = token;
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  Message.error({
    message: '请求超时'
  });
  return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  const token = response.headers['x-auth-token'];
  if (token) { // 登录后存放token
    _glTools.setStore('token', token, true);
  }
  if (response.status === 200 && response.data.result) {
    return Promise.resolve(response.data);
  } else {
    Notification.error({
      title: '提示',
      message: response.data.message
    });
    return Promise.reject(response.data.message);
  }
}, function (error) {
  // 对响应错误做点什么
  if (error.response) {
    switch (error.status) {
      case 401:
      Message.error({
        message: error.data.message
      });
      break;
      case 403:
      // 登陆信息失效，清除登陆信息并跳转到login页面
      Message.error({
        message: '登陆超时，请重新登陆！'
      });
      _glTools.removeStore('token', true);
      router.push('/login');
      break;
      case 404:
      Message.error({
        message: error.data.message
      });
      return Promise.reject(error.response.data.message);
      case 500:
      Message.error({
        message: error.data.message
      });
      return Promise.reject(error.response.data.message);
      case 504:
      Message.error({
        message: error.data.message
      });
      return Promise.reject(error.response.data.message);
    }
  }
  return Promise.reject(error);
});

export default http;
