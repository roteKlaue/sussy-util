import { Builder, Constructor } from "../Types";
import StringUtil from "./StringUtil";

/**
 * A builder for creating instances of the GenericBuilder class, allowing construction of instances of a specified class using fluent API-style method calls.
 * @template T - The type of class for which instances are built using the GenericBuilder.
 */
export default class BuilderBuilder<T extends {}> {
    private cb;

    constructor(private readonly ClassType: Constructor<T>) {
        /**
         * A generic builder class that facilitates the construction of instances for a specified class by setting attributes using fluent API-style method calls.
         * @template T - The type of class for which instances are built.
         */
        class GenericBuilder<T extends {}> implements Builder<T> {
            public static ClassType: Constructor<object>;
            public attributes: Partial<T> = {};

            /**
             * Creates an instance of GenericBuilder.
             * @param {Constructor<T>} ClassType - The constructor function of the class for which instances will be built.
             */
            constructor() {
                this.createSetters();
            }

            createSetters() {
                for (const key in new GenericBuilder.ClassType()) {
                    const methodName = `set${StringUtil.capitalize(key)}`;
                    const method = (value: T[keyof T]) => {
                        this.attributes[key as keyof T] = value;
                        return this;
                    };

                    Object.defineProperty(this, methodName, {
                        get: () => method,
                        set(_value) {
                            throw new Error("You cannot overwrite this property with another.");
                        }
                    });
                }

                Object.preventExtensions(this);
            }

            /**
             * Build and return an instance of the specified class type with the attributes set using the builder methods.
             * @returns {T} - An instance of the specified class type with attributes set.
             */
            build(): T {
                const instance = new GenericBuilder.ClassType();
                Object.assign(instance, this.attributes);
                return instance as T;
            }
        }

        this.cb = GenericBuilder;
        this.cb.ClassType = ClassType;
    }

    build() {
        return this.cb;
    }
}
