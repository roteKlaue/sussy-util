/** @deprecated */
export default (a:any):boolean => (a && a instanceof Error) || (a && a.constructor === Error.constructor);