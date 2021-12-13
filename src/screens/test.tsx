import { useState } from 'react'
import { useArray, useMount } from 'utils'

export default function TestCustomHooks() {
  const [person, setPerson] = useState([
    { name: 'y', age: 27 },
    { name: 'y', age: 28 },
  ])
  const { value, add, removeIndex, clear } = useArray(person)

  useMount(() => {
    // console.log(value.aa);
    // add({name: 'q'})
    // removeIndex('str')
  })

  return (
    <div>
      <button
        onClick={() => {
          add({ name: 'yaoyao', age: 22 })
        }}
      >
        add
      </button>
      <button
        onClick={() => {
          removeIndex(0)
        }}
      >
        removeIndex
      </button>
      <button
        onClick={() => {
          clear()
        }}
      >
        clear
      </button>

      <div>
        列表循环
        {value.map((item, index) => (
          <div key={index}>
            <span>index: {index}</span>
            <span>name: {item.name}</span>
            <span>age: {item.age}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
