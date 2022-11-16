import MutableObject from "../types/MutableObject";
import IsSomething from "../Classes/IsSomething";

export default function clone(obj:MutableObject<any>|MutableObject<any>[]):MutableObject<any>|MutableObject<any>[] {
    if(Array.isArray(obj)) { return obj.map(clone); }

    if(IsSomething.isObject(obj)) {
        const _clone:MutableObject<any> = {};
        for(const key in obj) {
            _clone[key] = clone(obj[key]);
        }
        return _clone;
    }

    return obj;
}