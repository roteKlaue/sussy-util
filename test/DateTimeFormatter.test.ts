import DateTimeFormatter from '../src/Classes/DateTimeFormatter';
import IsSomething from '../src/Classes/IsSomething';

jest.mock('../src/Classes/IsSomething', () => ({
    isDate: jest.fn(),
    isDateValid: jest.fn(),
}));

describe('DateTimeFormatter', () => {
    describe('constructor and ofPattern', () => {
        it('should throw an error if the pattern is not a non-empty string', () => {
            // @ts-ignore
            expect(() => new DateTimeFormatter('')).toThrow('Pattern must be a non-empty string.');
            expect(() => DateTimeFormatter.ofPattern('')).toThrow('Pattern must be a non-empty string.');
        });

        it('should create a new instance with a valid pattern', () => {
            const formatter = DateTimeFormatter.ofPattern('YYYY-MM-DD');
            expect(formatter).toBeInstanceOf(DateTimeFormatter);
            expect(formatter.getPattern()).toBe('YYYY-MM-DD');
        });
    });

    describe('formatDate', () => {
        it('should throw an error if the date is invalid', () => {
            (IsSomething.isDate as unknown as jest.Mock).mockReturnValue(false);
            expect(() => {
                const formatter = DateTimeFormatter.ofPattern('YYYY-MM-DD');
                formatter.formatDate(new Date());
            }).toThrow('Invalid date object provided.');
        });

        it('should format the date based on the pattern', () => {
            (IsSomething.isDate as unknown as jest.Mock).mockReturnValue(true);
            (IsSomething.isDateValid as jest.Mock).mockReturnValue(true);

            const formatter = DateTimeFormatter.ofPattern('YYYY-MM-DD');
            const date = new Date(2023, 0, 5);
            const result = formatter.formatDate(date);
            expect(result).toBe('2023-01-05');
        });
    });

    describe('formatDateTime', () => {
        it('should throw an error if the date is invalid', () => {
            (IsSomething.isDate as unknown as jest.Mock).mockReturnValue(false);
            expect(() => {
                const formatter = DateTimeFormatter.ofPattern('YYYY-MM-DD HH:mm:ss');
                formatter.formatDateTime(new Date());
            }).toThrow('Invalid date object provided.');
        });

        it('should format the date and time based on the pattern', () => {
            (IsSomething.isDate as unknown as jest.Mock).mockReturnValue(true);
            (IsSomething.isDateValid as jest.Mock).mockReturnValue(true);

            const formatter = DateTimeFormatter.ofPattern('YYYY-MM-DD HH:mm:ss');
            const date = new Date(2023, 0, 5, 14, 30, 45);
            const result = formatter.formatDateTime(date);
            expect(result).toBe('2023-01-05 14:30:45');
        });
    });

    describe('parseDate', () => {
        it('should throw an error if the string is invalid', () => {
            const formatter = DateTimeFormatter.ofPattern('YYYY-MM-DD');
            expect(() => formatter.parseDate('invalid')).toThrow('Provided date string does not match the pattern.');
        });

        it('should parse the date string into a Date object', () => {
            const formatter = DateTimeFormatter.ofPattern('YYYY-MM-DD');
            const date = formatter.parseDate('2023-01-05');
            expect(date.getFullYear()).toBe(2023);
            expect(date.getMonth()).toBe(0);
            expect(date.getDate()).toBe(5);
        });
    });

    describe('parseTime', () => {
        it('should throw an error if the string is invalid', () => {
            const formatter = DateTimeFormatter.ofPattern('HH:mm:ss');
            expect(() => formatter.parseTime('invalid')).toThrow('Provided time string does not match the pattern for minutes/seconds.');
        });

        it('should parse the time string into hours, minutes, and seconds', () => {
            const formatter = DateTimeFormatter.ofPattern('HH:mm:ss');
            const time = formatter.parseTime('14:30:45');
            expect(time.hours).toBe(14);
            expect(time.minutes).toBe(30);
            expect(time.seconds).toBe(45);
        });
    });

    describe('parseDateTime', () => {
        it('should throw an error if the dateTime string is invalid', () => {
            const formatter = DateTimeFormatter.ofPattern('YYYY-MM-DD HH:mm:ss');
            expect(() => formatter.parseDateTime('invalid')).toThrow('Provided dateTime string does not match the pattern.');
        });

        it('should parse the dateTime string into a Date object', () => {
            const formatter = DateTimeFormatter.ofPattern('YYYY-MM-DD HH:mm:ss');
            const dateTime = formatter.parseDateTime('2023-01-05 14:30:45');
            expect(dateTime.getFullYear()).toBe(2023);
            expect(dateTime.getMonth()).toBe(0);
            expect(dateTime.getDate()).toBe(5);
            expect(dateTime.getHours()).toBe(14);
            expect(dateTime.getMinutes()).toBe(30);
            expect(dateTime.getSeconds()).toBe(45);
        });
    });
});
