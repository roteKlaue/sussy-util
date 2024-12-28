import IsSomething from "./IsSomething";

export default class DateTimeFormatter {
    public readonly pattern: string;

    private constructor(pattern: string) {
        if (typeof pattern !== 'string' || !pattern.trim()) {
            throw new Error('Pattern must be a non-empty string.');
        }

        this.pattern = pattern;
    }

    /**
     * Creates a new DateTimeFormatter instance with the provided pattern.
     * @param {string} pattern - The pattern to use for formatting and parsing dates/times.
     * @returns {DateTimeFormatter} A new instance of DateTimeFormatter.
     * @throws {Error} Throws an error if the pattern is not a non-empty string.
     */
    public static ofPattern = (pattern: string): DateTimeFormatter => {
        if (typeof pattern !== 'string' || !pattern.trim()) {
            throw new Error('Pattern must be a non-empty string.');
        }
        return new DateTimeFormatter(pattern);
    };

    /**
     * Gets the pattern used by this formatter.
     * @returns {string} The pattern string.
     */
    public getPattern = (): string => this.pattern;

    /**
     * Formats the date portion (YYYY, MM, DD) of a given Date object.
     * @param {Date} date - The date object to format.
     * @returns {string} The formatted date string.
     * @throws {Error} Throws an error if the provided date is invalid.
     */
    public formatDate = (date: Date): string => {
        if (!IsSomething.isDate(date) || !IsSomething.isDateValid(date)) {
            throw new Error('Invalid date object provided.');
        }

        let formatted: string = this.pattern;

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        formatted = formatted.replace(/YYYY/g, String(year));
        formatted = formatted.replace(/MM/g, month);
        formatted = formatted.replace(/DD/g, day);

        return formatted;
    };

    /**
     * Formats both the date and time based on the pattern.
     * @param {Date} date - The date object to format.
     * @returns {string} The formatted date-time string.
     * @throws {Error} Throws an error if the provided date is invalid.
     */
    public formatDateTime = (date: Date): string => {
        if (!IsSomething.isDate(date) || !IsSomething.isDateValid(date)) {
            throw new Error('Invalid date object provided.');
        }

        let formatted: string = this.pattern;

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        formatted = formatted.replace(/YYYY/g, String(year));
        formatted = formatted.replace(/MM/g, month);
        formatted = formatted.replace(/DD/g, day);

        const has12Hour = /hh/.test(this.pattern);
        const has24Hour = /HH/.test(this.pattern);

        let hours24 = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        if (has12Hour) {
            const amPm = hours24 >= 12 ? 'PM' : 'AM';

            const hours12 = hours24 % 12 || 12;
            const hoursStr = String(hours12).padStart(2, '0');

            formatted = formatted.replace(/hh/g, hoursStr);

            if (/A/.test(this.pattern)) {
                formatted = formatted.replace(/A/g, amPm);
            }
            if (/a/.test(this.pattern)) {
                formatted = formatted.replace(/a/g, amPm.toLowerCase());
            }
        }


        if (has24Hour) {
            const hoursStr = String(hours24).padStart(2, '0');
            formatted = formatted.replace(/HH/g, hoursStr);
        }


        formatted = formatted.replace(/mm/g, minutes);
        formatted = formatted.replace(/ss/g, seconds);

        return formatted;
    };

    /**
     * Parses a date string based on the formatter's pattern.
     * @param {string} dateString - The date string to parse.
     * @returns {Date} The parsed Date object.
     * @throws {Error} Throws an error if the string is invalid or the pattern is incorrect.
     */
    public parseDate = (dateString: string): Date => {
        if (typeof dateString !== 'string' || !dateString.trim()) {
            throw new Error('Date string must be a non-empty string.');
        }

        const yearIndex = this.pattern.indexOf('YYYY');
        const monthIndex = this.pattern.indexOf('MM');
        const dayIndex = this.pattern.indexOf('DD');

        if (yearIndex < 0 || monthIndex < 0 || dayIndex < 0) {
            throw new Error('Cannot parse date - pattern must include YYYY, MM, and DD tokens.');
        }


        const year = parseInt(dateString.substring(yearIndex, yearIndex + 4), 10);
        const month = parseInt(dateString.substring(monthIndex, monthIndex + 2), 10) - 1;
        const day = parseInt(dateString.substring(dayIndex, dayIndex + 2), 10);

        if (isNaN(year) || isNaN(month) || isNaN(day)) {
            throw new Error('Provided date string does not match the pattern.');
        }

        const parsedDate = new Date(year, month, day);

        if (
            parsedDate.getFullYear() !== year ||
            parsedDate.getMonth() !== month ||
            parsedDate.getDate() !== day
        ) {
            throw new Error('Invalid date components - out of range.');
        }

        return parsedDate;
    };

    /**
     * Parses a time string based on the formatter's pattern.
     * @param {string} timeString - The time string to parse.
     * @returns {Object} An object containing hours, minutes, and seconds.
     * @throws {Error} Throws an error if the string is invalid or the pattern is incorrect.
     */
    public parseTime = (timeString: string): { hours: number; minutes: number; seconds: number } => {
        if (typeof timeString !== 'string' || !timeString.trim()) {
            throw new Error('Time string must be a non-empty string.');
        }

        const has24Hour = /HH/.test(this.pattern);
        const has12Hour = /hh/.test(this.pattern);

        let amPmPart = '';
        let baseTimeString = timeString;

        if ((/A/.test(this.pattern) || /a/.test(this.pattern)) && has12Hour) {
            const match = timeString.match(/^(.+?)(AM|PM|am|pm)$/);
            if (match) {
                baseTimeString = match[1].trim();
                amPmPart = match[2].toUpperCase();
            }
        }

        const parts = baseTimeString.split(':');
        if (parts.length !== 3) {
            throw new Error('Provided time string does not match the pattern for minutes/seconds.');
        }


        let [hoursStr, minutesStr, secondsStr] = parts;
        let hours = parseInt(hoursStr, 10);
        const minutes = parseInt(minutesStr, 10);
        const seconds = parseInt(secondsStr, 10);

        if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
            throw new Error('Provided time string does not match the pattern for minutes/seconds.');
        }
        if (minutes < 0 || minutes > 59 || seconds < 0 || seconds > 59) {
            throw new Error('Time components out of range.');
        }

        if (has24Hour) {
            if (hours < 0 || hours > 23) {
                throw new Error('Invalid 24-hour format in time string.');
            }
        } else if (has12Hour) {
            if (amPmPart === 'AM' && hours === 12) {
                hours = 0;
            } else if (amPmPart === 'PM' && hours < 12) {
                hours += 12;
            }
            if (hours < 0 || hours > 23) {
                throw new Error('Invalid 12-hour format in time string.');
            }
        }

        return { hours, minutes, seconds };
    };

    /**
     * Parses a combined date-time string based on the formatter's pattern.
     * @param {string} dateTimeString - The date-time string to parse.
     * @returns {Date} The parsed Date object.
     * @throws {Error} Throws an error if the string is invalid or the pattern is incorrect.
     */
    public parseDateTime = (dateTimeString: string): Date => {
        if (typeof dateTimeString !== 'string' || !dateTimeString.trim()) {
            throw new Error('DateTime string must be a non-empty string.');
        }

        const datePart = this.extractPart(dateTimeString, 'YYYY', 'DD');
        const timePart = this.extractPart(dateTimeString, 'HH', 'ss')
            || this.extractPart(dateTimeString, 'hh', 'ss');


        if (!datePart || !timePart) {
            throw new Error('Provided dateTime string does not match the pattern.');
        }

        const tempDate = this.parseDate(datePart);
        const { hours, minutes, seconds } = this.parseTime(timePart);

        tempDate.setHours(hours, minutes, seconds, 0);
        return tempDate;
    };

    /**
     * Extracts a substring from the given dateTime string based on tokens.
     * @private
     * @param {string} dateTimeString - The full dateTime string.
     * @param {'YYYY' | 'HH' | 'hh'} startToken - The starting token for extraction.
     * @param {'DD' | 'ss'} endToken - The ending token for extraction.
     * @returns {string|null} The extracted substring, or null if tokens are not found.
     */
    private extractPart = (
        dateTimeString: string,
        startToken: 'YYYY' | 'HH' | 'hh',
        endToken: 'DD' | 'ss'
    ): string | null => {
        if (!this.pattern.includes(startToken) || !this.pattern.includes(endToken)) {
            return null;
        }

        const startIndex = this.pattern.indexOf(startToken);
        const endIndex = this.pattern.indexOf(endToken) + endToken.length;

        if (startIndex < 0 || endIndex < 0) {
            return null;
        }

        return dateTimeString.substring(startIndex, endIndex);
    };
}
