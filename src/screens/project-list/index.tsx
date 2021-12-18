import { useState, useEffect } from 'react'
import { SearchPanel } from 'screens/project-list/search-panel'
import { List } from 'screens/project-list/list'
import { cleanObject, useDebounce, useMount } from 'utils'
import { useHttp } from 'utils/http'

export const ProjectListScreen = () => {
  const [users, setUsers] = useState([])
  const [list, setList] = useState([])
  const [param, setParam] = useState({
    name: '',
    personId: '',
  })

  const client = useHttp()

  useMount(() => {
    client('users').then(setUsers)
  })

  const debounceValue = useDebounce(param, 2000)
  useEffect(() => {
    client('projects', {
      data: cleanObject(debounceValue),
    }).then(setList)
  }, [debounceValue])

  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  )
}
