import IsSomething from '../Classes/IsSomething';

/**
 * Calls the given function with the provided parameters if it is a valid function.
 *
 * @param {any} func - The function to call.
 * @param {...any} params - The parameters to pass to the function.
 * @returns {any|null} The result of the function call or null if the provided func is not a valid function.
 */
export default (func: any, ...params: any[]): any => {
  if (!IsSomething.isFunction(func)) return null;
  return func(...params);
};
