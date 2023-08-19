[sussy-util](../README.md) / [classes](./README.md) / BuilderBuilder

# Class: BuilderBuilder<T>

A builder for creating instances of the `GenericBuilder` class, enabling the construction of instances of a specified class using fluent API-style method calls.

## Type Parameters

- `T`: The type of class for which instances are built using the `GenericBuilder`.

## Constructor

### constructor

Create an instance of the `BuilderBuilder` class.

**Parameters:**

- `ClassType` (`Constructor<T>`): The constructor function of the class for which instances will be built.

## Methods

### build

Build and return an instance of the `GenericBuilder` class with the specified class type.

**Returns:**

- `GenericBuilder<T>`: An instance of the `GenericBuilder` class with the specified class type.

---

# Class: GenericBuilder<T>

A generic builder class that facilitates the construction of instances for a specified class by setting attributes using fluent API-style method calls.

## Type Parameters

- `T`: The type of class for which instances are built.

## Properties

### attributes

An object containing the partial attributes set using the builder methods.

## Methods

### build

Build and return an instance of the specified class type with the attributes set using the builder methods.

**Returns:**

- `T`: An instance of the specified class type with attributes set.

## Explanation

The `BuilderBuilder` class provides a convenient way to create instances of the `GenericBuilder` class tailored for a specific class type. The `GenericBuilder` class allows you to construct instances of the specified class by setting attributes using fluent API-style method calls. This approach can lead to more readable and maintainable code when constructing complex objects with many properties.

By using the `BuilderBuilder` and `GenericBuilder` classes, you can simplify the process of creating instances with customizable attributes and ensure that the builder methods correspond to the properties of the target class. This pattern is particularly useful for scenarios where object creation involves a variety of optional and customizable attributes.
