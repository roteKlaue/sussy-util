import { MutableObject } from '../Types';

/**
 * Deeply compares two objects for equality.
 *
 * @template T
 * @param {T} obj - The first object to compare.
 * @param {T} obj2 - The second object to compare.
 * @returns {boolean} Returns `true` if the objects are deeply equal, `false` otherwise.
 */
const deepCompare = (obj: MutableObject<any>, obj2: MutableObject<any>): boolean => {
  if (obj === obj2) {
    return true;
  }

  if (typeof obj !== 'object' || obj === null || typeof obj2 !== 'object' || obj2 === null) {
    return false;
  }

  const keys1 = Object.keys(obj);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!keys2.includes(key) || !deepCompare(obj[key], obj2[key])) {
      return false;
    }
  }

  return true;
};

export default deepCompare;
