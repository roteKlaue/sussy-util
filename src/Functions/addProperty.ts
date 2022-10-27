export default function (obj:{[k: string]: any}, prop:string, value:any):Object {
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