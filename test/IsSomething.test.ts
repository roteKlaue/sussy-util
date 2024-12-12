import { IsSomething } from "../src/Classes";

describe('IsSomething', () => {
    const isSomething = IsSomething;

    it('should identify arrays', () => {
        expect(isSomething.isArray([1, 2, 3])).toBe(true);
        expect(isSomething.isArray('not an array')).toBe(false);
    });

    it('should identify booleans', () => {
        expect(isSomething.isBoolean(true)).toBe(true);
        expect(isSomething.isBoolean('true')).toBe(true);
        expect(isSomething.isBoolean('not boolean')).toBe(false);
    });

    it('should identify classes', () => {
        class Test {}
        expect(isSomething.isClass(Test)).toBe(true);
        expect(isSomething.isClass(() => {})).toBe(false);
    });

    it('should identify dates', () => {
        expect(isSomething.isDate(new Date())).toBe(true);
        expect(isSomething.isDate('not a date')).toBe(false);
    });

    it('should check if a value is defined', () => {
        expect(isSomething.isDefined(undefined)).toBe(false);
        expect(isSomething.isDefined(null)).toBe(true);
        expect(isSomething.isDefined(0)).toBe(true);
    });

    it('should check if a value is empty', () => {
        expect(isSomething.isEmpty(null)).toBe(true);
        expect(isSomething.isEmpty('')).toBe(true);
        expect(isSomething.isEmpty(0)).toBe(false);
    });

    it('should identify errors', () => {
        expect(isSomething.isError(new Error('error'))).toBe(true);
        expect(isSomething.isError('not an error')).toBe(false);
    });

    it('should identify even numbers', () => {
        expect(isSomething.isEven(4)).toBe(true);
        expect(isSomething.isEven(3)).toBe(false);
    });

    it('should identify functions', () => {
        const func = () => {};
        expect(isSomething.isFunction(func)).toBe(true);
        expect(isSomething.isFunction('not a function')).toBe(false);
    });

    it('should identify infinite values', () => {
        expect(isSomething.isInfinite(Infinity)).toBe(true);
        expect(isSomething.isInfinite(-Infinity)).toBe(true);
        expect(isSomething.isInfinite(42)).toBe(false);
    });

    it('should check if a value is null or undefined', () => {
        expect(isSomething.isNullorUndefined(null)).toBe(true);
        expect(isSomething.isNullorUndefined(undefined)).toBe(true);
        expect(isSomething.isNullorUndefined(0)).toBe(false);
    });

    it('should identify numbers', () => {
        expect(isSomething.isNumber(42)).toBe(true);
        expect(isSomething.isNumber('42')).toBe(true);
        expect(isSomething.isNumber('not a number')).toBe(false);
    });

    it('should identify objects', () => {
        expect(isSomething.isObject({})).toBe(true);
        expect(isSomething.isObject([])).toBe(false);
        expect(isSomething.isObject(null)).toBe(false);
    });

    it('should identify prime numbers', () => {
        expect(isSomething.isPrime(7)).toBe(true);
        expect(isSomething.isPrime(4)).toBe(false);
        expect(isSomething.isPrime(1)).toBe(false);
    });

    it('should identify primitive values', () => {
        expect(isSomething.isPrimitive(42)).toBe(true);
        expect(isSomething.isPrimitive('string')).toBe(true);
        expect(isSomething.isPrimitive(Symbol('s'))).toBe(true);
        expect(isSomething.isPrimitive({})).toBe(false);
    });

    it('should identify regular expressions', () => {
        expect(isSomething.isRegExp(/regex/)).toBe(true);
        expect(isSomething.isRegExp('not a regex')).toBe(false);
    });

    it('should identify strings', () => {
        expect(isSomething.isString('string')).toBe(true);
        expect(isSomething.isString(42)).toBe(false);
    });

    it('should identify symbols', () => {
        expect(isSomething.isSymbol(Symbol('s'))).toBe(true);
        expect(isSomething.isSymbol('not a symbol')).toBe(false);
    });

    it('should check type matches', () => {
        expect(isSomething.isType(42, 'number')).toBe(true);
        expect(isSomething.isType('string', 'string')).toBe(true);
        expect(isSomething.isType({}, 'object')).toBe(true);
        expect(isSomething.isType(42, 'string')).toBe(false);
    });

    it('should identify instances of a class', () => {
        class Test {}
        const instance = new Test();
        expect(isSomething.isInstanceOf(instance, Test)).toBe(true);
        expect(isSomething.isInstanceOf({}, Test)).toBe(false);
    });

    it('should validate dates', () => {
        expect(isSomething.isDateValid(new Date())).toBe(true);
        expect(isSomething.isDateValid(new Date('invalid date'))).toBe(false);
    });
});
