import MutableObject from "../Interfaces/MutableObject";

export default function(obj:MutableObject<any>, prop:string):MutableObject<any> { 
    if(Object.prototype.hasOwnProperty.call(obj, prop)){
        delete obj[prop];
    }
    return obj;
}