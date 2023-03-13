/**
 * @param {object} obj - obj - the object to extract the keys of
 * @returns an array of the keys of the object
*/
export default <T extends Object>(obj: T): (keyof T)[] => {
    return Object.keys(obj) as (keyof T)[];
}