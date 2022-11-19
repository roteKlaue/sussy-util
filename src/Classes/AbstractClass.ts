import AbstractClassInstanceCallError from "../Error/AbstractClassInstanceCallError";
import IsSomething from "./IsSomething";

export default class AbstractClass {
    constructor(Constructor:Function) {
        if(!IsSomething.isClass(Constructor)) throw new TypeError("Constructor must be a class.");
        if(this.constructor == Constructor) {
            throw new AbstractClassInstanceCallError("You tried to instanciate a new instance of an abstract class");
        }
    }
}