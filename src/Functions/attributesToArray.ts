import { MutableObject } from '../Types';

/**
 * Converts the attributes of a mutable object into an array.
 * @template T - The type of the attributes.
 * @param {MutableObject<T>} obj - The mutable object whose attributes will be converted.
 * @param {boolean} [removeNull] - Optional. Specifies whether to remove null values from the resulting array.
 * @returns {T[]} An array containing the attributes of the mutable object.
 */
const attributesToArray = <T>(obj: MutableObject<T>, removeNull?: boolean): T[] => {
  if (!obj || typeof obj !== 'object') {
    return [];
  }

  if (Array.isArray(obj)) {
    return obj;
  }

  return Object.keys(obj)
    .map((e) => obj[e])
    .filter((obj) => !removeNull || obj);
};

export default attributesToArray;
