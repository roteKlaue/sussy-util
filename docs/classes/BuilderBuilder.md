[sussy-util](../README.md) / [classes](./README.md) / BuilderBuilder

# BuilderBuilder<T\> Class
A builder for creating instances of the GenericBuilder class, allowing construction of instances of a specified class using fluent API-style method calls.

## Usage

```ts
import { BuilderBuilder } from 'sussy-util';

// Create a builder for a GenericBuilder for a specific class
const builderBuilder = new BuilderBuilder(MyClass);

// Build a GenericBuilder constructor for the specified class
const GenericBuilderConstructor = builderBuilder.build();

// Use the GenericBuilder to build instances
const builder = new GenericBuilderConstructor();
const instance = builder.build();
```

## Constructor
**`constructor(ClassType: Constructor<T>, CreationType: string = 'objectPropertyReading')`**
 - ClassType: The constructor of the target class for which a builder is to be generated.
 - CreationType: Specifies the method used for creating the builder:
    - "constructorReading": Parses instance variables based on the constructor's signature.
        **IMPORTANT**: The constructor must be the first function in the class.
    - "objectPropertyReading": Generates setters based on the class's properties.
        **IMPORTANT**: The target class's constructor should work with no properties given.

## Methods
 - `build()`: Constructor<GenericBuilder<T\>>
    Builds and returns a constructor for a generic builder class associated with the target class.

## Example
```ts
class MyClass {
    constructor(public prop1: string, public prop2: number) {}
}

// Create a builder for MyClass using constructorReading
const builderBuilder = new BuilderBuilder(MyClass, 'constructorReading');

// Build a GenericBuilder constructor for MyClass
const GenericBuilderConstructor = builderBuilder.build();

// Use the GenericBuilder to build instances
const builder = new GenericBuilderConstructor();
const instance = builder.setProp1('Value1').setProp2(42).build();
```
# GenericBuilder Class

A generic builder class that facilitates the construction of instances for a specified class by setting attributes using fluent API-style method calls.

## Constructor
**`constructor(ClassType: Constructor<T>, Type: string)`**
 - ClassType: The constructor function of the class for which instances will be built.
 - Type: The type of builder to create, either "constructorReading" or "objectPropertyReading".

## Methods
 - `build()`: T
    Build and return an instance of the specified class type with the attributes set using the builder methods.