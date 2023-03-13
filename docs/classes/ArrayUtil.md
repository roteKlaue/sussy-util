[sussy-util](../README.md) / [classes](./README.md) / StringUtil

# Class: ArrayUtil

## Table of contents

### Constructors

- [constructor](default.md#constructor)

### Methods

- [clear](default.md#clear)
- [clone](default.md#clone)
- [countOccurrences](default.md#countoccurrences)
- [difference](default.md#difference)
- [flat](default.md#flat)
- [insert](default.md#insert)
- [intersection](default.md#intersection)
- [remove](default.md#remove)
- [removeDuplicates](default.md#removeduplicates)
- [shuffle](default.md#shuffle)
- [sortByKey](default.md#sortbykey)
- [union](default.md#union)
- [zip](default.md#zip)

## Constructors

### constructor

• **new ArrayUtil**()

#### Overrides

AbstractClass.constructor

#### Defined in

[ArrayUtil.ts:4](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/ArrayUtil.ts#L4)

## Methods

### clear

▸ `Static` **clear**(`array`): `void`

It clears an array by setting its length to zero

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `any`[] | any[] |

#### Returns

`void`

#### Defined in

[ArrayUtil.ts:80](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/ArrayUtil.ts#L80)

___

### clone

▸ `Static` **clone**<`T`\>(`array`): `T`[]

It takes an array of any type, and returns a new array of the same type

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | T[] - The array to clone. |

#### Returns

`T`[]

A new array with the same elements as the original array.

#### Defined in

[ArrayUtil.ts:89](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/ArrayUtil.ts#L89)

___

### countOccurrences

▸ `Static` **countOccurrences**<`T`\>(`array`, `value`): `number`

It takes an array and a value, and returns the number of times the value occurs in the array.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | T[] - The array to search in |
| `value` | `T` | T - The value to count occurrences of. |

#### Returns

`number`

The number of occurrences of the value in the array.

#### Defined in

[ArrayUtil.ts:72](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/ArrayUtil.ts#L72)

___

### difference

▸ `Static` **difference**<`T`\>(`a`, `b`): `T`[]

It takes two arrays, and returns an array of all the elements in the first array that are not in
the second array

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `T`[] | T[] - The first array |
| `b` | `T`[] | T[] - The array to compare against |

#### Returns

`T`[]

The difference between two arrays.

#### Defined in

[ArrayUtil.ts:51](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/ArrayUtil.ts#L51)

___

### flat

▸ `Static` **flat**(`arr`): `any`[]

If the item is an array, then push the flattened array into the result array, otherwise push the
item into the result array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | `any`[] | any[] - The array to flatten. |

#### Returns

`any`[]

#### Defined in

[ArrayUtil.ts:11](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/ArrayUtil.ts#L11)

___

### insert

▸ `Static` **insert**<`T`\>(`arr`, `index`, `...items`): `T`[]

It takes an array, an index, and any number of items, and returns a new array with the items
inserted at the index.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | `T`[] | T[] - The array to insert into |
| `index` | `number` | The index where you want to insert the items. |
| `...items` | `T`[] | T[] - The items to insert into the array. |

#### Returns

`T`[]

a new array with the items inserted at the specified index.

#### Defined in

[ArrayUtil.ts:141](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/ArrayUtil.ts#L141)

___

### intersection

▸ `Static` **intersection**<`T`\>(`a`, `b`): `T`[]

It takes two arrays of the same type and returns an array of that type containing the elements
that are common to both arrays

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `T`[] | T[] - The first array to compare |
| `b` | `T`[] | T[] |

#### Returns

`T`[]

An array of the elements that are in both a and b.

#### Defined in

[ArrayUtil.ts:30](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/ArrayUtil.ts#L30)

___

### remove

▸ `Static` **remove**<`T`\>(`arr`, `item`): `T`[]

It takes an array and an item, and returns a new array with the item removed

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | `T`[] | T[] - The array to remove the item from |
| `item` | `T` | The item to remove from the array. |

#### Returns

`T`[]

A new array with all the items that are not equal to the item passed in.

#### Defined in

[ArrayUtil.ts:119](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/ArrayUtil.ts#L119)

___

### removeDuplicates

▸ `Static` **removeDuplicates**<`T`\>(`arr`): `T`[]

It takes an array of any type, and returns an array of the same type, with all duplicates
removed

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | `T`[] | T[] - The array to remove duplicates from. |

#### Returns

`T`[]

A new array with the duplicates removed.

#### Defined in

[ArrayUtil.ts:99](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/ArrayUtil.ts#L99)

___

### shuffle

▸ `Static` **shuffle**<`X`, `T`\>(`array`): `void`

This function takes an array of any type and shuffles it in place.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `X` | `X` |
| `T` | extends `X`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `X`[] \| `T` | T \| X[] |

#### Returns

`void`

#### Defined in

[ArrayUtil.ts:59](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/ArrayUtil.ts#L59)

___

### sortByKey

▸ `Static` **sortByKey**<`T`\>(`arr`, `key`): `T`[]

Sort an array of objects by a key of your choice.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | `T`[] | T[] - The array to sort |
| `key` | keyof `T` | keyof T |

#### Returns

`T`[]

An array of objects.

#### Defined in

[ArrayUtil.ts:109](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/ArrayUtil.ts#L109)

___

### union

▸ `Static` **union**<`T`\>(`a`, `b`): `T`[]

It takes two arrays, concatenates them, removes duplicates, and returns the result

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `T`[] | T[] - The first array to union |
| `b` | `T`[] | T[] |

#### Returns

`T`[]

An array of unique values from both arrays.

#### Defined in

[ArrayUtil.ts:40](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/ArrayUtil.ts#L40)

___

### zip

▸ `Static` **zip**<`T`, `U`\>(`arr1`, `arr2`): [`T`, `U`][]

It takes two arrays of different types and returns an array of tuples

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr1` | `T`[] | T[] |
| `arr2` | `U`[] | U[] |

#### Returns

[`T`, `U`][]

An array of tuples.

#### Defined in

[ArrayUtil.ts:129](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/ArrayUtil.ts#L129)
