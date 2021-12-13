import { useState, useEffect } from 'react'
import qs from 'qs'
import { SearchPanel } from 'screens/search-panel'
import { List } from 'screens/list'
import { cleanObject, useDebounce } from 'utils'
const apiUrl = process.env.REACT_APP_API_URL
export const Todo = () => {
  const [users, setUsers] = useState([])
  const [list, setList] = useState([])
  const [param, setParam] = useState({
    name: '',
    personId: '',
  })

  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async (res) => {
      if (res.ok) {
        setUsers(await res.json())
      }
    })
  }, [])

  const debounceValue = useDebounce(param, 2000)
  useEffect(() => {
    fetch(
      `${apiUrl}/projects?${qs.stringify(cleanObject(debounceValue))}`
    ).then(async (res) => {
      if (res.ok) {
        setList(await res.json())
      }
    })
  }, [debounceValue])

  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  )
}
