export default function(func:Function, callback:Function, ...params:any[]):void {
    try {
        const res = func(... params);
        callback(res, null);
    } catch (e) {
        callback(null, e);
    }
}