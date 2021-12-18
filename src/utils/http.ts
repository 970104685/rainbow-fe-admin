/**
 * 思路
 * 1. 对于参数配置
 * 2. 对于类型的注意
 * 3. 将fetch封装成 自定义的hooks
 */

import qs from 'qs'

import { logout } from 'auth-provider'
import { useAuth } from 'context/auth-context'

const apiUrl = process.env.REACT_APP_API_URL

interface Config extends RequestInit {
  data?: object
  token?: string
}

export const http = async (endpoint: string, { data, token, ...customConfig }: Config = {}) => {
  const config = {
    method: 'GET',
    headers: {
      'Content-Type': data ? 'application/json' : '',
      Authorization: token ? `Bearer ${token}` : '',
    },
    ...customConfig,
  }

  if (config.method.toUpperCase() === 'GET') {
    endpoint += `?${qs.stringify(data)}`
  } else {
    config.body = JSON.stringify(data || {})
  }
  return window.fetch(`${apiUrl}/${endpoint}`, config).then(async (response) => {
    // token过期或者无效
    if (response.status === 401) {
      await logout()
      window.location.reload()
      return Promise.reject({
        message: '请重新登录',
      })
    }

    const data = await response.json()
    if (response.ok) {
      return data
    } else {
      // axios 与 fetch 表现不同, 可以 抛出 返回状态 不为2xx时的 异常
      // fetch 只在断网等极端情况下, 会在catch中抛出异常
      // fetch 捕获服务端的异常, 需要手动抛出
      return Promise.reject(data)
    }
  })
}

// 函数里要使用其他的hook 那么当前函数就必须也是hook
export const useHttp = () => {
  const { user } = useAuth()
  // Parameters TS Utility Types
  return (...[endpoint, config]: Parameters<typeof http>) => http(endpoint, { ...config, token: user?.token })
}
