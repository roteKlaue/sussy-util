import { hasValue, objectToString } from "../allFunctions";
import { AbstractClass } from "../allClasses";

export default abstract class IsSomething extends AbstractClass {
    // TODO: Documentation
    constructor() {
        super(IsSomething);
    }

    public static isArray(arg: any): boolean {
        return Array.isArray(arg) || objectToString(arg) === "[object Array]";
    }

    public static isBoolean(arg: any): boolean {
        return arg && (typeof arg === 'boolean' || arg === "true" || arg === "false");
    }

    public static isClass(arg: any): boolean {
        if (typeof arg !== 'function') {
            return false;
        }

        try {
            arg();
        } catch (e: any) {
            if (/^Class constructor/.test(e.message)) {
                return true;
            }
        }

        return false;
    }

    public static isDate(arg: any): boolean {
        return arg && (arg.constructor === Date.constructor && arg instanceof Date);
    }

    public static isDefined(arg: any): boolean {
        return typeof arg !== 'undefined';
    }

    public static isEmpty(arg: any): boolean {
        return !hasValue(arg);
    }

    public static isError(arg: any): boolean {
        return arg && (arg.constructor === Error.constructor && arg instanceof Error);
    }

    public static isEven(num: number): boolean | null {
        if (typeof num !== "number") {
            return null;
        }
        return num / 2 === 0;
    }

    public static isFunction(a: any): boolean {
        return a && (typeof a === 'function' || a instanceof Function) && !this.isClass(a);
    }

    public static isInfinite(arg: any): boolean {
        return arg && (arg === Infinity || arg === -Infinity);
    }

    public static isNullorUndefined(arg: any): boolean {
        return arg === null || arg === undefined;
    }

    public static isNumber(arg: any): boolean {
        return arg && (typeof arg === 'number' || (typeof arg === "string" && /^\d+$/.test(arg)));
    }

    public static isObject(arg: any): boolean {
        return arg && (typeof arg === "object" && arg instanceof Object && !this.isArray(arg));
    }

    public static isPrime(num: number): boolean | null {
        if (typeof num !== 'number') {
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

    public static isPrimitive(arg: any): boolean {
        return this.isNullorUndefined(arg) || this.isString(arg) || this.isNumber(arg) || this.isBoolean(arg) || this.isSymbol(arg);
    }

    public static isRegExp(arg: any): boolean {
        return arg && (arg instanceof RegExp || arg.constructor === RegExp.constructor);
    }

    public static isString(args: any): boolean {
        return args && (typeof args === "string" || args instanceof String || (args + "") === args);
    }

    public static isSymbol(arg: any): boolean {
        return arg && (typeof arg === "symbol" || arg instanceof Symbol);
    }

    public static isType(arg: any, type: String): boolean {
        return typeof arg === type;
    }

    public static isInstanceOf(value: any, constructor: Function): boolean | null {
        if (!this.isClass(constructor)) return null;
        return value instanceof constructor;
    }

    public static isDateValid(date: Date) {
        return !isNaN(date.getTime());
    }
}