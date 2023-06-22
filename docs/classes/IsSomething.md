[sussy-util](../README.md) / [classes](./README.md) / IsSomething

# Class: IsSomething

## Table of contents

### Constructors

- [constructor](IsSomething.md#constructor)

### Properties

- [instance](IsSomething.md#instance)

### Methods

- [isArray](IsSomething.md#isarray)
- [isBoolean](IsSomething.md#isboolean)
- [isClass](IsSomething.md#isclass)
- [isDate](IsSomething.md#isdate)
- [isDateValid](IsSomething.md#isdatevalid)
- [isDefined](IsSomething.md#isdefined)
- [isEmpty](IsSomething.md#isempty)
- [isError](IsSomething.md#iserror)
- [isEven](IsSomething.md#iseven)
- [isFunction](IsSomething.md#isfunction)
- [isInfinite](IsSomething.md#isinfinite)
- [isInstanceOf](IsSomething.md#isinstanceof)
- [isNullorUndefined](IsSomething.md#isnullorundefined)
- [isNumber](IsSomething.md#isnumber)
- [isObject](IsSomething.md#isobject)
- [isPrime](IsSomething.md#isprime)
- [isPrimitive](IsSomething.md#isprimitive)
- [isRegExp](IsSomething.md#isregexp)
- [isString](IsSomething.md#isstring)
- [isSymbol](IsSomething.md#issymbol)
- [isType](IsSomething.md#istype)
- [getInstance](IsSomething.md#getinstance)

## Constructors

### constructor

• `Private` **new IsSomething**()

#### Defined in

[IsSomething.ts:5](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/IsSomething.ts#L5)

## Properties

### instance

▪ `Static` `Private` **instance**: [`IsSomething`](IsSomething.md)

#### Defined in

[IsSomething.ts:4](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/IsSomething.ts#L4)

## Methods

### isArray

▸ **isArray**(`arg`): `boolean`

If the argument is an array, return true, otherwise return false.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg` | `any` | any |

#### Returns

`boolean`

a boolean value.

#### Defined in

[IsSomething.ts:12](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/IsSomething.ts#L12)

___

### isBoolean

▸ **isBoolean**(`arg`): `boolean`

If the argument is not null and is either a boolean or a string that is either "true" or
"false", then return true

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg` | `any` | any |

#### Returns

`boolean`

A boolean value.

#### Defined in

[IsSomething.ts:22](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/IsSomething.ts#L22)

___

### isClass

▸ **isClass**(`arg`): `boolean`

If the argument is a function, try to call it. If it throws an error with the message "Class
constructor [class name] cannot be invoked without 'new'", then it's a class

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg` | `any` | any - The argument to check if it's a class. |

#### Returns

`boolean`

A boolean value.

#### Defined in

[IsSomething.ts:32](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/IsSomething.ts#L32)

___

### isDate

▸ **isDate**(`arg`): `boolean`

If the argument is an object and it's constructor is the Date constructor and it's an instance
of Date, then it's a Date

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg` | `any` | any |

#### Returns

`boolean`

The constructor of the Date object.

#### Defined in

[IsSomething.ts:54](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/IsSomething.ts#L54)

___

### isDateValid

▸ **isDateValid**(`date`): `boolean`

If the date is not a number, then it's not a valid date.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | `Date` | The date to check. |

#### Returns

`boolean`

The return value is a boolean.

#### Defined in

[IsSomething.ts:234](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/IsSomething.ts#L234)

___

### isDefined

▸ **isDefined**(`arg`): `boolean`

It returns true if the argument is not undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg` | `any` | any |

#### Returns

`boolean`

The type of the argument.

#### Defined in

[IsSomething.ts:63](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/IsSomething.ts#L63)

___

### isEmpty

▸ **isEmpty**(`arg`): `boolean`

If the argument is not null or undefined, then it has a value

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg` | `any` | any |

#### Returns

`boolean`

The return value is a boolean.

#### Defined in

[IsSomething.ts:72](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/IsSomething.ts#L72)

___

### isError

▸ **isError**(`arg`): `boolean`

If the argument is an object and it's constructor is the Error constructor and it's an instance
of Error, then it's an error

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg` | `any` | any |

#### Returns

`boolean`

The constructor of the Error object.

#### Defined in

[IsSomething.ts:82](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/IsSomething.ts#L82)

___

### isEven

▸ **isEven**(`num`): ``null`` \| `boolean`

If the input is a number, return true if the number is even, otherwise return false.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `num` | `number` | number - This is the parameter that we are passing into the function. |

#### Returns

``null`` \| `boolean`

A function that takes a number and returns a boolean or null.

#### Defined in

[IsSomething.ts:91](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/IsSomething.ts#L91)

___

### isFunction

▸ **isFunction**(`a`): `boolean`

If the object is a function, and it's not a class, then it's a function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `any` | any |

#### Returns

`boolean`

A boolean value.

#### Defined in

[IsSomething.ts:103](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/IsSomething.ts#L103)

___

### isInfinite

▸ **isInfinite**(`arg`): `boolean`

It returns true if the argument is either Infinity or -Infinity

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg` | `any` | any |

#### Returns

`boolean`

a boolean value.

#### Defined in

[IsSomething.ts:112](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/IsSomething.ts#L112)

___

### isInstanceOf

▸ **isInstanceOf**(`value`, `constructor`): ``null`` \| `boolean`

If the constructor is a class, return whether the value is an instance of the constructor.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | any - The value to check. |
| `constructor` | `Function` | The constructor function to check against. |

#### Returns

``null`` \| `boolean`

The return value is a boolean.

#### Defined in

[IsSomething.ts:224](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/IsSomething.ts#L224)

___

### isNullorUndefined

▸ **isNullorUndefined**(`arg`): `boolean`

If the argument is null or undefined, return true. Otherwise, return false

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg` | `any` | any |

#### Returns

`boolean`

The return value is a boolean.

#### Defined in

[IsSomething.ts:121](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/IsSomething.ts#L121)

___

### isNumber

▸ **isNumber**(`arg`): `boolean`

It returns true if the argument is a number or a string that contains only digits

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg` | `any` | any |

#### Returns

`boolean`

#### Defined in

[IsSomething.ts:129](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/IsSomething.ts#L129)

___

### isObject

▸ **isObject**(`arg`): `boolean`

If the argument is not null, and is an object, and is not an array, then return true.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg` | `any` | any |

#### Returns

`boolean`

#### Defined in

[IsSomething.ts:137](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/IsSomething.ts#L137)

___

### isPrime

▸ **isPrime**(`num`): ``null`` \| `boolean`

If the number is less than 2, it's not prime. If it's even, it's not prime. If it's divisible by
any odd number up to the square root of the number, it's not prime. Otherwise, it's prime

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `num` | `number` | number - The number to check if it's prime. |

#### Returns

``null`` \| `boolean`

A boolean value.

#### Defined in

[IsSomething.ts:147](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/IsSomething.ts#L147)

___

### isPrimitive

▸ **isPrimitive**(`arg`): `boolean`

If the argument is null, undefined, a string, a number, a boolean, or a symbol, then return
true, otherwise return false.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg` | `any` | any |

#### Returns

`boolean`

A boolean value.

#### Defined in

[IsSomething.ts:174](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/IsSomething.ts#L174)

___

### isRegExp

▸ **isRegExp**(`arg`): `boolean`

If the argument is an instance of RegExp or the argument's constructor is the RegExp
constructor, then return true

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg` | `any` | any |

#### Returns

`boolean`

a boolean value.

#### Defined in

[IsSomething.ts:184](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/IsSomething.ts#L184)

___

### isString

▸ **isString**(`args`): `boolean`

It checks if the argument is a string, or if it's a number, it checks if it can be converted to
a string

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `any` | any |

#### Returns

`boolean`

#### Defined in

[IsSomething.ts:193](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/IsSomething.ts#L193)

___

### isSymbol

▸ **isSymbol**(`arg`): `boolean`

If the argument is a symbol or an object that is an instance of the Symbol class, then return
true, otherwise return false.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg` | `any` | any |

#### Returns

`boolean`

a boolean value.

#### Defined in

[IsSomething.ts:203](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/IsSomething.ts#L203)

___

### isType

▸ **isType**(`arg`, `type`): `boolean`

This function returns true if the type of the argument is the same as the type passed in as a
parameter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg` | `any` | The argument to check the type of. |
| `type` | `String` | The type of the argument. |

#### Returns

`boolean`

The type of the argument.

#### Defined in

[IsSomething.ts:214](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/IsSomething.ts#L214)

___

### getInstance

▸ `Static` **getInstance**(): [`IsSomething`](IsSomething.md)

#### Returns

[`IsSomething`](IsSomething.md)

#### Defined in

[IsSomething.ts:238](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/IsSomething.ts#L238)
