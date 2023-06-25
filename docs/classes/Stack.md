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

- [[iterator]](Stack.md#[iterator])
- [clear](Stack.md#clear)
- [clone](Stack.md#clone)
- [distinct](Stack.md#distinct)
- [empty](Stack.md#empty)
- [peek](Stack.md#peek)
- [pop](Stack.md#pop)
- [push](Stack.md#push)
- [removeAll](Stack.md#removeall)
- [reverse](Stack.md#reverse)
- [size](Stack.md#size)
- [toArray](Stack.md#toarray)
- [toJSONString](Stack.md#tojsonstring)
- [toString](Stack.md#tostring)

## Constructors

### constructor

• **new Stack**<`T`\>(`initElm?`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `initElm` | `T`[] | `[]` |

#### Defined in

[src/Classes/Stack.ts:7](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Stack.ts#L7)

## Properties

### items

• `Private` **items**: [`ImprovedArray`](ImprovedArray.md)<`T`\>

#### Defined in

[src/Classes/Stack.ts:5](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Stack.ts#L5)

## Methods

### [iterator]

▸ **[iterator]**(): `Iterator`<`T`, `any`, `undefined`\>

#### Returns

`Iterator`<`T`, `any`, `undefined`\>

#### Defined in

[src/Classes/Stack.ts:111](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Stack.ts#L111)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/Classes/Stack.ts:78](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Stack.ts#L78)

___

### clone

▸ **clone**(): [`Stack`](Stack.md)<`T`\>

Returns a new stack that is a copy of the current stack.

#### Returns

[`Stack`](Stack.md)<`T`\>

A new stack with the same elements as the current stack.

#### Defined in

[src/Classes/Stack.ts:74](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Stack.ts#L74)

___

### distinct

▸ **distinct**(): [`Stack`](Stack.md)<`T`\>

Returns a new stack that contains the unique elements from the current stack.

#### Returns

[`Stack`](Stack.md)<`T`\>

A new stack with unique elements.

#### Defined in

[src/Classes/Stack.ts:106](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Stack.ts#L106)

___

### empty

▸ **empty**(): `boolean`

The function returns true if the stack is empty, false otherwise

#### Returns

`boolean`

The method returns a boolean value.

#### Defined in

[src/Classes/Stack.ts:42](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Stack.ts#L42)

___

### peek

▸ **peek**(): `T`

If the stack is empty, throw an error, otherwise return the last item in the stack.

#### Returns

`T`

The last item in the array.

#### Defined in

[src/Classes/Stack.ts:23](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Stack.ts#L23)

___

### pop

▸ **pop**(): `T`

If the stack is empty, throw an error. Otherwise, remove the last item from the stack and return
it.

#### Returns

`T`

The last item in the array.

#### Defined in

[src/Classes/Stack.ts:33](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Stack.ts#L33)

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

[src/Classes/Stack.ts:15](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Stack.ts#L15)

___

### removeAll

▸ **removeAll**(`element`): `number`

Removes all occurrences of a specific element from the stack.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `T` | The element to be removed. |

#### Returns

`number`

The number of elements removed from the stack.

#### Defined in

[src/Classes/Stack.ts:96](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Stack.ts#L96)

___

### reverse

▸ **reverse**(): [`Stack`](Stack.md)<`T`\>

Returns a new stack that contains the reversed order of the elements in the current stack.

#### Returns

[`Stack`](Stack.md)<`T`\>

A new stack with reversed elements.

#### Defined in

[src/Classes/Stack.ts:86](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Stack.ts#L86)

___

### size

▸ **size**(): `number`

Returns the number of elements in the stack.

#### Returns

`number`

The number of elements in the stack.

#### Defined in

[src/Classes/Stack.ts:66](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Stack.ts#L66)

___

### toArray

▸ **toArray**(): `T`[]

#### Returns

`T`[]

#### Defined in

[src/Classes/Stack.ts:50](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Stack.ts#L50)

___

### toJSONString

▸ **toJSONString**(): `string`

It takes the items array and converts it to a JSON string.

#### Returns

`string`

The JSON string representation of the items array.

#### Defined in

[src/Classes/Stack.ts:58](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Stack.ts#L58)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[src/Classes/Stack.ts:46](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Stack.ts#L46)