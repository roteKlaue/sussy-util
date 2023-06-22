[sussy-util](../README.md) / [classes](./README.md) / Random

# Class: Random

## Table of contents

### Constructors

- [constructor](Random.md#constructor)

### Properties

- [instance](Random.md#instance)

### Methods

- [randomBoolean](Random.md#randomboolean)
- [randomChar](Random.md#randomchar)
- [randomElement](Random.md#randomelement)
- [randomElementInRange](Random.md#randomelementinrange)
- [randomInt](Random.md#randomint)
- [randomProperty](Random.md#randomproperty)
- [randomString](Random.md#randomstring)
- [getInstance](Random.md#getinstance)

## Constructors

### constructor

• `Private` **new Random**()

#### Defined in

[Random.ts:7](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Random.ts#L7)

## Properties

### instance

▪ `Static` `Private` **instance**: [`Random`](Random.md)

#### Defined in

[Random.ts:6](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Random.ts#L6)

## Methods

### randomBoolean

▸ **randomBoolean**(): `boolean`

Generates a random boolean value.

#### Returns

`boolean`

A random boolean value.

#### Defined in

[Random.ts:83](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Random.ts#L83)

___

### randomChar

▸ **randomChar**(`charset?`): `string`

It returns a random character from a given string, or a random character from the Random string
if no string is given.

The Random string is: 

abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `charset?` | `string` | The character set to use. If not provided, it will Random to "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" |

#### Returns

`string`

A random character from the charset.

#### Defined in

[Random.ts:33](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Random.ts#L33)

___

### randomElement

▸ **randomElement**<`T`\>(`arr`): `T`

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

[Random.ts:53](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Random.ts#L53)

___

### randomElementInRange

▸ **randomElementInRange**<`T`\>(`arr`, `start`, `end`): `T`

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

[Random.ts:64](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Random.ts#L64)

___

### randomInt

▸ **randomInt**(`lower?`, `upper?`): `number`

It returns a random integer between the lower and upper bounds, inclusive.

min <= n < max

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `lower?` | `number` | `0` | The lowest number that can be returned. |
| `upper?` | `number` | `10` | The upper bound of the random number. |

#### Returns

`number`

A random integer between the lower and upper bounds.

#### Defined in

[Random.ts:17](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Random.ts#L17)

___

### randomProperty

▸ **randomProperty**<`T`\>(`obj`): `T`[keyof `T`]

Generates a random element from an object by selecting a random property.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | The object to choose a random property from. |

#### Returns

`T`[keyof `T`]

The value of a random property in the object.

#### Defined in

[Random.ts:73](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Random.ts#L73)

___

### randomString

▸ **randomString**(`length?`, `charset?`): `string`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `length?` | `number` | `10` | The length of the string to be generated. |
| `charset?` | `string` | `undefined` | The characters to use when generating the string. Defaults to "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789". |

#### Returns

`string`

A string of random characters.

#### Defined in

[Random.ts:44](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Random.ts#L44)

___

### getInstance

▸ `Static` **getInstance**(): [`Random`](Random.md)

#### Returns

[`Random`](Random.md)

#### Defined in

[Random.ts:87](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Random.ts#L87)
