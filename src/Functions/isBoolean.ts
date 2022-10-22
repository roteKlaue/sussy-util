export default function(arg: any):boolean {
    return typeof arg === 'boolean' || arg === "true" || arg === "false";
}