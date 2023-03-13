import MutableObject from "../Types/MutableObject";
import IsSomething from "../Classes/IsSomething";


/**
 * It recursively clones an object or array
 * @param {MutableObject<any> | MutableObject<any>[]} obj - MutableObject<any> | MutableObject<any>[]
 * @returns A clone of the object.
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