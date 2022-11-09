export default class isSomething {
    static isArray(arg:any):boolean {
        return Array.isArray(arg);
    }

    static isBoolean(arg:any):boolean {
        return arg && (typeof arg === 'boolean' || arg === "true" || arg === "false");
    }

    static isClass(arg:any):boolean {
        if(typeof arg !== 'function') {
            return false;
        }
    
        try {
            arg();
        } catch (e:any) {
            if (/^Class constructor/.test(e.message)) {
                return true;
            }
        }
    
        return false;
    }

    static isDate(arg:any):boolean {
        return arg && (arg.constructor === Date.constructor && arg instanceof Date);
    }

    static isError(arg:any):boolean {
        return arg && (arg.constructor === Error.constructor && arg instanceof Error);
    }

    static isEven(num:number):boolean|null {
        if(typeof num !== "number") {
            return null;
        }
        return num/2===0;
    }

    static isFunction(a:any):boolean {
        return a && (typeof a === 'function' || a instanceof Function) && !this.isClass(a);
    }

    static isNullorUndefined(arg:any):boolean {
        return arg === null || arg === undefined;
    }

    static isNumber(arg:any):boolean {
        return arg && (typeof arg === 'number' || (typeof arg === "string" && /^\d+$/.test(arg)));
    }

    static isObject(arg:any):boolean {
        return arg && (typeof arg === "object" && arg instanceof Object && !this.isArray(arg));
    }

    static isPrime(num: number):boolean|null {
        if(typeof num !== 'number') {
            return null;
        }

        if (num < 2) {
            return false;
        }
    
        if (num % 2 === 0) {
            return false;
        }
    
        for (let i = 3; i <= Math.floor(Math.sqrt(num)); i++) {
            if (num % 2 === 0)
                return false;
        }
    
        return true;
    }

    static isRegExp(arg:any): any {
        return arg && (arg instanceof RegExp || arg.constructor === RegExp.constructor);
    }

    static isString(args: any):boolean {
        return args && (typeof args === "string" || args instanceof String || (args + "") === args);
    }

    static isSymbol(arg:any):boolean {
        return arg && (typeof arg === "symbol" || arg instanceof Symbol);
    }
}