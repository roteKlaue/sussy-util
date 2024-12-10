import { hasValue, objectToString } from '../Functions';
import { Constructor } from '../Types';

class IsSomething {
	private static instance: IsSomething = new IsSomething();
	private constructor() {}

	/**
     * If the argument is an array, return true, otherwise return false.
     * @param {any} arg - any
     * @returns a boolean value.
     */
	public isArray(arg: unknown): arg is Array<unknown> {
		return Array.isArray(arg) || objectToString(arg) === '[object Array]';
	}

	/**
     * If the argument is not null and is either a boolean or a string that is either "true" or
     * "false", then return true
     * @param {any} arg - any
     * @returns A boolean value.
     */
	public isBoolean(arg: unknown): arg is boolean {
		return !!arg && (typeof arg === 'boolean' || arg === 'true' || arg === 'false');
	}

	/**
     * If the argument is a function, try to call it. If it throws an error with the message "Class
     * constructor [class name] cannot be invoked without 'new'", then it's a class
     * @param {any} arg - any - The argument to check if it's a class.
     * @returns A boolean value.
     */
	public isClass(arg: unknown): arg is Constructor<any> {
		if (typeof arg !== 'function') {
			return false;
		}

		try {
			arg();
		} catch (e) {
			if (/^Class constructor/.test((e as Error).message)) {
				return true;
			}
		}

		return false;
	}

	/**
     * If the argument is an object, and it's constructor is the Date constructor, and it's an instance
     * of Date, then it's a Date
     * @param {any} arg - any
     * @returns The constructor of the Date object.
     */
	public isDate(arg: unknown): arg is Date {
		return !!arg && (arg.constructor === Date.constructor && arg instanceof Date);
	}

	/**
     * It returns true if the argument is not undefined
     * @param {any} arg - any
     * @returns The type of the argument.
     */
	public isDefined(arg: unknown): boolean {
		return typeof arg !== 'undefined';
	}

	/**
     * If the argument is not null or undefined, then it has a value
     * @param {any} arg - any
     * @returns The return value is a boolean.
     */
	public isEmpty(arg: unknown): boolean {
		return !hasValue(arg);
	}

	/**
     * If the argument is an object, and it's constructor is the Error constructor, and it's an instance
     * of Error, then it's an error
     * @param {any} arg - any
     * @returns The constructor of the Error object.
     */
	public isError(arg: unknown): arg is Error {
		return !!arg && (arg.constructor === Error.constructor && arg instanceof Error);
	}

	/**
     * If the input is a number, return true if the number is even, otherwise return false.
     * @param {number} num - number - This is the parameter that we are passing into the function.
     * @returns A function that takes a number and returns a boolean or null.
     */
	public isEven(num: number): boolean {
		return num / 2 === 0;
	}

	/**
     * If the object is a function, and it's not a class, then it's a function.
     * @param {any} a - any
     * @returns A boolean value.
     */
	public isFunction(a: unknown): a is Function {
		return !!a && (typeof a === 'function' || a instanceof Function) && !this.isClass(a);
	}

	/**
     * It returns true if the argument is either Infinity or -Infinity
     * @param {any} arg - any
     * @returns a boolean value.
     */
	public isInfinite(arg: unknown): boolean {
		return !!arg && (arg === Infinity || arg === -Infinity);
	}

	/**
     * If the argument is null or undefined, return true. Otherwise, return false
     * @param {any} arg - any
     * @returns The return value is a boolean.
     */
	public isNullorUndefined(arg: unknown): arg is null | undefined {
		return arg === null || arg === void 0;
	}

	/**
     * It returns true if the argument is a number or a string that contains only digits
     * @param {any} arg - any
     */
	public isNumber(arg: unknown): arg is number {
		return !!arg && (typeof arg === 'number' || (typeof arg === 'string' && /^\d+$/.test(arg)));
	}

	/**
     * If the argument is not null, and is an object, and is not an array, then return true.
     * @param {any} arg - any
     */
	public isObject(arg: unknown): arg is object {
		return !!arg && (typeof arg === 'object' && arg instanceof Object && !this.isArray(arg));
	}

	/**
     * If the number is less than 2, it's not prime. If it's even, it's not prime. If it's divisible by
     * any odd number up to the square root of the number, it's not prime. Otherwise, it's prime
     * @param {number} num - number - The number to check if it's prime.
     * @returns A boolean value.
     */
	public isPrime(num: number): boolean {
		if (num < 2) {
			return false;
		}

		if (num % 2 === 0) {
			return false;
		}

		for (let i = 3; i <= Math.floor(Math.sqrt(num)); i++) {
			if (num % i === 0)
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
	public isPrimitive(arg: unknown): arg is number | null | undefined | string | boolean | symbol {
		return this.isNullorUndefined(arg) || this.isString(arg) || this.isNumber(arg) || this.isBoolean(arg) || this.isSymbol(arg);
	}

	/**
     * If the argument is an instance of RegExp or the argument's constructor is the RegExp
     * constructor, then return true
     * @param {any} arg - any
     * @returns a boolean value.
     */
	public isRegExp(arg: unknown): arg is RegExp {
		return !!arg && (arg instanceof RegExp || arg.constructor === RegExp.constructor);
	}

	/**
     * It checks if the argument is a string, or if it's a number, it checks if it can be converted to
     * a string
     * @param {any} arg - any
     */
	public isString(arg: unknown): arg is string {
		return !!arg && (typeof arg === 'string' || arg instanceof String || (arg + '') === arg);
	}

	/**
     * If the argument is a symbol or an object that is an instance of the Symbol class, then return
     * true, otherwise return false.
     * @param {any} arg - any
     * @returns a boolean value.
     */
	public isSymbol(arg: unknown): arg is symbol {
		return !!arg && (typeof arg === 'symbol' || arg instanceof Symbol);
	}

	/**
     * This function returns true if the type of the argument is the same as the type passed in as a
     * parameter.
     * @param {any} arg - The argument to check the type of.
     * @param {String} type - The type of the argument.
     * @returns The type of the argument.
     */
	public isType(arg: unknown, type: string): boolean {
		return typeof arg === type;
	}

	/**
     * If the constructor is a class, return whether the value is an instance of the constructor.
     * @param {any} value - any - The value to check.
     * @param {Function} constructor - The constructor function to check against.
     * @returns The return value is a boolean.
     */
	public isInstanceOf(value: unknown, constructor: Function): boolean | null {
		if (!this.isClass(constructor)) return null;
		return value instanceof constructor;
	}

	/**
     * If the date is not a number, then it's not a valid date.
     * @param {Date} date - The date to check.
     * @returns The return value is a boolean.
     */
	public isDateValid(date: Date): boolean {
		return !isNaN(date.getTime());
	}

	public static getInstance(): IsSomething {
		return this.instance;
	}
}

export default IsSomething.getInstance();