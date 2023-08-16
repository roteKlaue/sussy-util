import { Constructor } from "../Types";

export default class ImmutableClass<T extends {}> {
    /**
     * Creates an instance of the ImmutableClass.
     * Freezing the prototype of the extending class or any class instance created thereafter is crucial to prevent potential safety issues resulting from prototype modifications.
     *
     * @param {Constructor<T>} constructor - The constructor function of the class.
     * @param {Array<[string, () => any]>} properties - The array of property definitions.
     *     Each inner array should contain a property name and its corresponding getter function.
     * @param {Array<[string, Function]>} functions - The array of function definitions.
     *     Each inner array should contain a function name and its corresponding function.
     * @throws {Error} Throws an error if the class is extended by another class.
     * 
     * @example Example usage:
     * class TestClass extends ImmutableClass {
     *      #a = 12;
     *
     *      constructor() {
     *          super(TestClass, [["a", () => this.#a]], [["displayA", () => console.log(this.#a)]]);
     *      }
     *}
     * Objects.freeze(TestClass.prototype);
     * 
     * const test = new TestClass();
     * test.a // 12
     * test.a = 13 // throws error
     */
    constructor(constructor: Constructor<T>, properties: [string, () => any][], functions: [string, Function][]) {
        if (this.constructor !== constructor) {
            throw new Error("You cannot extend this class with another class.");
        }

        properties.forEach(([name, getter]) => {
            Object.defineProperty(this, name, {
                get: getter,
                set(_value) {
                    throw new Error("You cannot overwrite this property with another.");
                }
            });
        });

        functions.forEach(([name, getter]) => {
            Object.defineProperty(this, name, {
                get: () => getter,
                set(_value) {
                    throw new Error("You cannot overwrite this function with another.");
                }
            });
        });

        Object.freeze(this);
    }
}