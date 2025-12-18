import { AnyFunction } from '../Types';

const debounce = (fn: AnyFunction, wait?: number, immediate = false): AnyFunction => {
  let timeout: number | undefined | NodeJS.Timeout;

  const setDebounce = (...args: unknown[]): void => {
    const later = () => {
      timeout = void 0;
      if (!immediate) {
        fn.apply(later, args);
      }
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait || 200);

    if (callNow) {
      fn.apply(setDebounce, args);
    }
  };

  return setDebounce;
};

export default debounce;
