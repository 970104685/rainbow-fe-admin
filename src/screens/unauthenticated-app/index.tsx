import { useState } from 'react'
import { LoginScreens } from './login'
import { RegisterScreens } from './register'

export const UnauthenitcatedApp = () => {
  const [isRegister, setIsRegister] = useState(false)

  return (
    <>
      {isRegister ? <RegisterScreens /> : <LoginScreens />}
      <button onClick={() => setIsRegister(!isRegister)}>
        切换到{isRegister ? '登录' : '注册'}
      </button>
    </>
  )
}
