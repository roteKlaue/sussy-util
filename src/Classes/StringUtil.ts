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

    generatePassword(length:number, run = 0):string {
        const result = this.randomString(length);
        if(run > 10) throw new Error("Not enough characters to generate password");
        if(StringUtil.isStrongPassword(result)) return result;
        return this.generatePassword(length, run + 1); 
    }
}