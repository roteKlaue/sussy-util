import DateUtil from '../src/Classes/DateUtil';

describe('DateUtil', () => {
	it('should return the current date', () => {
		const currentDate = DateUtil.getCurrentDate();
		expect(currentDate).toBeInstanceOf(Date);
		expect(currentDate.getTime()).toBeCloseTo(Date.now(), -2);
	});

	it('should return today\'s date with time set to midnight', () => {
		const today = DateUtil.today();
		expect(today.getHours()).toBe(0);
		expect(today.getMinutes()).toBe(0);
		expect(today.getSeconds()).toBe(0);
		expect(today.getMilliseconds()).toBe(0);
	});

	it('should return tomorrow\'s date', () => {
		const tomorrow = DateUtil.tomorrow();
		const today = DateUtil.today();
		today.setDate(today.getDate() + 1);
		expect(tomorrow.toDateString()).toBe(today.toDateString());
	});

	it('should return yesterday\'s date', () => {
		const yesterday = DateUtil.yesterday();
		const today = DateUtil.today();
		today.setDate(today.getDate() - 1);
		expect(yesterday.toDateString()).toBe(today.toDateString());
	});

	it('should correctly compare two dates', () => {
		const date1 = new Date('2023-01-01');
		const date2 = new Date('2023-01-02');
		expect(DateUtil.compareDates(date1, date2)).toBeLessThan(0);
		expect(DateUtil.compareDates(date2, date1)).toBeGreaterThan(0);
		expect(DateUtil.compareDates(date1, date1)).toBe(0);
	});

	it('should check if two dates are equal', () => {
		const date1 = new Date('2023-01-01');
		const date2 = new Date('2023-01-01');
		const date3 = new Date('2023-01-02');
		expect(DateUtil.equals(date1, date2)).toBe(true);
		expect(DateUtil.equals(date1, date3)).toBe(false);
	});

	it('should return month abbreviations and full names', () => {
		expect(DateUtil.getMonthAbbr(1)).toBe('feb');
		expect(DateUtil.getMonthFullName(1)).toBe('February');
	});

	it('should return day abbreviations and full names', () => {
		expect(DateUtil.getDayAbbr(0)).toBe('Mon');
		expect(DateUtil.getDayFullName(0)).toBe('Monday');
	});

	it('should check if a year is a leap year', () => {
		expect(DateUtil.isLeapYear(2020)).toBe(true);
		expect(DateUtil.isLeapYear(2021)).toBe(false);
	});

	it('should return first and last days of the week', () => {
		const firstDay = DateUtil.weekFirstDay();
		const lastDay = DateUtil.weekLastDay();
		expect(firstDay).toBeInstanceOf(Date);
		expect(lastDay).toBeInstanceOf(Date);
	});

	it('should return leap years in a given range', () => {
		const leapYears = DateUtil.leapYearsInRange(2000, 2020);
		expect(leapYears).toEqual([2000, 2004, 2008, 2012, 2016, 2020]);
	});

	it('should add days to a given date', () => {
		const date = new Date('2023-01-01');
		const result = DateUtil.addDays(date, 10);
		expect(result.toDateString()).toBe(new Date('2023-01-11').toDateString());
	});

	it('should calculate the difference in days between two dates', () => {
		const date1 = new Date('2023-01-01');
		const date2 = new Date('2023-01-10');
		expect(DateUtil.getDaysDiff(date1, date2)).toBe(9);
	});

	it('should check if a date is a weekend', () => {
		expect(DateUtil.isWeekend(new Date('2023-01-07'))).toBe(true); // Saturday
		expect(DateUtil.isWeekend(new Date('2023-01-09'))).toBe(false); // Monday
	});

	it('should format a date string', () => {
		const date = new Date('2023-01-01T12:34:56');
		expect(DateUtil.formatDate(date, 'YYYY-MM-DD')).toBe('2023-01-01');
		expect(DateUtil.formatDate(date, 'HH:mm:ss')).toBe('12:34:56');
	});
});
