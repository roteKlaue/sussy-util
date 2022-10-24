export default function (a:any):boolean {
    return a && (typeof a === 'function' || a instanceof Function);
}