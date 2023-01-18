import MutableObject from "../Types/MutableObject";

export default (obj: MutableObject<any>, prop: string, value: any): MutableObject<any> => {
    if (typeof obj !== "object") {
        return obj;
    }

    if (typeof prop !== "string") {
        return obj;
    }

    obj[prop] = value;
    return obj;
}