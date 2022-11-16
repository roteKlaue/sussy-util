export default function<T extends Object>(obj:Object):(keyof T)[] {
    return Object.keys(obj) as (keyof T)[];
}