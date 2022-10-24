export default function(arg:any):boolean {
    return arg && (typeof arg === 'number' || /^\d+$/.test(arg));
}