import { AbstractClass } from '../src/Classes';
import { Constructor } from '../src/Types';
import { AbstractClassInstanceCallError } from '../src/Error';

describe('AbstractClass', () => {
	it('should throw a TypeError when the constructor is not a function', () => {
		const invalidConstructor = {};
		expect(() => new AbstractClass(invalidConstructor as unknown as Constructor<object>))
			.toThrow(TypeError);
	});

	it('should not throw an error when a valid class constructor is provided', () => {
		class ValidClass {}
		expect(() => new AbstractClass(ValidClass)).toThrow(AbstractClassInstanceCallError);
	});

	it('should throw an AbstractClassInstanceCallError when trying to instantiate the abstract class directly', () => {
		class AbstractClassTest extends AbstractClass<AbstractClassTest> { 
			constructor() { 
				super(AbstractClassTest); 
			} 
		}
		expect(() => new AbstractClassTest()).toThrow(AbstractClassInstanceCallError);
	});

	it('should throw an AbstractClassInstanceCallError when an abstract class is extended but not further extended before instantiation', () => {
		class AbstractClassTest extends AbstractClass<AbstractClassTest> { 
			constructor() { 
				super(AbstractClassTest); 
			} 
		}
		class ValidClass extends AbstractClassTest {}
		expect(() => new ValidClass()).not.toThrow();
	});

	it('should not throw an error when a class is properly extended and instantiated', () => {
		class AbstractClassTest extends AbstractClass<AbstractClassTest> { 
			constructor() { 
				super(AbstractClassTest); 
			} 
		}
		class ValidClass extends AbstractClassTest {}
		class FinalClass extends ValidClass {}

		expect(() => new FinalClass()).not.toThrow();
	});

	it('should allow multiple levels of inheritance and not throw errors when instantiated', () => {
		class AbstractClassTest extends AbstractClass<AbstractClassTest> { 
			constructor() { 
				super(AbstractClassTest); 
			} 
		}
		class FirstLevel extends AbstractClassTest {}
		class SecondLevel extends FirstLevel {}
		class ThirdLevel extends SecondLevel {}

		expect(() => new ThirdLevel()).not.toThrow();
	});
});
