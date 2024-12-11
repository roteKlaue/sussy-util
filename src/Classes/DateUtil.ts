import {MutableObject} from '../Types';

class DateUtil {
	private static readonly instance: DateUtil = new DateUtil();
	private static readonly monthAbrs: string[] = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];
	private static readonly mFullNames: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	private static readonly dayAbrs: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
	private static readonly dFullNames: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

	private constructor() { }

	/**
     * Returns a new Date object with the current date and time.
     * @returns {Date} A new Date object with the current date and time.
     */
	public getCurrentDate(): Date {
		return new Date(Date.now());
	}

	/**
     * Returns a new Date object with the time set to midnight.
     * @returns {Date} A Date object with the current date and time.
     */
	public today(): Date {
		const wash = this.getCurrentDate();
		wash.setHours(0, 0, 0, 0);
		return wash;
	}

	/**
     * Returns a new Date object that is set to tomorrow's date.
     * @returns {Date} A date object that is the current date plus one day.
     */
	public tomorrow(): Date {
		const today = this.today();
		today.setDate(today.getDate() + 1);
		return today;
	}

	/**
     * Returns a new Date object that is set to yesterday's date.
     * @returns {Date} A date object that is yesterday's date.
     */
	public yesterday(): Date {
		const today = this.today();
		today.setDate(today.getDate() - 1);
		return today;
	}

	/**
     * Compares two dates and returns the difference between them in milliseconds.
     * @param {T | number | Date} dt1 - The first date.
     * @param {T | number | Date} dt2 - The second date.
     * @returns {number} The difference between the two dates in milliseconds.
     */
	public compareDates<T extends Date>(dt1: T | number | Date, dt2: T | number | Date): number {
		dt1 = this.toDate(dt1);
		dt2 = this.toDate(dt2);
		return dt1.valueOf() - dt2.valueOf();
	}

	/**
     * Checks if two dates are equal.
     * @param {T | number | Date} dt1 - The first date.
     * @param {T | number | Date} dt2 - The second date.
     * @returns {boolean} True if the two dates are equal, false otherwise.
     */
	public equals<T extends Date>(dt1: T | number | Date, dt2: T | number | Date): boolean {
		dt1 = this.toDate(dt1);
		dt2 = this.toDate(dt2);
		return dt1.valueOf() === dt2.valueOf();
	}

	/**
     * Returns the month abbreviation for the given month number (1-12).
     * @param {number} number - The month number (1-12).
     * @returns {string} The month abbreviation.
     */
	public getMonthAbbr(number: number): string {
		return DateUtil.monthAbrs[number] ? DateUtil.monthAbrs[number] : '';
	}

	/**
     * Returns the full name of the month for the given month number (1-12).
     * @param {number} number - The month number (1-12).
     * @returns {string} The full name of the month.
     */
	public getMonthFullName(number: number): string {
		return DateUtil.mFullNames[number] ? DateUtil.mFullNames[number] : '';
	}

	/**
     * Returns the day abbreviation for the given day number (0-6, where 0 is Sunday).
     * @param {number} number - The day number (0-6).
     * @returns {string} The day abbreviation.
     */
	public getDayAbbr(number: number): string {
		return DateUtil.dayAbrs[number] ? DateUtil.dayAbrs[number] : '';
	}

	/**
     * Returns the full name of the day for the given day number (0-6, where 0 is Sunday).
     * @param {number} number - The day number (0-6).
     * @returns {string} The full name of the day.
     */
	public getDayFullName(number: number): string {
		return DateUtil.dFullNames[number] ? DateUtil.dFullNames[number] : '';
	}

	/**
     * Checks if a given year is a leap year.
     * @param {number} year - The year.
     * @returns {boolean} True if the year is a leap year, false otherwise.
     */
	public isLeapYear(year: number): boolean {
		return !(year % (year % 100 ? 4 : 400));
	}

	/**
     * It returns the first day of the week (Monday) based on the current date.
     * @returns The first day of the week.
     */
	public weekFirstDay(): Date {
		const nowDate = this.getCurrentDate();
		return new Date(nowDate.getDate() - (nowDate.getDay() - 1) * 86400000);
	}

	/**
     * It returns the last day of the week.
     * @returns The last day of the week.
     */
	public weekLastDay(): Date {
		const firstDay = this.weekFirstDay();
		return new Date((firstDay.getDate() / 1000 + 6 * 86400) * 1000);
	}

	/**
     * Returns an array of leap years between a start and end year (inclusive).
     * @param {number} startYear - The start year.
     * @param {number} endYear - The end year.
     * @returns {number[]} An array of leap years.
     */
	public leapYearsInRange(startYear: number, endYear: number): number[] {
		const sus = [];

		for (let i = startYear; i <= endYear; i++) {
			if (this.isLeapYear(i)) sus.push(i);
		}

		return sus;
	}

	/**
     * Returns the first day of the current month.
     * @returns {Date} A Date object representing the first day of the current month.
     */
	public getMonthFirstDay(): Date {
		const nowDate = this.getCurrentDate();
		return new Date(nowDate.getFullYear(), nowDate.getMonth());
	}

	/**
     * Returns the last day of the current month.
     * @returns {Date} A Date object representing the last day of the current month.
     */
	public getMonthLastDay(): Date {
		const nowDate = this.getCurrentDate();
		return new Date(new Date(nowDate.getFullYear(), nowDate.getMonth() + 1).valueOf() - 86400000);
	}

	/**
     * Converts the input to a Date object.
     * @param {T | number | Date} input - The input value.
     * @returns {Date} A Date object.
     */
	public toDate<T extends Date>(input: T | number): Date {
		if (typeof input === 'number') {
			return new Date(input);
		}
		return input;
	}

	/**
     * If date1 is before date2, return true, else return false.
     * @param {T | number | Date} date1 - T | number | Date
     * @param {T | number | Date} date2 - T | number | Date
     * @returns A boolean value.
     */
	public isAfter<T extends Date>(date1: T | number | Date, date2: T | number | Date): boolean {
		date1 = this.toDate(date1);
		date2 = this.toDate(date2);
		return date1.getTime() < date2.getTime();
	}

	/**
     * If date1 is before date2, return true, else return false.
     * @param {number | Date} date1 - T | number | Date
     * @param {number | Date} date2 - T | number | Date
     * @returns A boolean value.
     */
	public isBefore<T extends Date>(date1: T | number | Date, date2: T | number | Date): boolean {
		date1 = this.toDate(date1);
		date2 = this.toDate(date2);
		return date1.getTime() > date2.getTime();
	}

	/**
     * This function takes a number of years and returns the number of months in that number of years.
     * @param {number} years - number
     * @returns The number of months in the given number of years.
     */
	public yearsToMonths(years: number): number {
		return Math.floor(years * 12);
	}

	/**
     * Checks if a given date falls on a weekend (Saturday or Sunday).
     * @param {T | number | Date} dt - The date to check.
     * @returns {boolean} True if the date falls on a weekend, false otherwise.
     */
	public isWeekend<T extends Date>(dt: T | number | Date): boolean {
		const date = this.toDate(dt);
		const day = date.getDay();
		return day === 0 || day === 6;
	}

	/**
     * Calculates the difference in days between two dates.
     * @param {T | number | Date} dt1 - The first date.
     * @param {T | number | Date} dt2 - The second date.
     * @returns {number} The difference in days between the two dates.
     */
	public getDaysDiff<T extends Date>(dt1: T | number | Date, dt2: T | number | Date): number {
		const date1 = this.toDate(dt1);
		const date2 = this.toDate(dt2);
		const diffTime = date2.getTime() - date1.getTime();
		return Math.ceil(diffTime / (1000 * 3600 * 24));
	}

	/**
     * Adds the specified number of days to a given date.
     * @param {T | number | Date} dt - The date to add days to.
     * @param {number} days - The number of days to add.
     * @returns {Date} The resulting date after adding the specified number of days.
     */
	public addDays<T extends Date>(dt: T | number | Date, days: number): Date {
		const date = this.toDate(dt);
		date.setDate(date.getDate() + days);
		return date;
	}

	/**
     * Formats a given date object into a string representation using the specified format.
     * @param {number | Date} dt - The date object to format.
     * @param {string} format - The format string. (e.g., 'YYYY-MM-DD')
     * @returns {string} The formatted date string.
     */
	public formatDate<T extends Date>(dt: T | number | Date, format: string): string {
		const date = this.toDate(dt);
		const formatTokens = {
			YYYY: date.getFullYear().toString(),
			MM: String(date.getMonth() + 1).padStart(2, '0'),
			DD: String(date.getDate()).padStart(2, '0'),
			HH: String(date.getHours()).padStart(2, '0'),
			mm: String(date.getMinutes()).padStart(2, '0'),
			ss: String(date.getSeconds()).padStart(2, '0')
		} as MutableObject<string>;

		let formattedDate = format;
		for (const token in formatTokens) {
			formattedDate = formattedDate.replace(token, formatTokens[token]);
		}

		return formattedDate;
	}

	/**
     * Returns the current timestamp in milliseconds.
     * @returns {number} The current timestamp in milliseconds.
     */
	public getCurrentTimestamp(): number {
		return Date.now();
	}

	public static getInstance(): DateUtil {
		return this.instance;
	}
}

export default DateUtil.getInstance();