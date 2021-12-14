import { FormEvent } from 'react'
const apiUrl = process.env.REACT_APP_API_URL
export const LoginScreens = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const username = (event.currentTarget.elements[0] as HTMLInputElement).value
    const password = (event.currentTarget.elements[1] as HTMLInputElement).value
    login({ username, password })
  }

  const login = (params: { username: string; password: string }) => {
    fetch(`${apiUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(params),
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username"></label>
        <input type="text" id="username" />
      </div>
      <div>
        <label htmlFor="password"></label>
        <input type="password" id="password" />
      </div>
      <button type="submit">登录</button>
    </form>
  )
}
