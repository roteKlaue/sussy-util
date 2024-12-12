import ImmutableClass from '../src/Classes/ImmutableClass';

describe('ImmutableClass', () => {
	class TestClass extends ImmutableClass<TestClass> {
		#value = 42;

		constructor() {
			super(
				TestClass,
				[['value', () => this.#value]],
				[['displayValue', () => `Value: ${this.#value}`]]
			);
		}
	}

	Object.freeze(TestClass.prototype);

	it('should define immutable properties', () => {
		const testInstance = new TestClass();

		// @ts-ignore - testing immutability
		expect(testInstance.value).toBe(42);
		expect(() => {
			// @ts-ignore - testing immutability
			testInstance.value = 100;
		}).toThrow('You cannot overwrite this property with another.');
	});

	it('should define immutable methods', () => {
		const testInstance = new TestClass();

		// @ts-ignore - testing immutability
		expect(testInstance.displayValue()).toBe('Value: 42');
		expect(() => {
			// @ts-ignore - testing immutability
			testInstance.displayValue = () => 'New Value';
		}).toThrow('You cannot overwrite this function with another.');
	});

	it('should throw an error when extending ImmutableClass', () => {
		class InvalidClass extends TestClass { }

		expect(() => new InvalidClass()).toThrow('You cannot extend this class with another class.');
	});

	it('should prevent prototype modification', () => {
		expect(() => {
			// Attempting to add properties to the prototype
			// @ts-ignore - testing immutability
			TestClass.prototype.newMethod = () => 'This should not work';
		}).toThrow();
	});
});
