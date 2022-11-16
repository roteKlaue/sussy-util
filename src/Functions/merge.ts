import MutableObject from "../types/MutableObject";

export default function(a:MutableObject<any>, b:MutableObject<any>):MutableObject<any> {
    for (const key in b) {
        if(!!a[key]) { continue; }
        a[key] = b[key];
    }
    return a;
}