import { MutableObject } from "../Types/";

export default <T>(obj: MutableObject<T>, removeNull?: boolean): T[] => {
    if (!obj || typeof obj !== 'object') {
        return [];
    }

    if (Array.isArray(obj)) {
        return obj;
    }

    return Object.keys(obj).map(e => obj[e]).filter(obj => !removeNull || obj);
}