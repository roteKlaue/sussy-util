export default function(a:any):boolean {
    return a && (a.constructor === Date.constructor || a instanceof Date);
}