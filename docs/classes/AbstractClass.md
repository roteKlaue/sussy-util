[sussy-util](../README.md) / [classes](./README.md) / AbstractClass

# Class: AbstractClass

A utility class for defining abstract classes that cannot be directly instantiated.

## Type Parameters

- `T`: The type of object being checked for abstract class properties.

## Constructors

### constructor

Create an instance of the AbstractClass.

**Parameters:**

- `Constructor` (`Constructor<T>`): The constructor of the class being checked for abstract properties.

**Throws:**

- `TypeError`: If the provided constructor is not the constructor of a class.
- `AbstractClassInstanceCallError`: If an attempt is made to instantiate an instance of an abstract class.

## Example Usage

```typescript
// Define an abstract class
class MyBaseClass {
    constructor() {
        if (new.target === MyBaseClass) {
            throw new Error("Cannot instantiate MyBaseClass directly.");
        }
    }
}

// Create a derived class
class MyDerivedClass extends MyBaseClass {
    constructor() {
        super();
    }
}

// Attempt to create instances
const abstractBase = new AbstractClass(MyBaseClass); // Throws AbstractClassInstanceCallError
const instance = new MyDerivedClass(); // Creates an instance of MyDerivedClass
```

# Explanation
The `AbstractClass` class is designed to prevent direct instantiation of abstract classes. By providing a class constructor, it checks whether the provided constructor refers to a class. If it does, and if the constructor of the `AbstractClass` instance matches the provided constructor or matches the default constructor of `AbstractClass`, it throws an `AbstractClassInstanceCallError`. This error is used to indicate that an attempt was made to create an instance of an abstract class.

This utility is particularly valuable in cases where you want to enforce that certain classes should only serve as base classes and should not be directly instantiated.