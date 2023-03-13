import { hasValue, objectToString } from "../Functions";
import { AbstractClass } from ".";

export default abstract class IsSomething extends AbstractClass {
    // TODO: Documentation
    constructor() {
        super(IsSomething);
    }

    /**
     * If the argument is an array, return true, otherwise return false.
     * @param {any} arg - any
     * @returns a boolean value.
     */
    public static isArray(arg: any): boolean {
        return Array.isArray(arg) || objectToString(arg) === "[object Array]";
    }

    /**
     * If the argument is not null and is either a boolean or a string that is either "true" or
     * "false", then return true
     * @param {any} arg - any
     * @returns A boolean value.
     */
    public static isBoolean(arg: any): boolean {
        return arg && (typeof arg === 'boolean' || arg === "true" || arg === "false");
    }

    /**
     * If the argument is a function, try to call it. If it throws an error with the message "Class
     * constructor [class name] cannot be invoked without 'new'", then it's a class
     * @param {any} arg - any - The argument to check if it's a class.
     * @returns A boolean value.
     */
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

    /**
     * If the argument is an object and it's constructor is the Date constructor and it's an instance
     * of Date, then it's a Date
     * @param {any} arg - any
     * @returns The constructor of the Date object.
     */
    public static isDate(arg: any): boolean {
        return arg && (arg.constructor === Date.constructor && arg instanceof Date);
    }

    /**
     * It returns true if the argument is not undefined
     * @param {any} arg - any
     * @returns The type of the argument.
     */
    public static isDefined(arg: any): boolean {
        return typeof arg !== 'undefined';
    }

    /**
     * If the argument is not null or undefined, then it has a value
     * @param {any} arg - any
     * @returns The return value is a boolean.
     */
    public static isEmpty(arg: any): boolean {
        return !hasValue(arg);
    }

    /**
     * If the argument is an object and it's constructor is the Error constructor and it's an instance
     * of Error, then it's an error
     * @param {any} arg - any
     * @returns The constructor of the Error object.
     */
    public static isError(arg: any): boolean {
        return arg && (arg.constructor === Error.constructor && arg instanceof Error);
    }

    /**
     * If the input is a number, return true if the number is even, otherwise return false.
     * @param {number} num - number - This is the parameter that we are passing into the function.
     * @returns A function that takes a number and returns a boolean or null.
     */
    public static isEven(num: number): boolean | null {
        if (typeof num !== "number") {
            return null;
        }
        return num / 2 === 0;
    }

    /**
     * If the object is a function, and it's not a class, then it's a function.
     * @param {any} a - any
     * @returns A boolean value.
     */
    public static isFunction(a: any): boolean {
        return a && (typeof a === 'function' || a instanceof Function) && !IsSomething.isClass(a);
    }

    /**
     * It returns true if the argument is either Infinity or -Infinity
     * @param {any} arg - any
     * @returns a boolean value.
     */
    public static isInfinite(arg: any): boolean {
        return arg && (arg === Infinity || arg === -Infinity);
    }

    /**
     * If the argument is null or undefined, return true. Otherwise, return false
     * @param {any} arg - any
     * @returns The return value is a boolean.
     */
    public static isNullorUndefined(arg: any): boolean {
        return arg === null || arg === void 0;
    }

    /**
     * It returns true if the argument is a number or a string that contains only digits
     * @param {any} arg - any
     */
    public static isNumber(arg: any): boolean {
        return arg && (typeof arg === 'number' || (typeof arg === "string" && /^\d+$/.test(arg)));
    }

    /**
     * If the argument is not null, and is an object, and is not an array, then return true.
     * @param {any} arg - any
     */
    public static isObject(arg: any): boolean {
        return arg && (typeof arg === "object" && arg instanceof Object && !IsSomething.isArray(arg));
    }

    /**
     * If the number is less than 2, it's not prime. If it's even, it's not prime. If it's divisible by
     * any odd number up to the square root of the number, it's not prime. Otherwise, it's prime
     * @param {number} num - number - The number to check if it's prime.
     * @returns A boolean value.
     */
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

    /**
     * If the argument is null, undefined, a string, a number, a boolean, or a symbol, then return
     * true, otherwise return false.
     * @param {any} arg - any
     * @returns A boolean value.
     */
    public static isPrimitive(arg: any): boolean {
        return IsSomething.isNullorUndefined(arg) || IsSomething.isString(arg) || IsSomething.isNumber(arg) || IsSomething.isBoolean(arg) || IsSomething.isSymbol(arg);
    }

    /**
     * If the argument is an instance of RegExp or the argument's constructor is the RegExp
     * constructor, then return true
     * @param {any} arg - any
     * @returns a boolean value.
     */
    public static isRegExp(arg: any): boolean {
        return arg && (arg instanceof RegExp || arg.constructor === RegExp.constructor);
    }

    /**
     * It checks if the argument is a string, or if it's a number, it checks if it can be converted to
     * a string
     * @param {any} args - any
     */
    public static isString(args: any): boolean {
        return args && (typeof args === "string" || args instanceof String || (args + "") === args);
    }

    /**
     * If the argument is a symbol or an object that is an instance of the Symbol class, then return
     * true, otherwise return false.
     * @param {any} arg - any
     * @returns a boolean value.
     */
    public static isSymbol(arg: any): boolean {
        return arg && (typeof arg === "symbol" || arg instanceof Symbol);
    }

    /**
     * This function returns true if the type of the argument is the same as the type passed in as a
     * parameter.
     * @param {any} arg - The argument to check the type of.
     * @param {String} type - The type of the argument.
     * @returns The type of the argument.
     */
    public static isType(arg: any, type: String): boolean {
        return typeof arg === type;
    }

    /**
     * If the constructor is a class, return whether the value is an instance of the constructor.
     * @param {any} value - any - The value to check.
     * @param {Function} constructor - The constructor function to check against.
     * @returns The return value is a boolean.
     */
    public static isInstanceOf(value: any, constructor: Function): boolean | null {
        if (!IsSomething.isClass(constructor)) return null;
        return value instanceof constructor;
    }

    /**
     * If the date is not a number, then it's not a valid date.
     * @param {Date} date - The date to check.
     * @returns The return value is a boolean.
     */
    public static isDateValid(date: Date) {
        return !isNaN(date.getTime());
    }
}