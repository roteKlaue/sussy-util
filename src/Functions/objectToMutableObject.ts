import MutableObject from "../types/MutableObject";

/** @deprecated */
export default function(value: Object):MutableObject<any> {
    return value as MutableObject<any>;
}