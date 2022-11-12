/** @deprecated */
export default (a:any):boolean => a && (a.constructor === Date.constructor || a instanceof Date);
