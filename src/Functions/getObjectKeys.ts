export default <T extends Object>(obj: T): (keyof T)[] => {
    return Object.keys(obj) as (keyof T)[];
}