export default function (obj:Object, prop:string):boolean {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}