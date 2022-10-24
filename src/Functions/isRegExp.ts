export default function(arg:any): any {
    return arg && (arg instanceof RegExp || arg.constructor === RegExp.constructor);
}