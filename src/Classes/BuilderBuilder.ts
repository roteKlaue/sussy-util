import { Builder, Constructor, MutableObject } from '../Types';
import StringUtil from './StringUtil';

/**
 * A generic builder class that facilitates the construction of instances for a specified class
 * by setting attributes using fluent API-style method calls.
 * @template T - The type of class for which instances are built.
 */
class GenericBuilder<T extends object> implements Builder<T> {
	public constructorParams: { order: Array<string | string[]>, attributes: MutableObject<any> } = { order: [], attributes: {} };
	public attributes: Partial<T> = {};

	/**
     * Creates an instance of GenericBuilder.
     * @param {Constructor<T>} ClassType - The constructor function of the class for which instances will be built.
     * @param {string} Type - The type of builder to create, either "constructorReading" or "objectPropertyReading".
     */
	public constructor(readonly ClassType: Constructor<T>, readonly Type: string) {
		Type === 'objectPropertyReading' ? this.createSettersProperties() : this.createSettersSignature();
		Object.preventExtensions(this);
	}

	private interpretConstructor(input: string) {
		input = input.replace(/ /g, '');
		const result = [];
		const regex = /{([^}]*)}|([^,]+)/g;

		let match;

		while ((match = regex.exec(input)) !== null) {
			if (match[1]) {
				const groupContent = match[1].split(',').map(item => item.trim());
				result.push(groupContent);
			} else if (match[2]) {
				result.push(match[2].trim());
			}
		}
		return result;
	}

	private createSettersProperties() {
		for (const key in new this.ClassType()) {
			const methodName = `set${StringUtil.capitalize(key)}`;
			const method = (value: T[keyof T]) => {
				this.attributes[key as keyof T] = value;
				return this;
			};
			this.defineMethod(methodName, method);
		}
	}

	private createSettersSignature() {
		const classSignature = this.ClassType.toString();
		const parameterNames = classSignature.match(/\(([^)]*)\)/);
		if (parameterNames == null) throw new Error('No constructor found.');
		this.constructorParams.order = this.interpretConstructor(parameterNames[0].substring(1, parameterNames[0].length - 1));

		for (let i = 0; i < this.constructorParams.order.length; i++) {
			if (Array.isArray(this.constructorParams.order[i])) {
				this.constructorParams.attributes[`param${i}`] = {};
				this.constructorParams.attributes[`param${i}`].length = this.constructorParams.order[i].length;

				for (let j = 0; j < this.constructorParams.order[i].length; j++) {
					const propName = this.constructorParams.order[i][j];
					const methodName = `setParam${i}${StringUtil.capitalize(propName)}`;
					const method = (value: any) => {
						this.constructorParams.attributes[`param${i}`][propName] = value;
						return this;
					};

					this.defineMethod(methodName, method);
				}
				continue;
			}

			const propName = this.constructorParams.order[i] as string;
			const methodName = `set${StringUtil.capitalize(propName)}`;
			const method = (value: any) => {
				this.constructorParams.attributes[propName] = value;
				return this;
			};
			this.defineMethod(methodName, method);
		}
	}

	private defineMethod(name: string, method: Function) {
		Object.defineProperty(this, name, {
			get: () => method,
			set(_value) {
				throw new Error('You cannot overwrite this property with another.');
			}
		});
	}

	/**
     * Build and return an instance of the specified class type with the attributes set using the builder methods.
     * @returns {T} - An instance of the specified class type with attributes set.
     */
	public build(): T {
		Object.freeze(this.attributes);
		if (this.Type === 'objectPropertyReading') {
			return Object.assign(new this.ClassType(), this.attributes);
		}
		return new this.ClassType(...this.constructorParams.order.map((e, i) => {
			if (Array.isArray(e)) {
				return this.constructorParams.attributes[`param${i}`];
			}
			return this.constructorParams.attributes[e];
		}));
	}
}

/**
 * A builder for creating instances of the GenericBuilder class, allowing construction of instances
 * of a specified class using fluent API-style method calls.
 * @template T - The type of class for which instances are built using the GenericBuilder.
 */
export default class BuilderBuilder<T extends {}> implements Builder<Constructor<GenericBuilder<T>>> {
	/**
     * Creates an instance of the BuilderBuilder.
     * @param {Function} ClassType - The constructor of the target class for which a builder is to be generated.
     * @param {string} CreationType - Specifies the method used for creating the builder:
     *   - "constructorReading": Parses instance variables based on the constructor's signature.
     *     * IMPORTANT: The constructor must be the first function in the class.
     *   - "objectPropertyReading": Generates setters based on the class's properties.
     *     * IMPORTANT: The target class's constructor should work with no properties given.
     */
	constructor(readonly ClassType: Constructor<T>, readonly CreationType: 'constructorReading' | 'objectPropertyReading' = 'objectPropertyReading') { }

	/**
     * Builds and returns a constructor for a generic builder class associated with the target class.
     * @returns {Constructor<GenericBuilder<T>>} A constructor function for the generic builder class.
     */
	public build(): Constructor<GenericBuilder<T>> {
		return GenericBuilder.bind(GenericBuilder, this.ClassType, this.CreationType) as Constructor<GenericBuilder<T>>;
	}
}
