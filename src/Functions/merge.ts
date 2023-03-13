import MutableObject from "../Types/MutableObject";

export default (a: MutableObject<any>, b: MutableObject<any>): MutableObject<any> => {
    return { ...a, ...b };
}