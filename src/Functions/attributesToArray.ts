export default function (obj:{[k: string]:any}, removeNull:boolean):any[] {
    if(!obj || typeof obj !== 'object') {
        return [];
    }

    if(Array.isArray(obj)) {
        return obj;
    }

    return Object.keys(obj).filter(obj => !removeNull || obj);
}