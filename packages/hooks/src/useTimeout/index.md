---
nav:
  path: /hooks
---

# useTimeout

setTimeout hooks 实现

```js
 useTimeout(
  fn:()=>void,
  delay?:number|null
 ): fn:()=>void
```

## 代码演示

### 基础用法

<code src="./demo/demo1.tsx" />

# 高级用法

<code src="./demo/demo2.tsx" />

## API

```typescript
const fn = useMemoizedFn<T>(fn:T):T
```
