[sussy-util](../README.md) / [classes](./README.md) / ArrayUtil

# Class: ArrayUtil

## Table of contents

### Constructors

- [constructor](ArrayUtil.md#constructor)

### Properties

- [instance](ArrayUtil.md#instance)

### Methods

- [clear](ArrayUtil.md#clear)
- [clone](ArrayUtil.md#clone)
- [countOccurrences](ArrayUtil.md#countoccurrences)
- [difference](ArrayUtil.md#difference)
- [flat](ArrayUtil.md#flat)
- [insert](ArrayUtil.md#insert)
- [intersection](ArrayUtil.md#intersection)
- [quickSort](ArrayUtil.md#quicksort)
- [quickselect](ArrayUtil.md#quickselect)
- [remove](ArrayUtil.md#remove)
- [removeDuplicates](ArrayUtil.md#removeduplicates)
- [shuffle](ArrayUtil.md#shuffle)
- [sortByKey](ArrayUtil.md#sortbykey)
- [union](ArrayUtil.md#union)
- [uniqueSubarrays](ArrayUtil.md#uniquesubarrays)
- [zip](ArrayUtil.md#zip)
- [chunks](ArrayUtil.md#chunks)
- [getInstance](ArrayUtil.md#getinstance)

## Constructors

### constructor

• `Private` **new ArrayUtil**()

#### Defined in

[ArrayUtil.ts:6](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/ArrayUtil.ts#L6)

## Properties

### instance

▪ `Static` `Private` **instance**: [`ArrayUtil`](ArrayUtil.md)

#### Defined in

[ArrayUtil.ts:4](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/ArrayUtil.ts#L4)

## Methods

### clear

▸ **clear**(`array`): `void`

It clears an array by setting its length to zero

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `any`[] | any[] |

#### Returns

`void`

#### Defined in

[ArrayUtil.ts:82](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/ArrayUtil.ts#L82)

___

### clone

▸ **clone**<`T`\>(`array`): `T`[]

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

[ArrayUtil.ts:91](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/ArrayUtil.ts#L91)

___

### countOccurrences

▸ **countOccurrences**<`T`\>(`array`, `value`): `number`

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

[ArrayUtil.ts:74](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/ArrayUtil.ts#L74)

___

### difference

▸ **difference**<`T`\>(`a`, `b`): `T`[]

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

[ArrayUtil.ts:53](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/ArrayUtil.ts#L53)

___

### flat

▸ **flat**(`arr`): `any`[]

If the item is an array, then push the flattened array into the result array, otherwise push the
item into the result array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | `any`[] | any[] - The array to flatten. |

#### Returns

`any`[]

#### Defined in

[ArrayUtil.ts:13](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/ArrayUtil.ts#L13)

___

### insert

▸ **insert**<`T`\>(`arr`, `index`, `...items`): `T`[]

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

[ArrayUtil.ts:143](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/ArrayUtil.ts#L143)

___

### intersection

▸ **intersection**<`T`\>(`a`, `b`): `T`[]

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

[ArrayUtil.ts:32](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/ArrayUtil.ts#L32)

___

### quickSort

▸ **quickSort**<`T`\>(`arr`, `compareFn`): `T`[]

Sorts an array in ascending order using the Quick Sort algorithm.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | `T`[] | The input array to be sorted. |
| `compareFn` | (`a`: `T`, `b`: `T`) => `number` | A function to compare two elements. |

#### Returns

`T`[]

The sorted array.

#### Defined in

[ArrayUtil.ts:192](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/ArrayUtil.ts#L192)

___

### quickSelect

▸ **quickSelect**(`arr`, `k`): `number`

Finds the k-th smallest element in an array using the Quickselect algorithm.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | `number`[] | The input array. |
| `k` | `number` | The index of the desired smallest element (1-based). |

#### Returns

`number`

The k-th smallest element in the array.

#### Defined in

[ArrayUtil.ts:165](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/ArrayUtil.ts#L165)

___

### remove

▸ **remove**<`T`\>(`arr`, `item`): `T`[]

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

[ArrayUtil.ts:121](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/ArrayUtil.ts#L121)

___

### removeDuplicates

▸ **removeDuplicates**<`T`\>(`arr`): `T`[]

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

[ArrayUtil.ts:101](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/ArrayUtil.ts#L101)

___

### shuffle

▸ **shuffle**<`X`, `T`\>(`array`): `void`

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

[ArrayUtil.ts:61](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/ArrayUtil.ts#L61)

___

### sortByKey

▸ **sortByKey**<`T`\>(`arr`, `key`): `T`[]

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

[ArrayUtil.ts:111](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/ArrayUtil.ts#L111)

___

### union

▸ **union**<`T`\>(`a`, `b`): `T`[]

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

[ArrayUtil.ts:42](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/ArrayUtil.ts#L42)

___

### uniqueSubArrays

▸ **uniqueSubArrays**(`arr`): `any`[][]

It takes an array and returns a new array with all the unique subarrays.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | `any`[][] | any[][] - The array to get the unique subarrays from. |

#### Returns

`any`[][]

A new array with all the unique subarrays.

#### Defined in

[ArrayUtil.ts:152](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/ArrayUtil.ts#L152)

___

### zip

▸ **zip**<`T`, `U`\>(`arr1`, `arr2`): [`T`, `U`][]

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

[ArrayUtil.ts:131](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/ArrayUtil.ts#L131)

___

### chunks

▸ **chunks**<`T`>(`array`, `chunkSize`): `T`[][] 

Splits an array into smaller arrays of a specified size.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | The array to be chunked. |
| `chunkSize` | number | The size of each chunk. |

#### Returns

`T`[][]

An array of smaller arrays (chunks).

#### Defined in

[ArrayUtil.ts:238]

___

### getInstance

▸ `Static` **getInstance**(): [`ArrayUtil`](ArrayUtil.md)

#### Returns

[`ArrayUtil`](ArrayUtil.md)

#### Defined in

[ArrayUtil.ts:220](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/ArrayUtil.ts#L220)
