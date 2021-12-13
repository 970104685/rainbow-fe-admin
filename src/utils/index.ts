import { useState, useEffect } from 'react'
const isFalsy = (value: unknown) => (value === 0 ? false : !value)

export const cleanObject = (params: object) => {
  const obj = { ...params }

  Object.keys(obj).forEach((key) => {
    // @ts-ignore
    if (isFalsy(obj[key])) {
      // @ts-ignore
      delete obj[key]
    }
  })

  return obj
}

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback()
  }, [])
}

export const useDebounce = <V>(value: V, delay?: number) => {
  const [debounceValue, setDebounceValue] = useState(value)

  useEffect(() => {
    // 每次在value变化以后, 设置一个定时器
    const timeout = setTimeout(() => setDebounceValue(value), delay)
    // 每次在上一个useEffect处理完以后再运行
    // 第一次设置的timeout 会被第二次的timeout清理 以此类推~
    return () => clearTimeout(timeout)
  }, [value, delay])

  return debounceValue
}

export const useArray = <T>(initArray: T[]) => {
  const [value, setValue] = useState(initArray)

  return {
    value,
    add(person: T) {
      setValue([...value, person])
    },
    clear() {
      setValue([])
    },
    removeIndex(index: number) {
      const copy = [...value]
      copy.splice(index, 1)
      setValue(copy)
    },
  }
}
