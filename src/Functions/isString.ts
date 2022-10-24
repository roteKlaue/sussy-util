export default function(args: any):boolean {
    return args && (typeof args === "string" || args instanceof String || (args + "") === args);
}