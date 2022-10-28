import MutableObject from "../Interfaces/MutableObject";

export default function(a:MutableObject, b:MutableObject):MutableObject {
    for (const key in b) {
        if(!!a[key]) { continue; }
        a[key] = b[key];
    }
    return a;
}