import MutableObject from "../Types/MutableObject";

/**
 * @param obj - MutableObject<any> - This is the object that we want to add a property to.
 * @param {string} prop - string - The property to add to the object
 * @param {any} value - any - The value to add to the object
 * @returns The object that was passed in.
 */
const addProperty = <T> (obj: MutableObject<T>, prop: string, value: T): MutableObject<T> => {
    if (typeof obj !== "object") {
        return obj;
    }

    if (typeof prop !== "string") {
        return obj;
    }

    obj[prop] = value;
    return obj;
}

export default addProperty;