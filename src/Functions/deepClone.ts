import MutableObject from "../Types/MutableObject";
import IsSomething from "../Classes/IsSomething";


/**
 * Recursively clones an object or array.
 *
 * @template T
 * @param {MutableObject<T> | MutableObject<T>[]} obj - The object or array to clone.
 * @returns {MutableObject<T> | MutableObject<T>[]} - A clone of the object or array.
 */
const clone = (obj: MutableObject<any> | MutableObject<any>[]): MutableObject<any> | MutableObject<any>[] => {
    if (Array.isArray(obj)) { return obj.map(clone); }

    if (IsSomething.isObject(obj)) {
        const _clone: MutableObject<any> = {};
        for (const key in obj) {
            _clone[key] = clone(obj[key]);
        }
        return _clone;
    }

    return obj;
}

export default clone;