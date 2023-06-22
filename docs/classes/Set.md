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
- [each](Set.md#each)
- [forEach](Set.md#foreach)
- [get](Set.md#get)
- [has](Set.md#has)
- [isEmpty](Set.md#isempty)
- [length](Set.md#length)
- [merge](Set.md#merge)
- [push](Set.md#push)
- [remove](Set.md#remove)
- [subtract](Set.md#subtract)
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

[src/Classes/Set.ts:8](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Set.ts#L8)

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

[src/Classes/Set.ts:6](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Set.ts#L6)

___

### items

• `Private` **items**: [`ImprovedArray`](ImprovedArray.md)<`T`\>

#### Defined in

[src/Classes/Set.ts:5](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Set.ts#L5)

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

[src/Classes/Set.ts:107](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Set.ts#L107)

___

### clear

▸ **clear**(): `void`

The clear() function clears the items in the Set

#### Returns

`void`

#### Defined in

[src/Classes/Set.ts:70](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Set.ts#L70)

___

### clone

▸ **clone**(): [`Set`](Set.md)<`T`\>

The clone function creates a new Set object and passes the items of the current Set object to
the new Set object

#### Returns

[`Set`](Set.md)<`T`\>

A new Set object with the same items as the original Set object.

#### Defined in

[src/Classes/Set.ts:79](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Set.ts#L79)

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

[src/Classes/Set.ts:31](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Set.ts#L31)

___

### each

▸ **each**(`callbackfn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`item`: `T`) => `void` |

#### Returns

`void`

#### Defined in

[src/Classes/Set.ts:141](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Set.ts#L141)

___

### forEach

▸ **forEach**(`callback`): `void`

Executes a provided callback function once for each item in the Set.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`item`: `T`) => `void` | A function to execute for each item in the Set. |

#### Returns

`void`

#### Defined in

[src/Classes/Set.ts:136](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Set.ts#L136)

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

[src/Classes/Set.ts:43](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Set.ts#L43)

___

### has

▸ **has**(`item`): `boolean`

Returns true if the Set contains the specified item, false otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `T` | The item to search for in the Set. |

#### Returns

`boolean`

A boolean indicating whether the item exists in the Set.

#### Defined in

[src/Classes/Set.ts:128](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Set.ts#L128)

___

### isEmpty

▸ **isEmpty**(): `boolean`

Returns true if the stack is empty, false otherwise

#### Returns

`boolean`

The return type is boolean.

#### Defined in

[src/Classes/Set.ts:55](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Set.ts#L55)

___

### length

▸ **length**(): `number`

The length function returns the length of the items array

#### Returns

`number`

The length of the items array.

#### Defined in

[src/Classes/Set.ts:63](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Set.ts#L63)

___

### merge

▸ **merge**(`set`): [`Set`](Set.md)<`T`\>

Returns a new Set that contains the items from both the current Set and another Set.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `set` | [`Set`](Set.md)<`T`\> | The Set to merge with the current Set. |

#### Returns

[`Set`](Set.md)<`T`\>

A new Set that contains items from both Sets.

#### Defined in

[src/Classes/Set.ts:150](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Set.ts#L150)

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

[src/Classes/Set.ts:21](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Set.ts#L21)

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

[src/Classes/Set.ts:87](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Set.ts#L87)

___

### subtract

▸ **subtract**(`set`): [`Set`](Set.md)<`T`\>

Returns a new Set that contains items from the current Set that are not present in another Set.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `set` | [`Set`](Set.md)<`T`\> | The Set to subtract from the current Set. |

#### Returns

[`Set`](Set.md)<`T`\>

A new Set that contains items from the current Set excluding those present in the other Set.

#### Defined in

[src/Classes/Set.ts:161](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Set.ts#L161)

___

### toArray

▸ **toArray**(): `T`[]

The spread operator (...) is used to convert the Set to an array

#### Returns

`T`[]

An array of the items in the set.

#### Defined in

[src/Classes/Set.ts:99](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Set.ts#L99)

___

### toJSONString

▸ **toJSONString**(): `string`

It takes the items array and converts it to a JSON string.

#### Returns

`string`

The JSON string representation of the items array.

#### Defined in

[src/Classes/Set.ts:119](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Set.ts#L119)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[src/Classes/Set.ts:111](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Set.ts#L111)