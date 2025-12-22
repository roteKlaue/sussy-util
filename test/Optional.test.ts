import { Optional } from '../src/Classes';

describe('Optional', () => {
	it('should return an empty Optional', () => {
		const emptyOptional = Optional.empty<number>();
		expect(emptyOptional.isPresent()).toBe(false);
		expect(emptyOptional.get()).toBeUndefined();
	});

	it('should create an Optional with a value', () => {
		const optional = Optional.of(42);
		expect(optional.isPresent()).toBe(true);
		expect(optional.get()).toBe(42);
	});

	it('should create an empty Optional when of is called with undefined', () => {
		const optional = Optional.of(undefined);
		expect(optional.isPresent()).toBe(false);
		expect(optional.get()).toBeUndefined();
	});

	it('should return the value when get is called and the value is present', () => {
		const optional = Optional.of('test');
		expect(optional.get()).toBe('test');
	});

	it('should return undefined when get is called and the value is not present', () => {
		const optional = Optional.empty<string>();
		expect(optional.get()).toBeUndefined();
	});

	it('should return the value when orElse is called and the value is present', () => {
		const optional = Optional.of(42);
		expect(optional.orElse(100)).toBe(42);
	});

	it('should return the default value when orElse is called and the value is not present', () => {
		const optional = Optional.empty<number>();
		expect(optional.orElse(100)).toBe(100);
	});

	it('should map the value to a new Optional when map is called and the value is present', () => {
		const optional = Optional.of(42);
		const mappedOptional = optional.map(x => x * 2);
		expect(mappedOptional.isPresent()).toBe(true);
		expect(mappedOptional.get()).toBe(84);
	});

	it('should return an empty Optional when map is called and the value is not present', () => {
		const optional = Optional.empty<number>();
		const mappedOptional = optional.map(x => x * 2);
		expect(mappedOptional.isPresent()).toBe(false);
		expect(mappedOptional.get()).toBeUndefined();
	});

	it('should execute the consumer function when ifPresent is called and the value is present', () => {
		const consumer = jest.fn();
		const optional = Optional.of('test');
		optional.ifPresent(consumer);
		expect(consumer).toHaveBeenCalledWith('test');
	});

	it('should not execute the consumer function when ifPresent is called and the value is not present', () => {
		const consumer = jest.fn();
		const optional = Optional.empty<string>();
		optional.ifPresent(consumer);
		expect(consumer).not.toHaveBeenCalled();
	});

	it('should return an Optional with the value when filter is called and the value passes the predicate', () => {
		const optional = Optional.of(42);
		const filteredOptional = optional.filter(x => x > 40);
		expect(filteredOptional.isPresent()).toBe(true);
		expect(filteredOptional.get()).toBe(42);
	});

	it('should return an empty Optional when filter is called and the value does not pass the predicate', () => {
		const optional = Optional.of(42);
		const filteredOptional = optional.filter(x => x > 50);
		expect(filteredOptional.isPresent()).toBe(false);
		expect(filteredOptional.get()).toBeUndefined();
	});
});
