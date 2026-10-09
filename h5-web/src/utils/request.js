import axios from 'axios'
import { showToast } from 'vant'

// 创建 axios 实例：统一 baseURL 和超时时间
const request = axios.create({
  baseURL: '/api',
  timeout: 10000
})

// 请求拦截器：每次请求自动带上登录 token
request.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// 响应拦截器：统一处理接口返回和错误
request.interceptors.response.use(
  (response) => {
    // 约定后端返回 { code, message, data }，code === 0 表示成功
    const res = response.data
    if (res.code === 0) {
      return res.data
    }
    showToast(res.message || '请求失败')
    return Promise.reject(new Error(res.message || '请求失败'))
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // 登录失效：清掉本地信息并跳回登录页
      localStorage.removeItem('token')
      localStorage.removeItem('userInfo')
      window.location.href = '/login'
    } else {
      showToast('网络异常，请稍后重试')
    }
    return Promise.reject(error)
  }
)

export default request
