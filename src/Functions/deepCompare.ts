import { MutableObject } from "../Types";

const deepCompare = (obj: MutableObject<any>, obj2: MutableObject<any>): boolean => {
    if (typeof obj !== typeof obj2) {
        return false;
    }

    if (typeof obj === "number" || typeof obj === "boolean" || typeof obj === "string" || typeof obj === "undefined") {
        return obj === obj2;
    }

    if (typeof obj === "function") {
        return obj.toString() === obj2.toString();
    }

    if (Array.isArray(obj)) {
        if (obj.length !== obj2.length) return false;
        for (let i = 0; i < obj.length; i++) {
            if (!deepCompare(obj[i], obj2[i])) return false;
        }
    }

    if (typeof obj === "object") {
        for (const key in obj) {
            if (!deepCompare(obj[key], obj2[key])) return false;
        }
    }

    return true;
}

export default deepCompare;