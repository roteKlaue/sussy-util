import { DataConverter } from '../src/Classes';

describe('DataConverter', () => {
	describe('csvToJson', () => {
		it('should convert a simple CSV string to JSON', () => {
			const csv = 'name,age,city\nJohn,30,New York\nJane,25,Los Angeles';
			const expected = [
				{ name: 'John', age: 30, city: 'New York' },
				{ name: 'Jane', age: 25, city: 'Los Angeles' }
			];

			const result = DataConverter.csvToJson(csv);
			expect(result).toEqual(expected);
		});

		it('should handle boolean values in the CSV', () => {
			const csv = 'name,active\nJohn,true\nJane,false';
			const expected = [
				{ name: 'John', active: true },
				{ name: 'Jane', active: false }
			];

			const result = DataConverter.csvToJson(csv);
			expect(result).toEqual(expected);
		});
	});

	describe('jsonToCsv', () => {
		it('should convert a simple JSON array to CSV', () => {
			const json = [
				{ name: 'John', age: 30, city: 'New York' },
				{ name: 'Jane', age: 25, city: 'Los Angeles' }
			];
			const expected = 'name,age,city\nJohn,30,New York\nJane,25,Los Angeles';

			const result = DataConverter.jsonToCsv(json);
			expect(result).toEqual(expected);
		});

		it('should handle nested objects in the JSON', () => {
			const json = [
				{ name: 'John', details: { age: 30, city: 'New York' } }
			];
			const expected = 'name,details\nJohn,{\"age\":30,\"city\":\"New York\"}';

			const result = DataConverter.jsonToCsv(json);
			expect(result).toEqual(expected);
		});

		it('should handle boolean values in the JSON', () => {
			const json = [
				{ name: 'John', active: true },
				{ name: 'Jane', active: false }
			];
			const expected = 'name,active\nJohn,true\nJane,false';

			const result = DataConverter.jsonToCsv(json);
			expect(result).toEqual(expected);
		});
	});

	describe('Round-trip conversions', () => {
		it('should convert CSV to JSON and back to the same CSV', () => {
			const csv = 'name,age,city\nJohn,30,New York\nJane,25,Los Angeles';
			const json = DataConverter.csvToJson(csv);
			const resultCsv = DataConverter.jsonToCsv(json);

			expect(resultCsv).toEqual(csv);
		});

		it('should convert JSON to CSV and back to the same JSON', () => {
			const json = [
				{ name: 'John', age: 30, city: 'New York' },
				{ name: 'Jane', age: 25, city: 'Los Angeles' }
			];
			const csv = DataConverter.jsonToCsv(json);
			const resultJson = DataConverter.csvToJson(csv);

			expect(resultJson).toEqual(json);
		});
	});
});
