import http from '../index';

const loginApi = '/api/pub/tms/login'; // 登录接口
const loginOutApi = '/api/pub/logout'; // 退出登录

// 登录
export const login = (opt) => http.post(loginApi, opt);

// 退出登录
export const loginOut = (opt) => http.post(loginOutApi, opt);