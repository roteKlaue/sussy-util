export default (arg:any):boolean => arg && (typeof arg === 'number' || /^\d+$/.test(arg));
