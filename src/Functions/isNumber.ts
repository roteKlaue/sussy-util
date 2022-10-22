export default function(arg:any):boolean {
    return typeof arg === 'number' || /^\d+$/.test(arg);
}