/**
 * title: 基础用法
 * desc: useTimeout 在1s后执行
 */

import React, { useState } from 'react';
import { useTimeout } from 'encodeHooks';

export default () => {
  const [state, setState] = useState(0);
  useTimeout(() => {
    setState(state + 1);
  }, 1000);

  return <div>state:{state}</div>;
};
