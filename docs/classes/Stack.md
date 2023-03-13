[sussy-util](../README.md) / [classes](./README.md) / Stack

# Class: Stack<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](Stack.md#constructor)

### Properties

- [items](Stack.md#items)

### Methods

- [empty](Stack.md#empty)
- [peek](Stack.md#peek)
- [pop](Stack.md#pop)
- [push](Stack.md#push)
- [toArray](Stack.md#toarray)
- [toJSONString](Stack.md#tojsonstring)
- [toString](Stack.md#tostring)

## Constructors

### constructor

• **new Stack**<`T`\>(`initElm`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `initElm` | `T`[] |

#### Defined in

[Stack.ts:7](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/Stack.ts#L7)

## Properties

### items

• `Private` **items**: `ImprovedArray`<`T`\>

#### Defined in

[Stack.ts:5](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/Stack.ts#L5)

## Methods

### empty

▸ **empty**(): `boolean`

The function returns true if the stack is empty, false otherwise

#### Returns

`boolean`

The method returns a boolean value.

#### Defined in

[Stack.ts:44](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/Stack.ts#L44)

___

### peek

▸ **peek**(): `T`

If the stack is empty, throw an error, otherwise return the last item in the stack.

#### Returns

`T`

The last item in the array.

#### Defined in

[Stack.ts:23](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/Stack.ts#L23)

___

### pop

▸ **pop**(): `T`

If the stack is empty, throw an error. Otherwise, remove the last item from the stack and return
it.

#### Returns

`T`

The last item in the array.

#### Defined in

[Stack.ts:33](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/Stack.ts#L33)

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

[Stack.ts:15](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/Stack.ts#L15)

___

### toArray

▸ **toArray**(): `T`[]

#### Returns

`T`[]

#### Defined in

[Stack.ts:52](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/Stack.ts#L52)

___

### toJSONString

▸ **toJSONString**(): `string`

It takes the items array and converts it to a JSON string.

#### Returns

`string`

The JSON string representation of the items array.

#### Defined in

[Stack.ts:60](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/Stack.ts#L60)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[Stack.ts:48](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/Stack.ts#L48)
