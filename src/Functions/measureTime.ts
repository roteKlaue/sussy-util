export default (label: string, func:(...args:any)=>any, ...params:any[]):void => {
    console.time(label);
    func.bind(this, ...params);
    console.timeEnd(label);
}