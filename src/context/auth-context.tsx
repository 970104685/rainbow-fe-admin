import { createContext, ReactNode, useContext, useState } from 'react'

import { User } from 'screens/project-list/search-panel'
import * as auth from 'auth-provider'

interface AuthForm {
  username: string
  password: string
}

// 创建context
// 首先明确 context的使用方法  context 将主要组件包裹, 通过provider提供全局的状态
//
// 使用泛型 规范 context
const AuthContext = createContext<
  | {
      user: User | null
      login: (form: AuthForm) => Promise<void>
      register: (form: AuthForm) => Promise<void>
      logout: (form: AuthForm) => Promise<void>
    }
  | undefined
>(undefined)

AuthContext.displayName = 'AuthContext'

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)

  const login = (form: AuthForm) => auth.login(form).then(setUser)

  const register = (form: AuthForm) => auth.register(form).then(setUser)

  const logout = () => auth.logout().then(() => setUser(null))

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout }}
      children={children}
    />
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth必须在AuthProvider中使用')
  }

  return context
}
