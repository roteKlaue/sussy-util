export default class Random {
    static randomInt(lower = 0, upper = 10) {
        lower = Math.floor(lower);
        upper = Math.ceil(upper);
        return Math.floor(Math.random() * (upper - lower + 1)) + lower;
    }

    static randomDouble(lower = 0, upper = 10) {
        return this.randomInt(lower, upper) + Math.random();
    }

    static randomChar(charset?: string):string {
        charset = charset || "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        return charset.charAt(this.randomInt(0, charset.length - 1));    
    }

    static randomString(length = 10, charset?: string):string {
        return length === 0? "": this.randomChar(charset) + this.randomString(--length, charset);
    }
}