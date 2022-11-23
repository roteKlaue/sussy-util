export default (num:number, digit = 0):number => {
    digit = Math.floor(digit);
    if(digit < 0) digit = 0;
    if (digit === 0) {
        return Math.round(num);
    }
    return Math.round(num * Math.pow(10, digit)) / Math.pow(10, digit);
}