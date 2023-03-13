import { MutableObject } from "../Types/";

/**
 * It takes an object and returns an array of the object's values.
 * @param obj - MutableObject<T> - The object to convert to an array.
 * @param {boolean} [removeNull] - If true, it will remove any null values from the array.
 * @returns An array of T.
 */
const attributesToArray = <T>(obj: MutableObject<T>, removeNull?: boolean): T[] => {
    if (!obj || typeof obj !== 'object') {
        return [];
    }

    if (Array.isArray(obj)) {
        return obj;
    }

    return Object.keys(obj).map(e => obj[e]).filter(obj => !removeNull || obj);
}

export default attributesToArray;