/**
 * Maps the properties of an object to a new object using a mapper function.
 *
 * @template T - The type of the input object.
 * @template R - The type of the mapped values in the output object.
 * @param {T} obj - The input object to be mapped.
 * @param {(value: T[keyof T], key: keyof T, object: T) => R} mapper - The function that maps each property value.
 * @returns {{ [K in keyof T]: R }} - A new object with mapped properties.
 */
export default <T extends {}, R>(obj: T, mapper: (value: T[keyof T], key: keyof T, object: T) => R): { [K in keyof T]: R } => {
    const mappedObj = {} as { [K in keyof T]: R };
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            mappedObj[key] = mapper(obj[key], key, obj);
        }
    }
    return mappedObj;
}