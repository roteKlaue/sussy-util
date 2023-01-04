import { AbstractClass, IsSomething } from "../allClasses";

export default abstract class DateUtil extends AbstractClass {
    // TODO: Documentation
    private static monthAbrs: string[] = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];
    private static mFullNames: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    private static dayAbrs: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    private static dFullNames: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    constructor() {
        super(DateUtil);
    }

    private static getCurrentDate(): Date {
        return new Date(Date.now());
    }

    public static today(): Date {
        const wash = this.getCurrentDate();
        wash.setHours(0, 0, 0, 0);
        return wash;
    }

    public static tomorrow(): Date {
        const today = this.today();
        today.setDate(today.getDate() + 1);
        return today;
    }

    public static yesterday(): Date {
        const today = this.today();
        today.setDate(today.getDate() - 1);
        return today;
    }

    public static compareDates<T extends Date>(dt1: T | number | Date, dt2: T | number | Date): number {
        dt1 = this.toDate(dt1);
        dt2 = this.toDate(dt2);
        return dt1.valueOf() - dt2.valueOf();
    }

    public static equals<T extends Date>(dt1: T | number | Date, dt2: T | number | Date): boolean {
        dt1 = this.toDate(dt1);
        dt2 = this.toDate(dt2);
        return dt1.valueOf() === dt2.valueOf();
    }

    public static getMonthAbbr(number: number): string {
        if (typeof number !== 'number') throw new TypeError("expected number for number");
        return this.monthAbrs[number] ? this.monthAbrs[number] : "";
    }

    public static getMonthFullName(number: number): string {
        if (typeof number !== 'number') throw new TypeError("expected number for number");
        return this.mFullNames[number] ? this.mFullNames[number] : "";
    }

    public static getDayAbbr(number: number): string {
        if (typeof number !== 'number') throw new TypeError("expected number for number");
        return this.dayAbrs[number] ? this.dayAbrs[number] : "";
    }

    public static getDayFullName(number: number): string {
        if (typeof number !== 'number') throw new TypeError("expected number for number");
        return this.dFullNames[number] ? this.dFullNames[number] : "";
    }

    public static isLeapYear(year: number): boolean {
        if (typeof year !== 'number') throw new TypeError("expected number for year");
        return !(year % (year % 100 ? 4 : 400));
    }

    public static weekFirstDay(): Date {
        const nowDate = this.getCurrentDate();
        return new Date(nowDate.getDate() - (nowDate.getDay() - 1) * 86400000);
    }

    public static weekLastDay(): Date {
        const firstDay = this.weekFirstDay();
        return new Date((firstDay.getDate() / 1000 + 6 * 86400) * 1000);
    }

    public static leapYearsInRange(start: number, endYear: number): number[] {
        if (typeof start !== 'number' || typeof endYear !== 'number') throw new TypeError("expected number for start and endYear");
        const sus = [];

        for (let i = start; i <= endYear; i++) {
            if (this.isLeapYear(i)) sus.push(i);
        }

        return sus;
    }

    public static getMonthFirstDay(): Date {
        const nowDate = this.getCurrentDate();
        return new Date(nowDate.getFullYear(), nowDate.getMonth());
    }

    public static getMonthLastDay(): Date {
        const nowDate = this.getCurrentDate();
        return new Date(new Date(nowDate.getFullYear(), nowDate.getMonth() + 1).valueOf() - 86400000);
    }

    public static formatRelative(date1: Date, date2: Date, format: string): string {
        if (!IsSomething.isInstanceOf(date1, Date) || !IsSomething.isInstanceOf(date2, Date)) throw new TypeError("date1 and date2 have to be of type Date.");
        return new Intl.RelativeTimeFormat(format).format((date1.getTime() - date2.getTime()) / 1000, "seconds");
    }

    public static toDate<T extends Date>(date: T | Number): Date {
        if (typeof date === "number") {
            return new Date(date);
        }
        return date as Date;
    }

    public static isAfter<T extends Date>(date1: T | number | Date, date2: T | number | Date): boolean {
        date1 = this.toDate(date1);
        date2 = this.toDate(date2);
        return date1.getTime() < date2.getTime();
    }

    public static isBefore<T extends Date>(date1: T | number | Date, date2: T | number | Date): boolean {
        date1 = this.toDate(date1);
        date2 = this.toDate(date2);
        return date1.getTime() > date2.getTime();
    }

    public static yearsToMonths(years: number): number {
        return Math.floor(years * 12);
    }
}