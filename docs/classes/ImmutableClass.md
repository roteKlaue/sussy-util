[sussy-util](../README.md) / [classes](./README.md) / ImmutableClass

# Class: ImmutableClass

## Table of contents

### Constructors

- [constructor](ImmutableClass.md#constructor)

## Constructors

### constructor

• **new ImmutableClass**(`constructor`, `properties`, `functions`)

Creates an instance of the ImmutableClass.
Freezing the prototype of the extending class or any class instance created thereafter is crucial to prevent potential safety issues resulting from prototype modifications.

**`Throws`**

Throws an error if the class is extended by another class.

**`Example`**

```ts
Example usage:
class TestClass extends ImmutableClass {
     #a = 12;

     constructor() {
         super(TestClass, [["a", () => this.#a]], [["displayA", () => console.log(this.#a)]]);
     }
}
Objects.freeze(TestClass.prototype);

const test = new TestClass();
test.a // 12
test.a = 13 // throws error
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `constructor` | `Function` | The constructor function of the class. |
| `properties` | [`string`, () => `any`][] | The array of property definitions. Each inner array should contain a property name and its corresponding getter function. |
| `functions` | [`string`, `Function`][] | The array of function definitions. Each inner array should contain a function name and its corresponding function. |

#### Defined in

ImmutableClass.ts:27