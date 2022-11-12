/** @deprecated */
export default (arg:any):boolean => arg && (typeof arg === "symbol" || arg instanceof Symbol);
