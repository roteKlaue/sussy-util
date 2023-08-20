[sussy-util](../README.md) / [classes](./README.md) / ImmutableClass

# Class: ImmutableClass

A utility class for creating immutable classes with predefined properties and methods.

## Type Parameters

- `T`: The type of object being defined as an immutable class.

## Constructors

### constructor

Create an instance of the ImmutableClass.

**Parameters:**

- `constructor` (`Constructor<T>`): The constructor function of the class.
- `properties` (`[string, () => any][]`): An array of property definitions. Each inner array should contain a property name and its corresponding getter function.
- `functions` (`[string, Function][]`): An array of function definitions. Each inner array should contain a function name and its corresponding function.

**Throws:**

- `Error`: If an attempt is made to extend the class with another class.

## Example Usage

```typescript
// Define an immutable class with properties and methods
class TestClass extends ImmutableClass {
    #a = 12;

    constructor() {
        super(TestClass, [["a", () => this.#a]], [["displayA", () => console.log(this.#a)]]);
    }
}

// Freeze the prototype to prevent modifications
Object.freeze(TestClass.prototype);

// Create an instance of the immutable class
const test = new TestClass();

// Access properties and methods
test.a // 12
test.a = 13 // Throws an error, as the property is immutable
test.displayA(); // Logs the value of 'a' to the console
```

# Explanation
The `ImmutableClass` class provides a way to define immutable classes with predefined properties and methods. When extending this class, you pass in the class constructor, an array of property definitions, and an array of function definitions. The properties and functions defined using this mechanism cannot be modified after instantiation.

Attempting to modify properties or overwrite functions will result in errors being thrown. The prototype of the extending class is frozen to prevent any further modifications.

This utility is useful when you want to ensure that certain properties and methods remain constant throughout the lifecycle of an object, preventing accidental modifications and promoting safer code.