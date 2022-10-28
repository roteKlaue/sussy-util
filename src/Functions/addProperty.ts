import MutableObject from "../Interfaces/MutableObject";

export default function (obj:MutableObject, prop:string, value:any):MutableObject {
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