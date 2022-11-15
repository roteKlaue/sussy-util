import MutableObject from "../Interfaces/MutableObject";

export default function(value: Object):MutableObject<any> {
    return value as MutableObject<any>;
}