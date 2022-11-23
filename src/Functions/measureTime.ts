export default (label: string, func:Function, ...params:any[]):void => {
    console.time(label);
    func(...params);
    console.timeEnd(label);
}