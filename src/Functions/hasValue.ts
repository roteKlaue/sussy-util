import { Collection, Set, Stack, IsSomething } from '../Classes';

/**
 * Returns true if a value exists, false if empty. Works with deeply nested values using object paths.
 * @param {any} a - any
 * @returns A function that takes a parameter and returns a boolean.
 */
const hasValue = <T = unknown>(a: T): boolean => {
  if (a === null || a === void 0) return false;

  if (
    (IsSomething.isString(a) && a.length > 0) ||
    IsSomething.isBoolean(a) ||
    IsSomething.isNumber(a) ||
    IsSomething.isFunction(a) ||
    (IsSomething.isRegExp(a) && a.source.length > 0)
  ) {
    return true;
  }

  if (IsSomething.isArray(a)) {
    for (const iterator of a) {
      if (hasValue(iterator)) {
        return true;
      }
    }
  }

  if (a instanceof Set || a instanceof Stack || a instanceof Collection) {
    return hasValue(a.toArray());
  }

  if (typeof a === 'object' && !IsSomething.isArray(a)) {
    for (const key in a) {
      if (Object.prototype.hasOwnProperty.call(a, key)) {
        if (hasValue(a[key as keyof T])) {
          return true;
        }
      }
    }
  }

  return false;
};

export default hasValue;
