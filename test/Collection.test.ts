import Collection from '../src/Classes/Collection';

describe('Collection', () => {
	let collection: Collection<string, string>;

	beforeEach(() => {
		collection = new Collection();
		collection.set('key1', 'value1');
		collection.set('key2', 'value2');
	});

	test('remove should remove an entry and return it as Optional', () => {
		const removed = collection.remove('key1');
		expect(removed.isPresent()).toBe(true);
		expect(removed.get()).toEqual({ key: 'key1', value: 'value1' });
		expect(collection.has('key1')).toBe(false);
	});

	test('remove should return empty Optional if key does not exist', () => {
		const removed = collection.remove('nonExistentKey');
		expect(removed.isPresent()).toBe(false);
	});

	test('toString should return a string representation', () => {
		expect(collection.toString()).toBe('Collection([{"key":"key1","value":"value1"},{"key":"key2","value":"value2"}])');
	});

	test('toArray should return an array of key-value pairs', () => {
		expect(collection.toArray()).toEqual([
			{ key: 'key1', value: 'value1' },
			{ key: 'key2', value: 'value2' },
		]);
	});

	test('count should return the number of entries', () => {
		expect(collection.count()).toBe(2);
	});

	test('missing should return true if the key does not exist', () => {
		expect(collection.missing('nonExistentKey')).toBe(true);
	});

	test('toJSONString should return JSON string of the collection', () => {
		expect(collection.toJSONString()).toBe('[{"key":"key1","value":"value1"},{"key":"key2","value":"value2"}]');
	});

	test('contains should check if a value exists', () => {
		expect(collection.contains('value1')).toBe(true);
		expect(collection.contains('value3')).toBe(false);
	});

	test('merge should merge another map into the collection', () => {
		const otherMap = new Map([
			['key3', 'value3'],
			['key4', 'value4'],
		]);
		collection.merge(otherMap);
		expect(collection.count()).toBe(4);
		expect(collection.get('key3')).toBe('value3');
	});

	test('filter should return a new Collection with filtered entries', () => {
		const filtered = collection.filter((_, key) => key === 'key1');
		expect(filtered.count()).toBe(1);
		expect(filtered.get('key1')).toBe('value1');
	});

	test('mapValues should transform values and return a new Collection', () => {
		const transformed = collection.mapValues(value => value.toUpperCase());
		expect(transformed.get('key1')).toBe('VALUE1');
		expect(transformed.get('key2')).toBe('VALUE2');
	});

	test('mapArray should return an array of transformed values', () => {
		const result = collection.mapArray((value, key) => `${key}:${value}`);
		expect(result).toEqual(['key1:value1', 'key2:value2']);
	});

	test('reduce should reduce the collection to a single value', () => {
		const result = collection.reduce((acc, value) => acc + value, '');
		expect(result).toBe('value1value2');
	});

	test('every should return true if all entries satisfy the predicate', () => {
		expect(collection.every(value => value.startsWith('value'))).toBe(true);
		expect(collection.every(value => value === 'value1')).toBe(false);
	});

	test('some should return true if any entry satisfies the predicate', () => {
		expect(collection.some(value => value === 'value1')).toBe(true);
		expect(collection.some(value => value === 'value3')).toBe(false);
	});

	test('find should return the first entry satisfying the predicate as Optional', () => {
		const found = collection.find(value => value === 'value1');
		expect(found.isPresent()).toBe(true);
		expect(found.get()).toEqual(['key1', 'value1']);
	});

	test('find should return empty Optional if no entry satisfies the predicate', () => {
		const found = collection.find(value => value === 'value3');
		expect(found.isPresent()).toBe(false);
	});

	test('getOptional should return an Optional containing the value if key exists', () => {
		const optional = collection.getOptional('key1');
		expect(optional.isPresent()).toBe(true);
		expect(optional.get()).toBe('value1');
	});

	test('getOptional should return empty Optional if key does not exist', () => {
		const optional = collection.getOptional('nonExistentKey');
		expect(optional.isPresent()).toBe(false);
	});

	test('keyOf should return an Optional containing the key if value exists', () => {
		const key = collection.keyOf('value1');
		expect(key.isPresent()).toBe(true);
		expect(key.get()).toBe('key1');
	});

	test('keyOf should return empty Optional if value does not exist', () => {
		const key = collection.keyOf('value3');
		expect(key.isPresent()).toBe(false);
	});
});
