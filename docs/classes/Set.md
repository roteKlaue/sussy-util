[sussy-util](../README.md) / [classes](./README.md) / Set

# Class: Set<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](Set.md#constructor)

### Properties

- [checkFunction](Set.md#checkfunction)
- [items](Set.md#items)

### Methods

- [changeCheckFunction](Set.md#changecheckfunction)
- [clear](Set.md#clear)
- [clone](Set.md#clone)
- [delete](Set.md#delete)
- [get](Set.md#get)
- [isEmpty](Set.md#isempty)
- [length](Set.md#length)
- [push](Set.md#push)
- [remove](Set.md#remove)
- [toArray](Set.md#toarray)
- [toJSONString](Set.md#tojsonstring)
- [toString](Set.md#tostring)

## Constructors

### constructor

• **new Set**<`T`\>(`...items`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...items` | `T`[] |

#### Defined in

[Set.ts:8](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/Set.ts#L8)

## Properties

### checkFunction

• `Private` **checkFunction**: (`a`: `T`, `b`: `T`) => `boolean`

#### Type declaration

▸ (`a`, `b`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `T` |
| `b` | `T` |

##### Returns

`boolean`

#### Defined in

[Set.ts:6](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/Set.ts#L6)

___

### items

• `Private` **items**: `ImprovedArray`<`T`\>

#### Defined in

[Set.ts:5](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/Set.ts#L5)

## Methods

### changeCheckFunction

▸ **changeCheckFunction**(`predicate`): `void`

This function changes the check function to the one passed in as a parameter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`a`: `T`, `b`: `T`) => `boolean` | (a: T, b: T) => boolean |

#### Returns

`void`

#### Defined in

[Set.ts:107](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/Set.ts#L107)

___

### clear

▸ **clear**(): `void`

The clear() function clears the items in the Set

#### Returns

`void`

#### Defined in

[Set.ts:70](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/Set.ts#L70)

___

### clone

▸ **clone**(): [`Set`](Set.md)<`T`\>

The clone function creates a new Set object and passes the items of the current Set object to
the new Set object

#### Returns

[`Set`](Set.md)<`T`\>

A new Array object with the same items as the original Set object.

#### Defined in

[Set.ts:79](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/Set.ts#L79)

___

### delete

▸ **delete**(`item`): `void`

finds and removes the item from the Set

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `T` | T - The item to delete |

#### Returns

`void`

#### Defined in

[Set.ts:31](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/Set.ts#L31)

___

### get

▸ **get**(`index`): `T`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | number - The index of the item to get |

#### Returns

`T`

The item at the index.

#### Defined in

[Set.ts:43](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/Set.ts#L43)

___

### isEmpty

▸ **isEmpty**(): `boolean`

Returns true if the stack is empty, false otherwise

#### Returns

`boolean`

The return type is boolean.

#### Defined in

[Set.ts:55](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/Set.ts#L55)

___

### length

▸ **length**(): `number`

The length function returns the length of the items array

#### Returns

`number`

The length of the items array.

#### Defined in

[Set.ts:63](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/Set.ts#L63)

___

### push

▸ **push**(`item`): `void`

If the item is not already in the array, add it

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `T` | T - The item to be pushed into the array. |

#### Returns

`void`

#### Defined in

[Set.ts:21](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/Set.ts#L21)

___

### remove

▸ **remove**(`index`): `void`

The remove function removes an item from the list at the specified index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | number - The index of the item to remove. |

#### Returns

`void`

#### Defined in

[Set.ts:87](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/Set.ts#L87)

___

### toArray

▸ **toArray**(): `T`[]

The spread operator (...) is used to convert the Set to an array

#### Returns

`T`[]

An array of the items in the set.

#### Defined in

[Set.ts:99](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/Set.ts#L99)

___

### toJSONString

▸ **toJSONString**(): `string`

It takes the items array and converts it to a JSON string.

#### Returns

`string`

The JSON string representation of the items array.

#### Defined in

[Set.ts:119](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/Set.ts#L119)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[Set.ts:111](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/Set.ts#L111)
