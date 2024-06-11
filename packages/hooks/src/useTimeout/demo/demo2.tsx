/**
 * title: 基础用法
 * desc: useTimeout 动态修改delay执行
 */

import React, { useState } from 'react';
import { useTimeout } from 'encodeHooks';

export default () => {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(1000);

  const clear = useTimeout(() => {
    setCount(count + 1);
  }, delay);

  return (
    <div>
      <p>count : {count}</p>
      <p>delay : {delay}</p>
      <button onClick={() => setDelay((t) => (!!t ? t + 1000 : 1000))}>延迟时间 +1s</button>
      <button onClick={() => setDelay(1000)}>重置为 +1s</button>
      <button onClick={clear}>重置</button>
    </div>
  );
};
