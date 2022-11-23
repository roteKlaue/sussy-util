import { MutableObject } from "../allInterfaces";

export default (obj:MutableObject<any>, removeNull:boolean):any[] => {
    if(!obj || typeof obj !== 'object') {
        return [];
    }

    if(Array.isArray(obj)) {
        return obj;
    }

    return Object.keys(obj).map(e => obj[e]).filter(obj => !removeNull || obj);
}