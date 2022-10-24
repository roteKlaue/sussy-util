export default function(a:any):boolean {
    return (a && a instanceof Error) || (a && a.constructor === Error.constructor);
}