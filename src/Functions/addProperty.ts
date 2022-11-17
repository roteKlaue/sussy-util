import MutableObject from "../Types/MutableObject";

export default function (obj:MutableObject<any>, prop:string, value:any):MutableObject<any> {
    if (typeof obj !== "object") {
        return obj;
    }

    if (typeof prop !== "string") {
        return obj;
    }

    if (typeof value === "undefined") {
        return obj; 
    }

    obj[prop] = value;
    return obj;
}