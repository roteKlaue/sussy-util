[sussy-util](../README.md) / [classes](./README.md) / Queue

# Class: Queue<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](Queue.md#constructor)

### Properties

- [items](Queue.md#items)

### Methods

- [empty](Queue.md#empty)
- [peek](Queue.md#peek)
- [push](Queue.md#push)
- [shift](Queue.md#shift)
- [toArray](Queue.md#toarray)
- [toJSONString](Queue.md#tojsonstring)
- [toString](Queue.md#tostring)

## Constructors

### constructor

• **new Queue**<`T`\>(`initElm`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `initElm` | `T`[] |

#### Defined in

[src/Classes/Queue.ts:6](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Queue.ts#L6)

## Properties

### items

• `Private` **items**: [`ImprovedArray`](ImprovedArray.md)<`T`\>

#### Defined in

[src/Classes/Queue.ts:4](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Queue.ts#L4)

## Methods

### empty

▸ **empty**(): `boolean`

Returns true if the stack is empty, false otherwise

#### Returns

`boolean`

The method returns a boolean value.

#### Defined in

[src/Classes/Queue.ts:38](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Queue.ts#L38)

___

### peek

▸ **peek**(): `undefined` \| `T`

It returns the first element of the array

#### Returns

`undefined` \| `T`

The first item in the array.

#### Defined in

[src/Classes/Queue.ts:22](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Queue.ts#L22)

___

### push

▸ **push**(`...elm`): `void`

The function takes a variable number of arguments of type T and pushes them into the items array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...elm` | `T`[] | T[] |

#### Returns

`void`

#### Defined in

[src/Classes/Queue.ts:14](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Queue.ts#L14)

___

### shift

▸ **shift**(): `undefined` \| `T`

It removes the first element from an array and returns that element

#### Returns

`undefined` \| `T`

The first element of the array.

#### Defined in

[src/Classes/Queue.ts:30](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Queue.ts#L30)

___

### toArray

▸ **toArray**(): `T`[]

This function returns a copy of the items array.

#### Returns

`T`[]

The clone of the items array.

#### Defined in

[src/Classes/Queue.ts:50](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Queue.ts#L50)

___

### toJSONString

▸ **toJSONString**(): `string`

It takes the items array and converts it to a JSON string.

#### Returns

`string`

The JSON string representation of the items array.

#### Defined in

[src/Classes/Queue.ts:58](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Queue.ts#L58)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[src/Classes/Queue.ts:42](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Queue.ts#L42)
