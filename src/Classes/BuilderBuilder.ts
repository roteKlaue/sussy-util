import { Builder, Constructor } from '../Types';
import StringUtil from './StringUtil';

type AnyFunction<Args extends unknown[] = unknown[], Return = unknown> = (...args: Args) => Return;

/**
 * A builder for creating instances of the `GenericBuilder` class,
 * allowing construction of instances of a specified class using fluent API-style method calls.
 *
 * @template T - The type of the class for which a builder is to be generated.
 * @template Mode - The mode for the builder: 'constructorReading' or 'objectPropertyReading'.
 */
export default class BuilderBuilder<
  T extends object,
  Mode extends 'constructorReading' | 'objectPropertyReading' = 'objectPropertyReading',
> implements Builder<Constructor<GenericBuilder<T, Mode>>> {
  /**
   * Creates an instance of the BuilderBuilder.
   * @param {Function} ClassType - The constructor of the target class for which a builder is to be generated.
   * @param {Mode} [CreationType='objectPropertyReading'] - Specifies the method used for creating the builder:
   *   - "constructorReading": Parses instance variables based on the constructor's signature.
   *   - "objectPropertyReading": Generates setters based on the class's properties.
   *     * IMPORTANT: The target class's constructor should work with no properties given.
   */
  constructor(
    readonly ClassType: Constructor<T>,
    readonly CreationType: Mode = 'objectPropertyReading' as Mode,
  ) {}

  /**
   * Builds and returns a constructor for a generic builder class associated with the target class.
   *
   * @returns {Constructor<GenericBuilder<T, Mode>>} A constructor function for the generic builder class.
   */
  public build(): Constructor<GenericBuilder<T, Mode>> {
    return GenericBuilder.bind(GenericBuilder, this.ClassType, this.CreationType) as Constructor<
      GenericBuilder<T, Mode>
    >;
  }
}

/**
 * A generic builder class for creating instances of a given class using a fluent API.
 *
 * @template T - The target class type for which an instance is being built.
 * @template Mode - Determines the builder's mode:
 *   - 'constructorReading': Uses constructor arguments for building.
 *   - 'objectPropertyReading': Uses object properties for building.
 */
export class GenericBuilder<
  T extends object,
  Mode extends 'constructorReading' | 'objectPropertyReading',
> implements Builder<T> {
  private attributes: Partial<T> = {};
  private args: Partial<ConstructorParameters<Constructor<T>>> = [];

  /**
   * Initializes the builder for the specified class and mode.
   *
   * @param {Constructor<T>} ClassType - The constructor of the class to build.
   * @param {Mode} Type - The mode for the builder:
   *   - "objectPropertyReading": Builds using object properties.
   *   - "constructorReading": Builds using constructor parameters.
   */
  constructor(
    private readonly ClassType: Constructor<T>,
    private readonly Type: Mode,
  ) {
    if (Type === 'objectPropertyReading') {
      this.createSettersFromProperties();
    } else {
      this.createSettersFromConstructorParameters();
    }

    Object.preventExtensions(this);
  }

  /**
   * Generates setter methods based on the properties of the class instance.
   * This is used when the builder mode is 'objectPropertyReading'.
   *
   * @private
   */
  private createSettersFromProperties() {
    type Keys = keyof T;
    const instance = new this.ClassType();
    for (const key in instance) {
      if (!Object.prototype.hasOwnProperty.call(instance, key)) continue;
      const typedKey = key as Keys;
      const methodName = `set${StringUtil.capitalize(key)}` as `set${Capitalize<string & Keys>}`;
      const method = (value: T[typeof typedKey]) => {
        this.attributes[typedKey] = value;
        return this;
      };

      this.defineMethod(methodName, method as AnyFunction);
    }
  }

  /**
   * Generates setter methods based on the constructor parameters of the class.
   * This is used when the builder mode is 'constructorReading'.
   *
   * @private
   */
  private createSettersFromConstructorParameters() {
    type ConstructorArgs = ConstructorParameters<Constructor<T>>;

    const paramCount = (this.ClassType as unknown as { length: number }).length;
    for (let i = 0; i < paramCount; i++) {
      const methodName = `setArg${i}` as const;
      type ArgType = ConstructorArgs[typeof i];
      const method = (value: ArgType) => {
        this.args[i] = value;
        return this;
      };
      this.defineMethod(methodName, method as AnyFunction);
    }
  }

  /**
   * Dynamically defines a method on the builder.
   *
   * @param {string} name - The name of the method to define.
   * @param {AnyFunction} method - The function to assign to the method.
   * @private
   */
  private defineMethod(name: string, method: AnyFunction) {
    Object.defineProperty(this, name, {
      get: () => method,
      set: (_value: unknown) => {
        throw new Error(`You cannot overwrite this property with another. ${_value}`);
      },
    });
  }

  /**
   * Builds and returns an instance of the target class.
   *
   * @returns {T} An instance of the class specified by `ClassType`.
   */
  public build(): T {
    if (this.Type === 'objectPropertyReading') {
      return Object.assign(new this.ClassType(), this.attributes);
    }

    return new this.ClassType(...(this.args as ConstructorParameters<Constructor<T>>));
  }
}
