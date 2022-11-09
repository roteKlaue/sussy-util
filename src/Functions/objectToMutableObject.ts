import MutableObject from "../Interfaces/MutableObject";

export default function(value: Object):MutableObject {
    return value as MutableObject;
}