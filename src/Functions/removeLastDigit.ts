export default function(n:number):number {
    return parseFloat(n.toString().substring(0, n.toString().length-1));
}