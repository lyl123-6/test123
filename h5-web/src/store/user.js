import { defineStore } from 'pinia'
import { login as loginApi } from '@/api'

// 用户状态：token + 用户信息，存一份在 localStorage 防止刷新丢失
export const useUserStore = defineStore('user', {
  state: () => ({
    token: localStorage.getItem('token') || '',
    userInfo: JSON.parse(localStorage.getItem('userInfo') || 'null')
  }),
  actions: {
    // 登录。当前后端还没就绪，先用假数据模拟；
    // 后端好了以后把注释打开，改成调真实接口即可。
    async login(username, password) {
      // const data = await loginApi({ username, password })
      const data = {
        token: 'mock-token-' + Date.now(),
        userInfo: { username, nickname: username }
      }
      this.token = data.token
      this.userInfo = data.userInfo
      localStorage.setItem('token', data.token)
      localStorage.setItem('userInfo', JSON.stringify(data.userInfo))
    },
    logout() {
      this.token = ''
      this.userInfo = null
      localStorage.removeItem('token')
      localStorage.removeItem('userInfo')
    }
  }
})
