/**
 * It takes a generic type, and returns undefined.
 * @param {T} sus - T - sus is a generic type T
 * @returns undefined
 */
const convertToUndefined = <T> (sus: T): undefined => {
    return void (sus);
}

export default convertToUndefined;