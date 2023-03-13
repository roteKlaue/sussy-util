[sussy-util](../README.md) / [classes](./README.md) / Random

# Class: Random

## Table of contents

### Constructors

- [constructor](Random.md#constructor)

### Methods

- [randomChar](Random.md#randomchar)
- [randomDouble](Random.md#randomdouble)
- [randomElement](Random.md#randomelement)
- [randomElementInRange](Random.md#randomelementinrange)
- [randomInt](Random.md#randomint)
- [randomString](Random.md#randomstring)

## Constructors

### constructor

• **new Random**()

#### Overrides

AbstractClass.constructor

#### Defined in

[Random.ts:4](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/Random.ts#L4)

## Methods

### randomChar

▸ `Static` **randomChar**(`charset?`): `string`

It returns a random character from a given string, or a random character from the default string
if no string is given.

The default string is: 

abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `charset?` | `string` | The character set to use. If not provided, it will default to "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" |

#### Returns

`string`

A random character from the charset.

#### Defined in

[Random.ts:41](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/Random.ts#L41)

___

### randomDouble

▸ `Static` **randomDouble**(`lower?`, `upper?`): `number`

This function returns a random integer between the lower and upper bounds, inclusive, and adds a
random decimal to it.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `lower?` | `number` | `0` | The lower bound of the random number. |
| `upper?` | `number` | `10` | The upper bound of the random number. |

#### Returns

`number`

A random number between the lower and upper bounds.

#### Defined in

[Random.ts:27](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/Random.ts#L27)

___

### randomElement

▸ `Static` **randomElement**<`T`\>(`arr`): `T`

It returns a random element from an array.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | `T`[] | T[] - The array to get a random element from. |

#### Returns

`T`

The return type is T.

#### Defined in

[Random.ts:61](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/Random.ts#L61)

___

### randomElementInRange

▸ `Static` **randomElementInRange**<`T`\>(`arr`, `start`, `end`): `T`

It returns a random element from an array.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | `T`[] | The array to choose a random element from. |
| `start` | `number` | The start index of the range. |
| `end` | `number` | The index of the last element in the range. |

#### Returns

`T`

The random element in the array.

#### Defined in

[Random.ts:72](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/Random.ts#L72)

___

### randomInt

▸ `Static` **randomInt**(`lower?`, `upper?`): `number`

It returns a random integer between the lower and upper bounds, inclusive.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `lower?` | `number` | `0` | The lowest number that can be returned. |
| `upper?` | `number` | `10` | The upper bound of the random number. |

#### Returns

`number`

A random integer between the lower and upper bounds.

#### Defined in

[Random.ts:14](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/Random.ts#L14)

___

### randomString

▸ `Static` **randomString**(`length?`, `charset?`): `string`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `length?` | `number` | `10` | The length of the string to be generated. |
| `charset?` | `string` | `undefined` | The characters to use when generating the string. Defaults to "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789". |

#### Returns

`string`

A string of random characters.

#### Defined in

[Random.ts:52](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/Random.ts#L52)
