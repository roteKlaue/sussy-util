import { IsSomething } from "../allClasses";

export default (obj:Object, prop:string):boolean => {
    if(!IsSomething.isString(prop)) return false;
    return Object.prototype.hasOwnProperty.call(obj, prop);
}