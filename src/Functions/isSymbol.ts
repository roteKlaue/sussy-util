export default function(arg:any):boolean{
    return arg && (typeof arg === "symbol" || arg instanceof Symbol);
}