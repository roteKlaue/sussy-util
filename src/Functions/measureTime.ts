export default function(label: string, func:Function, ...params:any[]) {
    console.time(label);
    func(...params);
    console.timeEnd(label);
}