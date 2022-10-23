import Set from "./Set";

export default class StringUtil {
    #characterset = new Set<string>(...'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(''));

    constructor() {}

    static reverse(input:string): string {
        return input.split('').reverse().join('');
    }

    get charset() : Set<string> {
        return this.#characterset;
    }

    removeChars(...string:string[]):void {
        for (const str of string) {
            this.#characterset.delete(str);
        };
    }

    addChars(...string:string[]):void {
        for (const str of string) {
            str.split('').forEach(e => this.#characterset.push(e));
        }
    }
    
    randomCharacter():string {
        return this.#characterset.get(Math.floor(Math.random() * this.#characterset.length()));
    }

    randomString(length:number):string {
        let result = '';
        for (let i = 0; i < length; i++) {
            result += this.randomCharacter();
        }
        return result;
    }

    randomDiscordUsername(withSufix = false):string {
        const length = Math.floor(Math.random() * 29) + 4;
        let name = this.randomString(length);
        
        if(!StringUtil.isDiscordUsername(name)) {
            name = this.randomDiscordUsername(false);
        }

        if(!withSufix) return name;

        return `${name}#${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`;
    }

    static isDiscordUsername(username:string):boolean {
        return !!username.match(/^.{4,32}#\d{4}$/);
    }

    static isNumeric(value:string):boolean {
        return /^\d+$/.test(value);
    }

    static isStrongPassword(value:string):boolean {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);
    }

    static isWeakPassword(value:string):boolean {
        return !this.isStrongPassword(value);
    }

    static isEmail(value:string):boolean {
        return /^\S{4,}@\S+\.\S{2,3}$/.test(value);
    }

    static #isHTTPUrl(value:string):boolean {
        return /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(value);
    }

    static #isUrlWithoutHTTP (value:string):boolean {
        return /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(value);
    }

    static isURL(value:string):boolean {
        return this.#isHTTPUrl(value) || this.#isUrlWithoutHTTP(value);
    }

    static shorten(value:string, length:number, ellipsisCount:number):string {
        if(length >= value.length) return value;
        const ellipsis = (new Array(ellipsisCount)).map(() => ".").join("");
        return value.substring(0, length) + ellipsis;
    }

    static slugify (str:string):string {
        return str.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
    }

    static stripHtmlTags(str:string):string {
        return str.replace(/<[^>]*>/g, '');
    }

    static capitalize(value:string):string {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

    static isIPv4 (value:string):boolean {
        return /^(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(value);
    }

    static isIPv6 (value:string):boolean {
        return /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/.test(value);
    }

    static isIP(value: string):boolean {
        return this.isIPv4(value) || this.isIPv6(value);
    }

    static isMacAddress(value: string):boolean {
        return /^(?:[0-9A-Fa-f]{2}[:-]){5}(?:[0-9A-Fa-f]{2})$/.test(value);
    }

    static isPhoneNumber(value: string):boolean {
        return /^[\\(]\d{3}[\\)]\s\d{3}-\d{4}$/.test(value);
    }

    generatePassword(length:number):string {
        const result = this.randomString(length);
        if(StringUtil.isWeakPassword(this.#characterset.toArray().reduce((e,r) => e + r))) throw new Error("Not enough characters to generate password");
        if(StringUtil.isStrongPassword(result)) return result;
        return this.generatePassword(length); 
    }
}