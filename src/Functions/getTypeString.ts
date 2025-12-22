import IsSomething from '../Classes/IsSomething';

/**
 * Determine the data type of a given variable.
 * @param {any} arg - The value to be tested.
 * @returns {string} A string representing the data type of the given variable.
 */
export default (arg: any): string | undefined => {
  // Check for primitive data types
  if (['boolean', 'number', 'string', 'symbol', 'bigint', 'undefined'].includes(typeof arg)) {
    return typeof arg;
  }

  // Check for null
  if (arg === null) {
    return 'null';
  }

  // Check for specific types using IsSomething module
  if (IsSomething.isDate(arg)) {
    return 'Date';
  }
  if (IsSomething.isError(arg)) {
    return 'Error';
  }
  if (IsSomething.isRegExp(arg)) {
    return 'RegExp';
  }

  // Check for functions and classes
  if (typeof arg === 'function') {
    return IsSomething.isClass(arg) ? arg.constructor.name : 'function';
  }

  // Check for arrays and objects
  if (typeof arg === 'object') {
    return IsSomething.isArray(arg) ? 'array' : 'object';
  }
};
