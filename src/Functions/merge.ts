import MutableObject from "../Types/MutableObject";

export default (a:MutableObject<any>, b:MutableObject<any>):MutableObject<any> => {
    for (const key in b) {
        if(!!a[key]) { continue; }
        a[key] = b[key];
    }
    return a;
}