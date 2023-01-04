import AbstractClassInstanceCallError from "../Error/AbstractClassInstanceCallError";
export default class AbstractClass {
    // TODO: Documentation
    constructor(Constructor: Function) {
        if (!AbstractClass.isClass(Constructor)) throw new TypeError("Constructor must be a class.");
        if (this.constructor == Constructor) {
            throw new AbstractClassInstanceCallError("You tried to instanciate a new instance of an abstract class");
        }
    }

    static isClass(arg: Function) {
        if (typeof arg !== 'function') {
            return false;
        }
        try {
            arg();
        }
        catch (e) {
            if (/^Class constructor/.test((e as TypeError).message)) {
                return true;
            }
        }
        return false;
    }
}