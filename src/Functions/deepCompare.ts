import { MutableObject } from "../Types";

/**
 * It compares two objects and returns true if they are the same, and false if they are not
 * @param obj - MutableObject<any> - The first object to compare
 * @param obj2 - MutableObject<any> - The object to compare to.
 */
const deepCompare = (obj: MutableObject<any>, obj2: MutableObject<any>): boolean => {
    if (obj === obj2) {
        return true;
    }

    if (typeof obj !== "object" || obj === null || typeof obj2 !== "object" || obj2 === null) {
        return false;
    }

    const keys1 = Object.keys(obj);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (const key of keys1) {
        if (!keys2.includes(key) || !deepCompare(obj[key], obj2[key])) {
            return false;
        }
    }

    return true;
}

export default deepCompare;