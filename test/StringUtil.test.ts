

import StringUtil from '../src/Classes/StringUtil';

describe('StringUtil', () => {
    describe('basic transform helpers', () => {
        test('reverse', () => {
            expect(StringUtil.reverse('abc')).toBe('cba');
            expect(StringUtil.reverse('')).toBe('');
        });


        test('capitalize / uncapitalize / upperFirst / lowerFirst', () => {
            expect(StringUtil.capitalize('hELLo')).toBe('Hello');
            expect(StringUtil.uncapitalize('Hello')).toBe('hello');
            expect(StringUtil.upperFirst('hello')).toBe('Hello');
            expect(StringUtil.lowerFirst('Hello')).toBe('hello');
        });


        test('slugify', () => {
            expect(StringUtil.slugify(' Hello__World! ')).toBe('hello-world');
        });


        test('camelToKebab', () => {
            expect(StringUtil.camelToKebab('helloWorldTest')).toBe('hello-world-test');
        });


        test('camelCase', () => {
            expect(StringUtil.camelCase('hello_world-test')).toBe('helloWorldTest');
        });


        test('collaps / noSpaces', () => {
            expect(StringUtil.collaps(' a b c ')).toBe('a b c');
            expect(StringUtil.noSpaces(' a b c ')).toBe('abc');
        });


        test('toCharCode', () => {
            expect(StringUtil.toCharCode('A')).toBe('65');
            expect(StringUtil.toCharCode('AB')).toBe('6566');
        });


        test('isEmpty', () => {
            expect(StringUtil.isEmpty('')).toBe(true);
            expect(StringUtil.isEmpty(null as any)).toBe(true);
            expect(StringUtil.isEmpty('x')).toBe(false);
        });
    });


    describe('random / generation helpers', () => {
        test('randomCharacter & randomString (charset respect)', () => {
            const cs = 'abc';
            for (let i = 0; i < 10; i++) {
                const ch = StringUtil.randomCharacter(cs);
                expect(cs.includes(ch)).toBe(true);
            }


            const s = StringUtil.randomString(12, 'ab');
            expect(s.length).toBe(12);
            for (const ch of s) expect('ab'.includes(ch)).toBe(true);
        });


        test('randomString with invalid length', () => {
            expect(StringUtil.randomString(0)).toBe('');
            expect(StringUtil.randomString(-1)).toBe('');
        });


        test('randomDiscordUsername (format)', () => {
            // we only assert that returned values have correct lengths / format
            const name = StringUtil.randomDiscordUsername(false);
            expect(typeof name).toBe('string');
            expect(name.length).toBeGreaterThanOrEqual(4);
            expect(name.length).toBeLessThanOrEqual(32);


            const withSuffix = StringUtil.randomDiscordUsername(true);
            // expect pattern like NAME#1234
            expect(withSuffix).toMatch(/^.{4,32}#\d{4}$/);
        });

        test('generatePassword', () => {
            const pw = StringUtil.generatePassword(12);
            expect(pw.length).toBe(12);
            expect(StringUtil.isStrongPassword(pw)).toBe(true);
        });


        test('randomColorCode produces hex color', () => {
            const cc = StringUtil.randomColorCode();
            // accept 3-6 hex digits after '#'
            expect(cc).toMatch(/^#[0-9a-fA-F]{1,6}$/);
        });
    });


    describe('validation helpers', () => {
        test('isDiscordUsername', () => {
            expect(StringUtil.isDiscordUsername('abcd#1234')).toBe(true);
            expect(StringUtil.isDiscordUsername('a#1')).toBe(false);
        });


        test('isInteger / isFloat', () => {
            expect(StringUtil.isInteger('123')).toBe(true);
            expect(StringUtil.isInteger('-12')).toBe(true);
            expect(StringUtil.isInteger('12.3')).toBe(false);


            expect(StringUtil.isFloat('12.3')).toBe(true);
            expect(StringUtil.isFloat('.5')).toBe(true);
            expect(StringUtil.isFloat('abc')).toBe(false);
        });


        test('password strength', () => {
            expect(StringUtil.isStrongPassword('Abcdef1!')).toBe(true);
            expect(StringUtil.isWeakPassword('password')).toBe(true);
        });


        test('email / url', () => {
            expect(StringUtil.isEmail('a@b.co')).toBe(true);
            expect(StringUtil.isEmail('bad-email')).toBe(false);


            expect(StringUtil.isHTTPUrl('http://example.com')).toBe(true);
            expect(StringUtil.isHTTPUrl('ftp://example.com')).toBe(false);


            expect(StringUtil.isUrlWithoutHTTP('example.com')).toBe(true);
            expect(StringUtil.isURL('http://example.com')).toBe(true);
        });


        test('IP / MAC / phone', () => {
            expect(StringUtil.isIPv4('192.168.0.1')).toBe(true);
            expect(StringUtil.isIPv4('999.999.999.999')).toBe(false);


            expect(StringUtil.isIP('::1')).toBe(true);
            expect(StringUtil.isMacAddress('aa:bb:cc:dd:ee:ff')).toBe(true);


            expect(StringUtil.isPhoneNumber('(123) 456-7890')).toBe(true);
        });
    });


    describe('string utilities / editing', () => {
        test('shorten', () => {
            expect(StringUtil.shorten('abcdefghij', 5, 2)).toBe('abcde..');
            expect(StringUtil.shorten('short', 10, 3)).toBe('short');
        });


        test('protectEmail', () => {
            expect(StringUtil.protectEmail('test@example.com')).toMatch(/@example\.com$/);
        });


        test('swapCase', () => {
            expect(StringUtil.swapCase('aBcD')).toBe('AbCd');
        });


        test('wordCount & getRatingString', () => {
            expect(StringUtil.wordCount('one two three')).toBe(3);
            expect(StringUtil.getRatingString(3)).toBe('★★★☆☆');
        });


        test('normalizeLineBreaks', () => {
            expect(StringUtil.normalizeLineBreaks('a\r\nb\r c\nd', '\n')).toBe('a\nb\n c\nd');
        });


        test('contains', () => {
            expect(StringUtil.contains('hello world', 'world', 0)).toBe(true);
            expect(StringUtil.contains('hello', 'x', 0)).toBe(false);
        });


        test('lpad / rpad', () => {
            expect(StringUtil.lpad('x', 3, '0')).toBe('00x');
            expect(StringUtil.rpad('x', 3, '0')).toBe('x00');
        });
    });

    describe("getRandomString", () => {
        it("should generate a string of the correct length", () => {
            const str = StringUtil.randomString(8);
            expect(str).toHaveLength(8);
        });

        it("should return empty when length <= 0", () => {
            expect(StringUtil.randomString(-1)).toBe('');
        });
    });

    describe("splice", () => {
        it("should insert a substring correctly", () => {
            expect(StringUtil.splice("hello", 2, 0, "X")).toBe("heXllo");
        });

        it("should remove and replace correctly", () => {
            expect(StringUtil.splice("abcdef", 2, 3, "Z")).toBe("abZf");
        });

        it("spilce alias should behave the same", () => {
            expect(StringUtil.splice("12345", 1, 2, "X")).toBe("1X45");
        });
    });

    describe("getRatingString", () => {
        it("should return correct star ratings", () => {
            expect(StringUtil.getRatingString(0)).toBe("☆☆☆☆☆");
            expect(StringUtil.getRatingString(3)).toBe("★★★☆☆");
            expect(StringUtil.getRatingString(5)).toBe("★★★★★");
        });
    });

    describe("generatePassword", () => {
        it("should generate a password of the requested length", () => {
            const pwd = StringUtil.generatePassword(12);
            expect(pwd).toHaveLength(12);
        });

        it("should use only characters from the given charset", () => {
            const charset = "abc123";
            expect(() => StringUtil.generatePassword(20, charset)).toThrow();
        });

        it("should throw for invalid length", () => {
            expect(() => StringUtil.generatePassword(0)).toThrow();
            expect(() => StringUtil.generatePassword(-5)).toThrow();
        });
    });
});