/** @deprecated */
export default (args: any):boolean => args && (typeof args === "string" || args instanceof String || (args + "") === args);
