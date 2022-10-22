export default function (a:any):boolean {
    return typeof a === 'function' || a instanceof Function;
}