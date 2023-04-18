import { AbstractClass, Random } from ".";

export default abstract class StringUtil extends AbstractClass {
    constructor() {
        super(StringUtil);
    }

    /**
     * It takes a string, splits it into an array of characters, reverses the array, and joins the
     * array back into a string
     * @param {string} input - The string to be reversed.
     * @returns The reverse of the input string.
     */
    public static reverse(input: string): string {
        return input.split('').reverse().join('');
    }

    /**
     * It takes a string of characters and returns a random character from that string.
     * @param {string} [charset] - The characters to choose from. Defaults to all alphanumeric
     * characters.
     * @returns A random character from the charset.
     */
    public static randomCharacter(charset?: string): string {
        charset = charset || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        return Random.randomChar([...new Set<string>(...charset.split(''))].join(""));
    }

    /**
     * Generate a random string of a given length, using a given character set.
     * @param {number} length - number - The length of the string to generate
     * @param {string} [characterset] - The characterset to use for the random string.
     * @returns A string of random characters.
     */
    public static randomString(length: number, characterset?: string): string {
        characterset = characterset || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const chars: string[] = [];
        chars.length = length;
        chars.map(e => StringUtil.randomCharacter(characterset));
        return chars.join('');
    }

    /**
     * It generates a random string, checks if it's a valid discord username, if it's not, it generates
     * another one, if it is, it returns it.
     * @param [withSufix=false] - boolean
     * @returns A random string that is a valid discord username.
     */
    public static randomDiscordUsername(withSufix = false): string {
        const length = Random.randomInt(4, 33);
        let name = StringUtil.randomString(length);

        if (!StringUtil.isDiscordUsername(`${name}#0000`)) {
            name = StringUtil.randomDiscordUsername(false);
        }

        if (!withSufix) return name;
        return `${name}#${Random.randomInt(0, 10)}${Random.randomInt(0, 10)}${Random.randomInt(0, 10)}${Random.randomInt(0, 10)}`;
    }

    /**
     * It returns true if the username is a valid Discord username, and false if it isn't
     * @param {string} username - The username to check.
     * @returns A boolean value.
     */
    public static isDiscordUsername(username: string): boolean {
        return !!username.match(/^.{4,32}#\d{4}$/);
    }

    /**
     * If the value is a string, and the string contains only digits, then return true. Otherwise,
     * return false
     * @param {string} value - The value to be tested.
     * @returns A boolean value.
     */
    public static isInteger(value: string): boolean {
        return /^\d+$/.test(value);
    }

    /**
     * It returns true if the value is a float, otherwise it returns false
     * @param {string} value - string - The value to check
     * @returns A boolean value.
     */
    public static isFloat(value: string): boolean {
        return /^(-)?(\d)*(\.)?(\d)*$/.test(value);
    }


    /**
     * The password must be at least eight characters long and contain at least one lowercase letter,
     * one uppercase letter, one numeric digit, and one special character
     * @param {string} value - string - The value to check
     * @returns A boolean value.
     */
    public static isStrongPassword(value: string): boolean {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);
    }

    /**
     * If the password is not strong, then it is weak.
     * @param {string} value - string - The value to check.
     * @returns The return value is a boolean.
     */
    public static isWeakPassword(value: string): boolean {
        return !StringUtil.isStrongPassword(value);
    }

    /**
     * It checks if the value is a string, and if it is, it checks if the string is at least 4
     * characters long, contains an @ symbol, and ends with a . followed by at least 2 characters
     * @param {string} value - string - The value to be tested.
     * @returns A boolean value.
     */
    public static isEmail(value: string): boolean {
        return /^\S{4,}@\S+\.\S{2,3}$/.test(value);
    }

    /**
     * It checks if the value is a valid HTTP URL.
     * @param {string} value - The value to be tested.
     * @returns A boolean value.
     */
    public static isHTTPUrl(value: string): boolean {
        return /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(value);
    }

    /**
     * It checks if the value is a valid URL without the HTTP or HTTPS prefix
     * @param {string} value - string - The value to be tested.
     * @returns A boolean value.
     */
    public static isUrlWithoutHTTP(value: string): boolean {
        return /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(value);
    }

    /**
     * If the string is a URL, return true, otherwise return false.
     * @param {string} value - string
     * @returns A boolean value.
     */
    public static isURL(value: string): boolean {
        return StringUtil.isHTTPUrl(value) || StringUtil.isUrlWithoutHTTP(value);
    }

    /**
     * It takes a string, a length, and an ellipsis count, and returns a string that is the original
     * string shortened to the length, with the ellipsis count number of ellipses appended to the end.
     * 
     * @param {string} value - The string to shorten
     * @param {number} length - The length of the string you want to return.
     * @param {number} ellipsisCount - The number of dots to use in the ellipsis.
     * @returns The value of the string is being returned.
     */
    public static shorten(value: string, length: number, ellipsisCount: number): string {
        if (length >= value.length) return value;
        const ellipsis = (new Array(ellipsisCount)).map(() => ".").join("");
        return value.substring(0, length) + ellipsis;
    }

    /**
     * It takes a string, converts it to lowercase, trims it, removes all non-word characters, replaces
     * all whitespace and underscores with a dash, and removes all leading and trailing dashes
     * @param {string} str - string - The string to slugify
     * @returns A string
     */
    public static slugify(str: string): string {
        return str.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
    }

    /**
     * It takes a string, and returns a string with all HTML tags removed
     * @param {string} str - The string to be stripped of HTML tags.
     * @returns The string with all HTML tags removed.
     */
    public static stripHtmlTags(str: string): string {
        return str.replace(/<[^>]*>/g, '');
    }

    /**
     * Capitalize the first letter of a string and lowercase the rest.
     * @param {string} value - string - The string to be capitalized.
     * @returns The first character of the string is being returned in uppercase and the rest of the
     * string is being returned in lowercase.
     */
    public static capitalize(value: string): string {
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }

    /**
     * It takes a string and returns the same string with the first letter lowercase.
     * @param {string} value - string - The string to uncapitalize.
     * @returns The first character of the string is converted to lowercase and then concatenated with
     * the rest of the string.
     */
    public static uncapitalize(value: string): string {
        return (value.charAt(0).toLowerCase() + value.slice(1));
    }

    /**
     * It returns true if the value is a valid IPv4 address, otherwise it returns false.
     * @param {string} value - The value to check.
     * @returns A boolean value.
     */
    public static isIPv4(value: string): boolean {
        return /^(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(value);
    }

    /**
     * It checks if the value is a valid IPv6 address.
     * @param {string} value - The value to check.
     * @returns A boolean value.
     */
    public static isIPv6(value: string): boolean {
        return /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/.test(value);
    }

    /**
     * If the value is an IPv4 address, return true. Otherwise, if the value is an IPv6 address,
     * return true. Otherwise, return false.
     * @param {string} value - string
     * @returns A boolean value.
     */
    public static isIP(value: string): boolean {
        return StringUtil.isIPv4(value) || StringUtil.isIPv6(value);
    }

    /**
     * It returns true if the value is a valid MAC address, otherwise it returns false
     * @param {string} value - The value to check.
     * @returns A boolean value.
     */
    public static isMacAddress(value: string): boolean {
        return /^(?:[0-9A-Fa-f]{2}[:-]){5}(?:[0-9A-Fa-f]{2})$/.test(value);
    }

    /**
     * If the value is a string that matches the regular expression, then return true, otherwise return
     * false.
     * @param {string} value - string - The value to be tested.
     * @returns A boolean value.
     */
    public static isPhoneNumber(value: string): boolean {
        return /^[\\(]\d{3}[\\)]\s\d{3}-\d{4}$/.test(value);
    }

    /**
     * It takes a string, gets the first character, makes it uppercase, and then adds the rest of the
     * string to it
     * @param {string} str - string - The string to be converted.
     * @returns The first character of the string is being returned in uppercase, and the rest of the
     * string is being returned in lowercase.
     */
    public static upperFirst(str: string): string {
        return str.charAt(0).toUpperCase() + str.substring(1);
    }

    /**
     * It takes a string, and returns a new string with the first character lowercased
     * @param {string} str - string - The string to be converted.
     * @returns The first character of the string is being returned in lowercase, and the rest of the
     * string is being returned in its original case.
     */
    public static lowerFirst(str: string): string {
        return str.charAt(0).toLowerCase() + str.substring(1);
    }

    /**
     * It takes a string, splits it on non-word characters and underscores, capitalizes each word, and
     * joins them together
     * @param {string} str - string - The string to be converted to camelCase
     * @returns The first letter of the string is being returned in lowercase.
     */
    public static camelCase(str: string): string {
        return StringUtil.lowerFirst(str.split(/[^\w]|_+/).map((val) => StringUtil.capitalize(val)).join(''));
    }

    /**
     * It takes a string, trims it, splits it into an array of words, filters out any empty words, and
     * then joins the array back into a string
     * @param {string} str - string - The string to be collapsed.
     * @returns A string
     */
    public static collaps(str: string): string {
        return str.trim().split(" ").filter((val: string) => val.length > 0).join(" ");
    }

    /**
     * It takes a string, trims it, splits it into an array of strings, and then joins it back together
     * @param {string} str - string - The string to be trimmed.
     * @returns The string with no spaces.
     */
    public static noSpaces(str: string): string {
        return str.trim().split(" ").join("");
    }

    /**
     * It takes a string, splits it into an array of characters, maps each character to its charCode,
     * and then joins the array of charCodes into a string
     * @param {string} str - string - The string to convert to char codes.
     * @returns The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16
     * code unit at the given index.
     */
    public static toCharCode(str: string): string {
        return str.split('').map((val: string) => val.charCodeAt(0)).join("");
    }

    /**
     * It takes a string, checks if it's an email, splits it in half, shortens the first half, and
     * returns the result.
     * @param {string} str - string - The string to protect
     * @returns The email address with the first half of the email address shortened to 3 characters.
     */
    public static protectEmail(str: string): string {
        if (!StringUtil.isEmail(str)) return str;
        const half = str.split("@");
        half[0] = StringUtil.shorten(half[0], half[0].length / 2, 3);
        return half.join("@");
    }

    /**
     * It takes a string, and returns a string with the first letter of each word capitalized, and the
     * rest of the letters lowercase.
     * @param {string} str - string - The string to be swapped.
     * @returns the string with the first letter of each word capitalized.
     */
    public static swapCase(str: string): string {
        return str.replace(/ ([a-z]+ ) | ( [A-Z]+ )/g, (match, chr) => chr ? match.toUpperCase() : match.toLowerCase());
    }

    /**
     * It generates a random string of a given length, using a given set of characters, and if the
     * generated string is not strong enough, it generates another one
     * @param {number} length - number - The length of the password to generate
     * @param {string} [characters] - string =
     * "ascdefghijklmnopqrstuvwxyzABCDEFGHIJLMOPRSTUVWXYZ1234567890!$$%&?#*+~'"
     * @returns A string of length `length` that is a strong password.
     */
    public static generatePassword(length: number, characters?: string): string {
        characters = characters || "ascdefghijklmnopqrstuvwxyzABCDEFGHIJLMOPRSTUVWXYZ1234567890!§$%&?#*+~'";
        if (StringUtil.isWeakPassword([...new Set<string>(characters.split(""))].join(""))) throw new Error("Not enough characters to generate password");
        const result = StringUtil.randomString(length, characters);
        if (StringUtil.isStrongPassword(result)) return result;
        return StringUtil.generatePassword(length, characters);
    }

    /**
     * It returns a random color code in hexadecimal format.
     * @returns A random color code.
     */
    public static randomColorCode(): string {
        return `#${((new Uint32Array(1))[0] % 16777215).toString(16)}`;
    }

    /**
     * It returns the number of words in a string.
     * @param {string} str - string - The string to count the words in.
     * @returns The number of words in the string.
     */
    public static wordCount(str: string): number {
        if (typeof str !== 'string') { return -1; };
        const sus = str.match(/\b\w+\b/);
        if (!sus) { return 0; }
        return sus.length;
    }

    public static getRatingString(rate: number): string {
        return '★★★★★☆☆☆☆☆'.slice(5 - rate, 10 - rate);
    }

    /**
     * It replaces all line breaks with the lineEnd parameter.
     * @param {string} str - string - The string to normalize.
     * @param {string} [lineEnd] - The line ending to normalize to (defaults to \n).
     * @returns A string with all line breaks normalized to the specified lineEnd string, or the
     * default lineEnd string.
     */
    public static normalizeLineBreaks(str: string, lineEnd?: string): string {
        lineEnd = lineEnd || '\n';

        return str
            .replace(/\r\n/g, lineEnd)
            .replace(/\r/g, lineEnd)
            .replace(/\n/g, lineEnd);
    }

    /**
     * It returns true if the string contains the substring, otherwise it returns false
     * @param {string} str - The string to search in.
     * @param {string} substring - The substring to search for.
     * @param {number} fromIndex - The index at which to begin searching the String object. If omitted,
     * search starts at the beginning of the string.
     * @returns The index of the first occurrence of the specified substring, or -1 if there is no such
     * occurrence.
     */
    public static contains(str: string, substring: string, fromIndex: number): boolean {
        return str.indexOf(substring, fromIndex) !== -1;
    }

    /**
     * @param {string} str - string - The string to pad.
     * @param {number} minLen - The minimum length of the string.
     * @param {string} [ch] - The character to pad the string with.
     * @returns The string with the padding added to it.
     */
    public static rpad(str: string, minLen: number, ch?: string): string {
        ch = ch || ' ';
        return (str.length < minLen) ? str + ch.repeat(minLen - str.length) : str;
    }

    /**
     * @param {string} str - string - The string to pad.
     * @param {number} minLen - The minimum length of the string.
     * @param {string} [ch] - The character to pad the string with.
     * @returns The string with the padding.
     */
    public static lpad(str: string, minLen: number, ch?: string): string {
        ch = ch || ' ';
        return ((str.length < minLen) ? ch.repeat(minLen - str.length) + str : str);
    }

    /**
     * It takes a string, an offset, a removeCount, and a text, and returns a string.
     * @param {string} str - string - The string to be spliced.
     * @param {number} offset - The index of the string to start replacing at.
     * @param {number | undefined} removeCount - The amount of characters to remove from the string.
     * @param [text] - The text to insert into the string.
     * @returns The string with the text inserted at the offset.
     */
    public static spilce(str: string, offset: number, removeCount: number | undefined, text = ""): string {
        if (typeof str !== "string" || typeof offset !== 'number' || offset > str.length) return "";
        const calculatedOffset = offset < 0 ? StringUtil.length + offset : offset;
        return str.substring(0, calculatedOffset) + text + str.substring(calculatedOffset + (removeCount ? removeCount : 0));
    }

    /**
     * If the string is null, empty, or equal to an empty string, then it is empty
     * @param {string} str - string - The string to check if it's empty.
     * @returns a boolean value.
     */
    public static isEmpty(str: string): boolean {
        return (!str || str.length === 0 || str === "");
    }

    /**
     * It removes all the leading white spaces from a string.
     * @param {string} str - The string to be trimmed.
     * @returns The string with the leading whitespace removed.
     */
    public static ltrim(str: string): string {
        return str.replace(/^\s+/, "");
    }

    /**
     * It replaces all the spaces at the end of the string with nothing
     * @param {string} str - The string to trim.
     * @returns The string with the whitespace removed from the end.
     */
    public static rtrim(str: string): string {
        return str.replace(/\s+$/, "");
    }

    /**
     * It takes a string and replaces any lowercase letter followed by an uppercase letter with the
     * lowercase letter followed by a dash followed by the uppercase letter.
     * @param {string} str - string - The string to convert
     * @returns The string with the first letter lowercase.
     */
    public static camelToKebab(str: string) {
        return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    }

    /**
     * We take a string, convert it to lowercase, split it into an array, reverse the array, join the
     * array back into a string, and then compare the reversed string to the original string.
     * @param {string} str - string - the string to check if it's a palindrome
     * @returns A boolean value.
     */
    public static isPalindrome(str: string) {
        const lowerCaseStr = str.toLowerCase();
        const strArray = lowerCaseStr.split('');
        const reversedArray = strArray.reverse();
        const reversedStr = reversedArray.join('');
        return reversedStr === lowerCaseStr;
    }
}