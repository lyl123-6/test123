import request from '@/utils/request'

// 登录（当前为演示用，后端就绪后直接使用即可）
export function login(data) {
  return request.post('/auth/login', data)
}

// ===== 五大系统接口（后端就绪后逐个补充，按模块分文件更清晰）=====
// 智慧气象：export function getWeatherList(params) { return request.get('/weather/list', { params }) }
// 智慧雷电：export function getLightningList(params) { return request.get('/lightning/list', { params }) }
// 智慧监控：export function getVideoList(params) { return request.get('/video/list', { params }) }
// 智慧消防：export function getFireList(params) { return request.get('/fire/list', { params }) }
// 智慧预警：export function getWarningList(params) { return request.get('/warning/list', { params }) }
