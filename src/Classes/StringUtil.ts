import { AbstractClass, ImprovedArray } from ".";

export default abstract class StringUtil extends AbstractClass {
    // TODO: Documentation
    constructor() {
        super(StringUtil);
    }

    public static reverse(input: string): string {
        return input.split('').reverse().join('');
    }

    public static randomCharacter(charset?: string): string {
        charset = charset || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const set = new ImprovedArray<string>(...new Set<string>(...charset.split('')));
        return set.getRandomElement();
    }

    public static randomString(length: number, characterset?: string): string {
        characterset = characterset || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = '';
        for (let i = 0; i < length; i++) {
            result += this.randomCharacter(characterset);
        }
        return result;
    }

    public static randomDiscordUsername(withSufix = false): string {
        const length = Math.floor(Math.random() * 29) + 4;
        let name = this.randomString(length);

        if (!StringUtil.isDiscordUsername(name)) {
            name = this.randomDiscordUsername(false);
        }

        if (!withSufix) return name;

        return `${name}#${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`;
    }

    public static isDiscordUsername(username: string): boolean {
        return !!username.match(/^.{4,32}#\d{4}$/);
    }

    public static isInteger(value: string): boolean {
        return /^\d+$/.test(value);
    }

    public static isFloat(value: string): boolean {
        return /^(-)?(\d)*(\.)?(\d)*$/.test(value);
    }


    public static isStrongPassword(value: string): boolean {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);
    }

    public static isWeakPassword(value: string): boolean {
        return !this.isStrongPassword(value);
    }

    public static isEmail(value: string): boolean {
        return /^\S{4,}@\S+\.\S{2,3}$/.test(value);
    }

    public static isHTTPUrl(value: string): boolean {
        return /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(value);
    }

    public static isUrlWithoutHTTP(value: string): boolean {
        return /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(value);
    }

    public static isURL(value: string): boolean {
        return this.isHTTPUrl(value) || this.isUrlWithoutHTTP(value);
    }

    public static shorten(value: string, length: number, ellipsisCount: number): string {
        if (length >= value.length) return value;
        const ellipsis = (new Array(ellipsisCount)).map(() => ".").join("");
        return value.substring(0, length) + ellipsis;
    }

    public static slugify(str: string): string {
        return str.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
    }

    public static stripHtmlTags(str: string): string {
        return str.replace(/<[^>]*>/g, '');
    }

    public static capitalize(value: string): string {
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }

    public static uncapitalize(value: string): string {
        return (value.charAt(0).toLowerCase() + value.slice(1));
    }

    public static isIPv4(value: string): boolean {
        return /^(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(value);
    }

    public static isIPv6(value: string): boolean {
        return /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/.test(value);
    }

    public static isIP(value: string): boolean {
        return this.isIPv4(value) || this.isIPv6(value);
    }

    public static isMacAddress(value: string): boolean {
        return /^(?:[0-9A-Fa-f]{2}[:-]){5}(?:[0-9A-Fa-f]{2})$/.test(value);
    }

    public static isPhoneNumber(value: string): boolean {
        return /^[\\(]\d{3}[\\)]\s\d{3}-\d{4}$/.test(value);
    }

    public static upperFirst(str: string): string {
        return str.charAt(0).toUpperCase() + str.substring(1);
    }

    public static lowerFirst(str: string): string {
        return str.charAt(0).toLowerCase() + str.substring(1);
    }

    public static camelCase(str: string): string {
        return this.lowerFirst(str.split(/[^\w]|_+/).map((val) => this.capitalize(val)).join(''));
    }

    public static collaps(str: string): string {
        return str.trim().split(" ").filter((val: string) => val.length > 0).join(" ");
    }

    public static noSpaces(str: string): string {
        return str.trim().split(" ").join("");
    }

    public static toCharCode(str: string): string {
        return str.split('').map((val: string) => val.charCodeAt(0)).join("");
    }

    public static protectEmail(str: string): string {
        if (!this.isEmail(str)) return str;
        const half = str.split("@");
        half[0] = this.shorten(half[0], half[0].length / 2, 3);
        return half.join("@");
    }

    public static swapCase(str: string): string {
        return str.replace(/ ([a-z]+ ) | ( [A-Z]+ )/g, (match, chr) => chr ? match.toUpperCase() : match.toLowerCase());
    }

    public static generatePassword(length: number, characters?: string): string {
        characters = characters || "ascdefghijklmnopqrstuvwxyzABCDEFGHIJLMOPRSTUVWXYZ1234567890!§$%&?#*+~'";
        if (StringUtil.isWeakPassword([...new Set(characters.split(""))].join(""))) throw new Error("Not enough characters to generate password");
        const result = this.randomString(length, characters);
        if (StringUtil.isStrongPassword(result)) return result;
        return this.generatePassword(length, characters);
    }

    public static randomColorCode(): string {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

    public static wordCount(str: string): number {
        if (typeof str !== 'string') { return -1; };
        const sus = str.match(/\b\w+\b/);
        if (!sus) { return 0; }
        return sus.length;
    }

    public static getRatingString(rate: number): string {
        return '★★★★★☆☆☆☆☆'.slice(5 - rate, 10 - rate);
    }

    public static normalizeLineBreaks(str: string, lineEnd?: string): string {
        lineEnd = lineEnd || '\n';

        return str
            .replace(/\r\n/g, lineEnd)
            .replace(/\r/g, lineEnd)
            .replace(/\n/g, lineEnd);
    }

    public static contains(str: string, substring: string, fromIndex: number): boolean {
        return str.indexOf(substring, fromIndex) !== -1;
    }

    public static repeat(str: string, n: number): string {
        return (new Array(n + 1)).join(str);
    }

    public static rpad(str: string, minLen: number, ch?: string): string {
        ch = ch || ' ';
        return (str.length < minLen) ? str + this.repeat(ch, minLen - str.length) : str;
    }

    public static lpad(str: string, minLen: number, ch?: string): string {
        ch = ch || ' ';
        return ((str.length < minLen) ? this.repeat(ch, minLen - str.length) + str : str);
    }

    public static spilce(str: string, offset: number, removeCount: number | undefined, text = ""): string {
        if (typeof str !== "string" || typeof offset !== 'number' || offset > str.length) return "";
        const calculatedOffset = offset < 0 ? this.length + offset : offset;
        return str.substring(0, calculatedOffset) + text + str.substring(calculatedOffset + (removeCount ? removeCount : 0));
    }

    public static isEmpty(str: string): boolean {
        return (!str || str.length === 0 || str === "");
    }

    public static ltrim(str: string): string {
        return str.replace(/^\s+/, "");
    }

    public static rtrim(str: string): string {
        return str.replace(/\s+$/, "");
    }

    public static camelToKebab(str: string) {
        return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    }
}