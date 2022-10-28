import MutableObject from "../Interfaces/MutableObject";
import isObject from "./isObject";

export default function clone(obj:MutableObject|MutableObject[]):MutableObject|MutableObject[]|any|any[] {
    if(Array.isArray(obj)) { return obj.map(clone); }

    if(isObject(obj)) {
        const _clone:MutableObject = {};
        for(const key in obj) {
            _clone[key] = clone(obj[key]);
        }
        return _clone;
    }

    return obj;
}