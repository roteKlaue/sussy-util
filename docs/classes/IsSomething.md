[sussy-util](../README.md) / [classes](./README.md) / IsSomething

# Class: IsSomething

## Table of contents

### Constructors

- [constructor](IsSomething.md#constructor)

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

## Constructors

### constructor

• **new IsSomething**()

#### Overrides

AbstractClass.constructor

#### Defined in

[IsSomething.ts:6](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/IsSomething.ts#L6)

## Methods

### isArray

▸ `Static` **isArray**(`arg`): `boolean`

If the argument is an array, return true, otherwise return false.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg` | `any` | any |

#### Returns

`boolean`

a boolean value.

#### Defined in

[IsSomething.ts:15](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/IsSomething.ts#L15)

___

### isBoolean

▸ `Static` **isBoolean**(`arg`): `boolean`

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

[IsSomething.ts:25](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/IsSomething.ts#L25)

___

### isClass

▸ `Static` **isClass**(`arg`): `boolean`

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

[IsSomething.ts:35](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/IsSomething.ts#L35)

___

### isDate

▸ `Static` **isDate**(`arg`): `boolean`

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

[IsSomething.ts:57](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/IsSomething.ts#L57)

___

### isDateValid

▸ `Static` **isDateValid**(`date`): `boolean`

If the date is not a number, then it's not a valid date.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | `Date` | The date to check. |

#### Returns

`boolean`

The return value is a boolean.

#### Defined in

[IsSomething.ts:237](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/IsSomething.ts#L237)

___

### isDefined

▸ `Static` **isDefined**(`arg`): `boolean`

It returns true if the argument is not undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg` | `any` | any |

#### Returns

`boolean`

The type of the argument.

#### Defined in

[IsSomething.ts:66](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/IsSomething.ts#L66)

___

### isEmpty

▸ `Static` **isEmpty**(`arg`): `boolean`

If the argument is not null or undefined, then it has a value

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg` | `any` | any |

#### Returns

`boolean`

The return value is a boolean.

#### Defined in

[IsSomething.ts:75](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/IsSomething.ts#L75)

___

### isError

▸ `Static` **isError**(`arg`): `boolean`

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

[IsSomething.ts:85](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/IsSomething.ts#L85)

___

### isEven

▸ `Static` **isEven**(`num`): ``null`` \| `boolean`

If the input is a number, return true if the number is even, otherwise return false.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `num` | `number` | number - This is the parameter that we are passing into the function. |

#### Returns

``null`` \| `boolean`

A function that takes a number and returns a boolean or null.

#### Defined in

[IsSomething.ts:94](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/IsSomething.ts#L94)

___

### isFunction

▸ `Static` **isFunction**(`a`): `boolean`

If the object is a function, and it's not a class, then it's a function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `any` | any |

#### Returns

`boolean`

A boolean value.

#### Defined in

[IsSomething.ts:106](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/IsSomething.ts#L106)

___

### isInfinite

▸ `Static` **isInfinite**(`arg`): `boolean`

It returns true if the argument is either Infinity or -Infinity

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg` | `any` | any |

#### Returns

`boolean`

a boolean value.

#### Defined in

[IsSomething.ts:115](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/IsSomething.ts#L115)

___

### isInstanceOf

▸ `Static` **isInstanceOf**(`value`, `constructor`): ``null`` \| `boolean`

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

[IsSomething.ts:227](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/IsSomething.ts#L227)

___

### isNullorUndefined

▸ `Static` **isNullorUndefined**(`arg`): `boolean`

If the argument is null or undefined, return true. Otherwise, return false

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg` | `any` | any |

#### Returns

`boolean`

The return value is a boolean.

#### Defined in

[IsSomething.ts:124](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/IsSomething.ts#L124)

___

### isNumber

▸ `Static` **isNumber**(`arg`): `boolean`

It returns true if the argument is a number or a string that contains only digits

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg` | `any` | any |

#### Returns

`boolean`

#### Defined in

[IsSomething.ts:132](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/IsSomething.ts#L132)

___

### isObject

▸ `Static` **isObject**(`arg`): `boolean`

If the argument is not null, and is an object, and is not an array, then return true.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg` | `any` | any |

#### Returns

`boolean`

#### Defined in

[IsSomething.ts:140](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/IsSomething.ts#L140)

___

### isPrime

▸ `Static` **isPrime**(`num`): ``null`` \| `boolean`

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

[IsSomething.ts:150](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/IsSomething.ts#L150)

___

### isPrimitive

▸ `Static` **isPrimitive**(`arg`): `boolean`

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

[IsSomething.ts:177](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/IsSomething.ts#L177)

___

### isRegExp

▸ `Static` **isRegExp**(`arg`): `boolean`

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

[IsSomething.ts:187](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/IsSomething.ts#L187)

___

### isString

▸ `Static` **isString**(`args`): `boolean`

It checks if the argument is a string, or if it's a number, it checks if it can be converted to
a string

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `any` | any |

#### Returns

`boolean`

#### Defined in

[IsSomething.ts:196](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/IsSomething.ts#L196)

___

### isSymbol

▸ `Static` **isSymbol**(`arg`): `boolean`

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

[IsSomething.ts:206](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/IsSomething.ts#L206)

___

### isType

▸ `Static` **isType**(`arg`, `type`): `boolean`

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

[IsSomething.ts:217](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/IsSomething.ts#L217)
