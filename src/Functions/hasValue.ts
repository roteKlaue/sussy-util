import { Collection, Set, Stack, IsSomething } from '../Classes';

/**
 * Returns true if a value exists, false if empty. Works with deeply nested values using object paths.
 * @param {any} a - any
 * @returns A function that takes a parameter and returns a boolean.
 */
const hasValue = (a: any): boolean => {
	if ((IsSomething.isString(a) && a.length > 0) || IsSomething.isBoolean(a) || a === null || IsSomething.isNumber(a) || IsSomething.isFunction(a) || (IsSomething.isRegExp(a) && a.length > 0)) {
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
			if (a.hasOwnProperty(key)) {
				if (hasValue(a[key])) {
					return true;
				}
			}
		}
	}

	return false;
};

export default hasValue;