import ImprovedArray from "./ImprovedArray";

export default class StringUtil {
    constructor() {}

    static reverse(input:string): string {
        return input.split('').reverse().join('');
    }

    static randomCharacter(charset?:string): string {
        charset = charset || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const set = new ImprovedArray<string>(...new Set<string>(... charset.split('')));
        return set.getRandomElement();
    }

    static randomString(length:number, characterset?:string):string {
        characterset = characterset || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = '';
        for (let i = 0; i < length; i++) {
            result += this.randomCharacter(characterset);
        }
        return result;
    }

    static randomDiscordUsername(withSufix = false):string {
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

    static isHTTPUrl(value:string):boolean {
        return /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(value);
    }

    static isUrlWithoutHTTP (value:string):boolean {
        return /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(value);
    }

    static isURL(value:string):boolean {
        return this.isHTTPUrl(value) || this.isUrlWithoutHTTP(value);
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
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
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

    static upperFirst(str:string):string {
        return str.charAt(0).toUpperCase() + str.substring(1);
    }

    static lowerFirst(str:string):string {
        return str.charAt(0).toLowerCase() + str.substring(1);
    }

    static camelCase(str:string):string {
        return this.lowerFirst(str.split(/[^\w]|_+/).map((val) => this.capitalize(val)).join(''));
    }

    static collaps(str:string):string {
        return str.trim().split(" ").filter((val:string) => val.length > 0).join(" ");
    }

    static noSpaces(str:string):string {
        return str.trim().split(" ").join("");
    }

    static toCharCode(str:string):string {
        return str.split('').map((val:string) => val.charCodeAt(0)).join("");
    }

    static protectEmail(str:string):string {
        if(!this.isEmail(str)) return str;
        const half = str.split("@");
        half[0] = this.shorten(half[0], half[0].length / 2, 3);
        return half.join("@");
    }

    static swapCase(str:string):string {
        return str.replace(/ ([a-z]+ ) | ( [A-Z]+ )/g, (match, chr) => chr? match.toUpperCase():match.toLowerCase());
    }

    static generatePassword(length:number, characters?:string):string {
        characters = characters || "ascdefghijklmnopqrstuvwxyzABCDEFGHIJLMOPRSTUVWXYZ1234567890!§$%&?#*+~'";
        if(StringUtil.isWeakPassword([...new Set(characters.split(""))].join(""))) throw new Error("Not enough characters to generate password");
        const result = this.randomString(length, characters);
        if(StringUtil.isStrongPassword(result)) return result;
        return this.generatePassword(length, characters); 
    }

    static randomColorCode():string {
        return `#${Math.floor(Math.random()*16777215).toString(16)}`;
    }

    static wordCount(str:string):number {
        if(typeof str !== 'string'){ return -1; };
        const sus = str.match(/\b\w+\b/);
        if(!sus) { return 0; }
        return sus.length;
    }

    static getRatingString(rate:number):string {
        return '★★★★★☆☆☆☆☆'.slice(5 - rate, 10 - rate);
    }

    static normalizeLineBreaks(str:string, lineEnd?:string):string {
        lineEnd = lineEnd || '\n';
      
        return str
            .replace(/\r\n/g, lineEnd)
            .replace(/\r/g, lineEnd)
            .replace(/\n/g, lineEnd);
    }

    static contains(str:string, substring:string, fromIndex:number):boolean {
        return str.indexOf(substring, fromIndex) !== -1;
    }

    static repeat(str:string, n:number):string {
        return (new Array(n + 1)).join(str);
    }

    static rpad(str:string, minLen:number, ch?:string):string {
        ch = ch || ' ';
        return (str.length < minLen)? str + this.repeat(ch, minLen - str.length) : str;
    }

    static lpad(str:string, minLen:number, ch?:string):string {
        ch = ch || ' ';
        return ((str.length < minLen)?this.repeat(ch, minLen - str.length) + str : str);  
    }
    // static spilce(str:string):string {

    //     return "";
    // }
}