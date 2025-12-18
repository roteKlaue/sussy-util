import MutableObject from '../Types/MutableObject';

/**
 * @param {MutableObject} obj - obejct which needs a property removed
 * @param {string} prop - property name to be removed
 * @returns {MutableObject} Returns the object
 */
export default (obj: MutableObject<unknown>, prop: string): MutableObject<unknown> => {
  if (Object.prototype.hasOwnProperty.call(obj, prop)) {
    delete obj[prop];
  }
  return obj;
};
