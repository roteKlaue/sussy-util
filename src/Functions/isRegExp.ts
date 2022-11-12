/** @deprecated */
export default (arg:any): any => arg && (arg instanceof RegExp || arg.constructor === RegExp.constructor);
