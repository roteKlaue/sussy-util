import { PromiseOr } from "../Types";

export default async (func:(...args:any[]) => PromiseOr<any>, callback:Function, ...params:any[]): Promise<void> => {
    try {
        const res = await func(...params);
        callback(res, null);
    } catch (e) {
        callback(null, e);
    }
}