import MutableObject from '../Types/MutableObject';
import IsSomething from '../Classes/IsSomething';


/**
 * Recursively clones an object or array.
 *
 * @template T
 * @param {MutableObject<T> | MutableObject<T>[]} obj - The object or array to clone.
 * @returns {MutableObject<T> | MutableObject<T>[]} - A clone of the object or array.
 */
const clone = (obj: MutableObject<unknown> | MutableObject<unknown>[]): MutableObject<unknown> | MutableObject<unknown>[] => {
	if (Array.isArray(obj)) { return obj.map(clone) as MutableObject<unknown>[]; }

	if (IsSomething.isObject(obj)) {
		const _clone: MutableObject<unknown> = {};
		for (const key in obj) {
			_clone[key] = clone(obj[key] as MutableObject<unknown>);
		}
		return _clone;
	}

	return obj;
};

export default clone;