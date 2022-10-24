export default function(arg: any):boolean {
    return arg && (typeof arg === 'boolean' || arg === "true" || arg === "false");
}