import useMemoizedFn from '../useMemoizedFn';
import { useEffect, useRef, useCallback } from 'react';
import { isNumber } from '../utils';

type noop = () => void;

const useTimeout = (fn: noop, delay?: number) => {
  const timerCallback = useMemoizedFn(fn);
  const timerRef = useRef(null);

  const clear = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  }, []);

  useEffect(() => {
    if (!isNumber(delay) || delay < 0) {
      return;
    }
    timerRef.current = setTimeout(timerCallback, delay);

    return clear;
  }, [delay]);

  return clear;
};

export default useTimeout;
