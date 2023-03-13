import { AbstractClass, IsSomething } from ".";

export default abstract class DateUtil extends AbstractClass {
    private static monthAbrs: string[] = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];
    private static mFullNames: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    private static dayAbrs: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    private static dFullNames: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    constructor() {
        super(DateUtil);
    }

    /**
     * It returns a new Date object with the current date and time.
     * @returns A new Date object with the current date and time.
     */
    private static getCurrentDate(): Date {
        return new Date(Date.now());
    }

    /**
     * This function returns a new Date object with the time set to midnight.
     * @returns A date object with the current date and time.
     */
    public static today(): Date {
        const wash = this.getCurrentDate();
        wash.setHours(0, 0, 0, 0);
        return wash;
    }

    /**
     * It returns a new Date object that is set to tomorrow's date
     * @returns A date object that is the current date plus one day.
     */
    public static tomorrow(): Date {
        const today = this.today();
        today.setDate(today.getDate() + 1);
        return today;
    }

    /**
     * It returns a new Date object that is set to yesterday's date
     * @returns A date object that is yesterday's date.
     */
    public static yesterday(): Date {
        const today = this.today();
        today.setDate(today.getDate() - 1);
        return today;
    }

    /**
     * It takes two dates and returns a number that is the difference between the two dates
     * @param {T | number | Date} dt1 - T | number | Date
     * @param {T | number | Date} dt2 - T | number | Date
     * @returns The difference between the two dates in milliseconds.
     */
    public static compareDates<T extends Date>(dt1: T | number | Date, dt2: T | number | Date): number {
        dt1 = this.toDate(dt1);
        dt2 = this.toDate(dt2);
        return dt1.valueOf() - dt2.valueOf();
    }

    /**
     * If the two dates are the same, return true, otherwise return false.
     * @param {T | number | Date} dt1 - T | number | Date
     * @param {T | number | Date} dt2 - T | number | Date
     * @returns A boolean value.
     */
    public static equals<T extends Date>(dt1: T | number | Date, dt2: T | number | Date): boolean {
        dt1 = this.toDate(dt1);
        dt2 = this.toDate(dt2);
        return dt1.valueOf() === dt2.valueOf();
    }

    /**
     * It returns the month abbreviation for the given number.
     * @param {number} number - number - The number of the month you want to get the abbreviation for.
     * @returns The month abbreviation for the given number.
     */
    public static getMonthAbbr(number: number): string {
        if (typeof number !== 'number') throw new TypeError("expected number for number");
        return this.monthAbrs[number] ? this.monthAbrs[number] : "";
    }

    /**
     * If the number is a number, return the month name, otherwise return an empty string.
     * @param {number} number - number - The number of the month you want to get the full name of.
     * @returns The full name of the month.
     */
    public static getMonthFullName(number: number): string {
        if (typeof number !== 'number') throw new TypeError("expected number for number");
        return this.mFullNames[number] ? this.mFullNames[number] : "";
    }

    /**
     * If the number is a number and the number is in the array, return the day abbreviation, otherwise
     * return an empty string.
     * @param {number} number - number - The number of the day you want to get the abbreviation for.
     * @returns The day abbreviation for the given number.
     */
    public static getDayAbbr(number: number): string {
        if (typeof number !== 'number') throw new TypeError("expected number for number");
        return this.dayAbrs[number] ? this.dayAbrs[number] : "";
    }

    /**
     * If the number is a number, return the day name, otherwise return an empty string.
     * @param {number} number - number - The number of the day you want to get the full name of.
     * @returns The day full name.
     */
    public static getDayFullName(number: number): string {
        if (typeof number !== 'number') throw new TypeError("expected number for number");
        return this.dFullNames[number] ? this.dFullNames[number] : "";
    }

    /**
     * If the year is not divisible by 4, then it is a common year. Otherwise, if the year is not
     * divisible by 100, then it is a leap year. Otherwise, if the year is not divisible by 400, then
     * it is a common year. Otherwise, it is a leap year.
     * @param {number} year - number
     * @returns The remainder of the year divided by 4, or 400.
     */
    public static isLeapYear(year: number): boolean {
        if (typeof year !== 'number') throw new TypeError("expected number for year");
        return !(year % (year % 100 ? 4 : 400));
    }

    /**
     * It returns the first day of the week (Monday) based on the current date.
     * @returns The first day of the week.
     */
    public static weekFirstDay(): Date {
        const nowDate = this.getCurrentDate();
        return new Date(nowDate.getDate() - (nowDate.getDay() - 1) * 86400000);
    }

    /**
     * It returns the last day of the week.
     * @returns The last day of the week.
     */
    public static weekLastDay(): Date {
        const firstDay = this.weekFirstDay();
        return new Date((firstDay.getDate() / 1000 + 6 * 86400) * 1000);
    }

    /**
     * Given a start year and an end year, return an array of all the leap years between them.
     * @param {number} start - number - The start year
     * @param {number} endYear - The end year of the range.
     * @returns An array of leap years between the start and end year.
     */
    public static leapYearsInRange(start: number, endYear: number): number[] {
        if (typeof start !== 'number' || typeof endYear !== 'number') throw new TypeError("expected number for start and endYear");
        const sus = [];

        for (let i = start; i <= endYear; i++) {
            if (this.isLeapYear(i)) sus.push(i);
        }

        return sus;
    }

    /**
     * Get the first day of the current month.
     * @returns A new Date object with the current year and month.
     */
    public static getMonthFirstDay(): Date {
        const nowDate = this.getCurrentDate();
        return new Date(nowDate.getFullYear(), nowDate.getMonth());
    }

    /**
     * It returns the last day of the current month.
     * @returns The last day of the current month.
     */
    public static getMonthLastDay(): Date {
        const nowDate = this.getCurrentDate();
        return new Date(new Date(nowDate.getFullYear(), nowDate.getMonth() + 1).valueOf() - 86400000);
    }

    /** @deprecated */
    public static formatRelative(date1: Date, date2: Date, format: string): string {
        if (!IsSomething.isInstanceOf(date1, Date) || !IsSomething.isInstanceOf(date2, Date)) throw new TypeError("date1 and date2 have to be of type Date.");
        return new Intl.RelativeTimeFormat(format).format((date1.getTime() - date2.getTime()) / 1000, "seconds");
    }

    /**
     * If the input is a number, return a new Date object with the number as the constructor argument.
     * Otherwise, return the input as a Date object.
     * </code>
     * @param {T | Number} date - T | Number
     * @returns A Date object.
     */
    public static toDate<T extends Date>(date: T | Number): Date {
        if (typeof date === "number") {
            return new Date(date);
        }
        return date as Date;
    }

    /**
     * If date1 is before date2, return true, else return false.
     * @param {T | number | Date} date1 - T | number | Date
     * @param {T | number | Date} date2 - T | number | Date
     * @returns A boolean value.
     */
    public static isAfter<T extends Date>(date1: T | number | Date, date2: T | number | Date): boolean {
        date1 = this.toDate(date1);
        date2 = this.toDate(date2);
        return date1.getTime() < date2.getTime();
    }

    /**
     * If date1 is before date2, return true, else return false.
     * @param {T | number | Date} date1 - T | number | Date
     * @param {T | number | Date} date2 - T | number | Date
     * @returns A boolean value.
     */
    public static isBefore<T extends Date>(date1: T | number | Date, date2: T | number | Date): boolean {
        date1 = this.toDate(date1);
        date2 = this.toDate(date2);
        return date1.getTime() > date2.getTime();
    }

    /**
     * This function takes a number of years and returns the number of months in that number of years.
     * @param {number} years - number
     * @returns The number of months in the given number of years.
     */
    public static yearsToMonths(years: number): number {
        return Math.floor(years * 12);
    }
}