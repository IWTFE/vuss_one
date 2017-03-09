import axios from 'axios'
let base = './api'
let base_ = '../../api'
// su获取验证码
export const requestVerifyCode = params => { return axios.post(`${base}/fundSystemManage-agent/user/verifyCode`,params).then(response => response.data) };
// su请求登录接口
export const requestLogin = params => { return axios.post(`${base}/fundSystemManage-agent/user/login`,params).then(res => res.data) };
// su 投注资金账户 账户信息查询
export const requestViewInfo = params => { return axios.post(`${base}/resources/account/viewInfo`,params).then(res => res.data) };
// su 退出接口
export const requestLoginOut = params => { return axios.post(`${base}/fundSystemManage-agent/user/logout`,params).then(res => res.data)}
// 角色管理
export const requestPowerUserList = params => { return axios.post(`${base_}/fundSystemManage-agent/resources/role/list`,params).then(res => res.data)}
// 创建/添加 角色
export const requestPowerCreateUser = (params,fn) => { return axios.post(`${base}/fundSystemManage-agent/resources/role/create`,params,fn).then(res => res.data)}
// export const requestPowerCreateUser = (params,config) => { return axios.post(`${base}/fundSystemManage-agent/resources/role/create`,params,config).then(res => res.data)}
