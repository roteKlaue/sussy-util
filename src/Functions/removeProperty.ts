import MutableObject from "../Types/MutableObject";

/**
 * @param {MutableObject} obj - obejct which needs a property removed
 * @param {string} prop - property name to be removed
 * @returns {MutableObject} Returns the object
 */
export default (obj: MutableObject<any>, prop: string): MutableObject<any> => {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        delete obj[prop];
    }
    return obj;
}