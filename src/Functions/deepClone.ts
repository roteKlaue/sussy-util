import IsSomething from '../Classes/IsSomething';

type EnumerableObject<V> = { [K in keyof V]: V[K] };

/**
 * Recursively clones an object or array.
 *
 * @template T
 */
const clone = <V>(obj: V): V => {
	if (Array.isArray(obj)) return obj.map(clone) as unknown as V; 

	if (IsSomething.isObject(obj)) {
		const _clone: EnumerableObject<V> = {} as EnumerableObject<V>;
		for (const key in obj) {
			_clone[key] = clone(obj[key]);
		}
		return _clone;
	}

	return obj;
};

export default clone;