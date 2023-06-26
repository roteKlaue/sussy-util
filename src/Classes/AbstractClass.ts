import { AbstractClassInstanceCallError } from "../Error";
export default class AbstractClass {
    constructor(Constructor: Function) {
        if (!AbstractClass.isClass(Constructor)) throw new TypeError("Constructor must be a class.");
        if (this.constructor == Constructor) {
            // if constructor is the same as the instance constructor then we know that a user is trying to make a new instance of an abstract class
            throw new AbstractClassInstanceCallError("You tried to instanciate a new instance of an abstract class");
        }
    }

    /**
     * used for determining if given parameter is a constructor
    */
    public static isClass(arg: Function) {
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