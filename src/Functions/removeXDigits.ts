export default function(n:number, pos:number):number {
    return parseFloat(n.toString().substring(0, pos-1).concat(n.toString().substring(pos, n)));
}