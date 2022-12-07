export default (label: string, func:Function, ...params:any[]):void => {
    console.time(label);
    func.bind(this, ...params);
    console.timeEnd(label);
}