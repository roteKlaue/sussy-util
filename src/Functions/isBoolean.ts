/** @deprecated */
export default (arg: any):boolean => arg && (typeof arg === 'boolean' || arg === "true" || arg === "false");