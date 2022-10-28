import MutableObject from "../Interfaces/MutableObject";

export default function(obj:MutableObject, prop:string):MutableObject { 
    if(Object.prototype.hasOwnProperty.call(obj, prop)){
        delete obj[prop];
    }
    return obj;
}