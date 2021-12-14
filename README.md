# RAINBOW-FE-ADMIN 彩虹管理台

### 提交格式

- feat: 新特性
- fix: 修复问题
- refactor: 代码重构
- docs: 文档修改
- style: 代码格式修改,不是 css 修改
- test: 测试用例修改
- chore: 其他修改, 比如构建流程,依赖管理
- ci: 持续集成相关
- anno: 代码注释相关
- perf: 性能优化
- revert: 撤销上一次提交

### 灵魂拷问

- 你要做什么?
  > A: 我想做一个 react + typescript 的项目
- 做这个项目你要达成什么目标?
  > A: 我想通过这个项目, 把 react 已经 hooks 还有 typescript 全部都学会
- 你打算怎么维护这个项目?
  > 我想先找到一个最佳实践的方法,然后将这个项目按照心中最佳实践的方案完成
- 最佳实践是什么?
  > 我不知道, 我也在寻找...

### FEATURE 管理台项目

- 登录注册
- Layout
- router
- redux

### 库的使用

- 日期格式化: dayjs
- 工具: lodash

### 数据 Mock 使用 json-server

> 请在本地创建相关 json 文件进行 mock

```
  运行mock数据命令:
  yarn mock
```

### TS

#### 强类型

1. number 类型
2. string
3. array
4. boolean
5. 函数
6. any 任何值 any 是有害的
7. void 表示函数不返回任何值
8. object
9. tuple useState 返回值就是 tuple 是 数量固定, 类型可以各异 版的数组
10. enum 枚举
11. null undefined
12. unknown 使用 any 的时候,可以使用 unknown 是严格版的 any
13. never
14. interface

什么时候时候需要声明类型~

#### 泛型

> typeof toString 检测都是动态 runtime 的时候
> useState 中可以使用泛型定义初始值

#### 鸭子类型 (duck typing) 面向接口编程 而不是 面向对象编程
