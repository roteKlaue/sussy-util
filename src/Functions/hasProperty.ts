import { IsSomething } from '../Classes';

/**
 * Checks if the given object has a property with the specified name.
 *
 * @param {Object} obj - The object to check for the property.
 * @param {string} prop - The name of the property to check.
 * @returns {boolean} True if the object has the property, false otherwise.
 */
export default (obj: object, prop: string): boolean => {
	if (!IsSomething.isString(prop)) return false;
	return Object.prototype.hasOwnProperty.call(obj, prop);
};