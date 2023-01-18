export default (o: any): string => {
    return Object.prototype.toString.call(o);
}