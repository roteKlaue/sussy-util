[sussy-util](../README.md) / [classes](./README.md) / ImprovedArray

# Class: ImprovedArray<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- `Array`<`T`\>

  ↳ **`ImprovedArray`**

## Table of contents

### Constructors

- [constructor](ImprovedArray.md#constructor)

### Properties

- [length](ImprovedArray.md#length)
- [[species]](ImprovedArray.md#[species])

### Methods

- [[iterator]](ImprovedArray.md#[iterator])
- [[unscopables]](ImprovedArray.md#[unscopables])
- [at](ImprovedArray.md#at)
- [clear](ImprovedArray.md#clear)
- [clone](ImprovedArray.md#clone)
- [concat](ImprovedArray.md#concat)
- [copyWithin](ImprovedArray.md#copywithin)
- [countOccurrences](ImprovedArray.md#countoccurrences)
- [deepClone](ImprovedArray.md#deepclone)
- [each](ImprovedArray.md#each)
- [entries](ImprovedArray.md#entries)
- [every](ImprovedArray.md#every)
- [fill](ImprovedArray.md#fill)
- [filter](ImprovedArray.md#filter)
- [find](ImprovedArray.md#find)
- [findCommonElements](ImprovedArray.md#findcommonelements)
- [findIndex](ImprovedArray.md#findindex)
- [flat](ImprovedArray.md#flat)
- [flatMap](ImprovedArray.md#flatmap)
- [flatten](ImprovedArray.md#flatten)
- [forEach](ImprovedArray.md#foreach)
- [getRandomElement](ImprovedArray.md#getrandomelement)
- [getRandomIndex](ImprovedArray.md#getrandomindex)
- [includes](ImprovedArray.md#includes)
- [indexOf](ImprovedArray.md#indexof)
- [insertAt](ImprovedArray.md#insertat)
- [isEmpty](ImprovedArray.md#isempty)
- [join](ImprovedArray.md#join)
- [keys](ImprovedArray.md#keys)
- [lastIndexOf](ImprovedArray.md#lastindexof)
- [map](ImprovedArray.md#map)
- [none](ImprovedArray.md#none)
- [pop](ImprovedArray.md#pop)
- [push](ImprovedArray.md#push)
- [reduce](ImprovedArray.md#reduce)
- [reduceRight](ImprovedArray.md#reduceright)
- [rejected](ImprovedArray.md#rejected)
- [remove](ImprovedArray.md#remove)
- [removeDuplicates](ImprovedArray.md#removeduplicates)
- [reverse](ImprovedArray.md#reverse)
- [shift](ImprovedArray.md#shift)
- [shuffle](ImprovedArray.md#shuffle)
- [slice](ImprovedArray.md#slice)
- [some](ImprovedArray.md#some)
- [sort](ImprovedArray.md#sort)
- [splice](ImprovedArray.md#splice)
- [sum](ImprovedArray.md#sum)
- [toJSONString](ImprovedArray.md#tojsonstring)
- [toLocaleString](ImprovedArray.md#tolocalestring)
- [toString](ImprovedArray.md#tostring)
- [unshift](ImprovedArray.md#unshift)
- [values](ImprovedArray.md#values)
- [from](ImprovedArray.md#from)
- [isArray](ImprovedArray.md#isarray)
- [of](ImprovedArray.md#of)

## Constructors

### constructor

• **new ImprovedArray**<`T`\>(`..._elements`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `..._elements` | `T`[] |

#### Overrides

Array&lt;T\&gt;.constructor

#### Defined in

[src/Classes/ImprovedArray.ts:8](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/ImprovedArray.ts#L8)

## Properties

### length

• **length**: `number`

Gets or sets the length of the array. This is a number one higher than the highest index in the array.

#### Inherited from

Array.length

#### Defined in

typescript/lib/lib.es5.d.ts:1304

___

### [species]

▪ `Static` `Readonly` **[species]**: `ArrayConstructor`

#### Inherited from

Array.\_\_@species@221

#### Defined in

typescript/lib/lib.es2015.symbol.wellknown.d.ts:314

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<`T`\>

Iterator

#### Returns

`IterableIterator`<`T`\>

#### Inherited from

Array.\_\_@iterator@124

#### Defined in

typescript/lib/lib.es2015.iterable.d.ts:60

___

### [unscopables]

▸ **[unscopables]**(): `Object`

Returns an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `copyWithin` | `boolean` |
| `entries` | `boolean` |
| `fill` | `boolean` |
| `find` | `boolean` |
| `findIndex` | `boolean` |
| `keys` | `boolean` |
| `values` | `boolean` |

#### Inherited from

Array.\_\_@unscopables@144

#### Defined in

typescript/lib/lib.es2015.symbol.wellknown.d.ts:99

___

### at

▸ **at**(`index`): `undefined` \| `T`

Takes an integer value and returns the item at that index,
allowing for positive and negative integers.
Negative integers count back from the last item in the array.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`undefined` \| `T`

#### Inherited from

Array.at

#### Defined in

node_modules/@types/node/globals.d.ts:91

___

### clear

▸ **clear**(): `void`

The clear() function removes all elements from an array

#### Returns

`void`

#### Defined in

[src/Classes/ImprovedArray.ts:56](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/ImprovedArray.ts#L56)

___

### clone

▸ **clone**(): [`ImprovedArray`](ImprovedArray.md)<`T`\>

It creates a new instance of the ImprovedArray class, and passes the current array as the
argument

#### Returns

[`ImprovedArray`](ImprovedArray.md)<`T`\>

A new instance of ImprovedArray with the same elements as the original.

#### Defined in

[src/Classes/ImprovedArray.ts:65](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/ImprovedArray.ts#L65)

___

### concat

▸ **concat**(`...items`): `T`[]

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `ConcatArray`<`T`\>[] | Additional arrays and/or items to add to the end of the array. |

#### Returns

`T`[]

#### Inherited from

Array.concat

#### Defined in

typescript/lib/lib.es5.d.ts:1328

▸ **concat**(`...items`): `T`[]

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | (`T` \| `ConcatArray`<`T`\>)[] | Additional arrays and/or items to add to the end of the array. |

#### Returns

`T`[]

#### Inherited from

Array.concat

#### Defined in

typescript/lib/lib.es5.d.ts:1334

___

### copyWithin

▸ **copyWithin**(`target`, `start`, `end?`): [`ImprovedArray`](ImprovedArray.md)<`T`\>

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `number` | If target is negative, it is treated as length+target where length is the length of the array. |
| `start` | `number` | If start is negative, it is treated as length+start. If end is negative, it is treated as length+end. |
| `end?` | `number` | If not specified, length of the this object is used as its default value. |

#### Returns

[`ImprovedArray`](ImprovedArray.md)<`T`\>

#### Inherited from

Array.copyWithin

#### Defined in

typescript/lib/lib.es2015.core.d.ts:64

___

### countOccurrences

▸ **countOccurrences**(`value`): `number`

The reduce function takes a function as an argument, and that function takes two arguments, the
first being the accumulator, and the second being the current value. The accumulator is
initialized to 0, and the function returns the accumulator plus 1 if the current value is equal
to the value we're looking for, or the accumulator plus 0 if it's not.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | T - The value to count occurrences of. |

#### Returns

`number`

The number of times the value is found in the array.

#### Defined in

[src/Classes/ImprovedArray.ts:127](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/ImprovedArray.ts#L127)

___

### deepClone

▸ **deepClone**(): [`ImprovedArray`](ImprovedArray.md)<`T`\>

Returns a copy of the array. 
Each element will be copied into each and every property.

Does NOT make a new instance a class, just takes the properties of the old object and recreates them.

#### Returns

[`ImprovedArray`](ImprovedArray.md)<`T`\>

#### Defined in

[src/Classes/ImprovedArray.ts:185](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/ImprovedArray.ts#L185)

___

### each

▸ **each**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Defined in

[src/Classes/ImprovedArray.ts:160](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/ImprovedArray.ts#L160)

___

### entries

▸ **entries**(): `IterableIterator`<[`number`, `T`]\>

Returns an iterable of key, value pairs for every entry in the array

#### Returns

`IterableIterator`<[`number`, `T`]\>

#### Inherited from

Array.entries

#### Defined in

typescript/lib/lib.es2015.iterable.d.ts:65

___

### every

▸ **every**<`S`\>(`predicate`, `thisArg?`): this is S[]

Determines whether all the members of an array satisfy the specified test.

#### Type parameters

| Name |
| :------ |
| `S` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => value is S | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

this is S[]

#### Inherited from

Array.every

#### Defined in

typescript/lib/lib.es5.d.ts:1411

▸ **every**(`predicate`, `thisArg?`): `boolean`

Determines whether all the members of an array satisfy the specified test.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `unknown` | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

#### Inherited from

Array.every

#### Defined in

typescript/lib/lib.es5.d.ts:1420

___

### fill

▸ **fill**(`value`, `start?`, `end?`): [`ImprovedArray`](ImprovedArray.md)<`T`\>

Changes all array elements from `start` to `end` index to a static `value` and returns the modified array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | value to fill array section with |
| `start?` | `number` | index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array. |
| `end?` | `number` | index to stop filling the array at. If end is negative, it is treated as length+end. |

#### Returns

[`ImprovedArray`](ImprovedArray.md)<`T`\>

#### Inherited from

Array.fill

#### Defined in

typescript/lib/lib.es2015.core.d.ts:53

___

### filter

▸ **filter**<`S`\>(`predicate`, `thisArg?`): `S`[]

Returns the elements of an array that meet the condition specified in a callback function.

#### Type parameters

| Name |
| :------ |
| `S` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => value is S | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`S`[]

#### Inherited from

Array.filter

#### Defined in

typescript/lib/lib.es5.d.ts:1447

▸ **filter**(`predicate`, `thisArg?`): `T`[]

Returns the elements of an array that meet the condition specified in a callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `unknown` | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`T`[]

#### Inherited from

Array.filter

#### Defined in

typescript/lib/lib.es5.d.ts:1453

___

### find

▸ **find**<`S`\>(`predicate`, `thisArg?`): `undefined` \| `S`

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

#### Type parameters

| Name |
| :------ |
| `S` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`this`: `void`, `value`: `T`, `index`: `number`, `obj`: `T`[]) => value is S | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

`undefined` \| `S`

#### Inherited from

Array.find

#### Defined in

typescript/lib/lib.es2015.core.d.ts:31

▸ **find**(`predicate`, `thisArg?`): `undefined` \| `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `obj`: `T`[]) => `unknown` |
| `thisArg?` | `any` |

#### Returns

`undefined` \| `T`

#### Inherited from

Array.find

#### Defined in

typescript/lib/lib.es2015.core.d.ts:32

___

### findCommonElements

▸ **findCommonElements**<`X`\>(`arr`): [`ImprovedArray`](ImprovedArray.md)<`T`\>

It takes an array of any type and returns an array of the same type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `X` | extends `any`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | `any`[] \| `X` | X \| any[] |

#### Returns

[`ImprovedArray`](ImprovedArray.md)<`T`\>

An array of common elements.

#### Defined in

[src/Classes/ImprovedArray.ts:169](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/ImprovedArray.ts#L169)

___

### findIndex

▸ **findIndex**(`predicate`, `thisArg?`): `number`

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `obj`: `T`[]) => `unknown` | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

`number`

#### Inherited from

Array.findIndex

#### Defined in

typescript/lib/lib.es2015.core.d.ts:43

___

### flat

▸ **flat**<`A`, `D`\>(`this`, `depth?`): `FlatArray`<`A`, `D`\>[]

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `D` | extends `number` = ``1`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `A` | - |
| `depth?` | `D` | The maximum recursion depth |

#### Returns

`FlatArray`<`A`, `D`\>[]

#### Inherited from

Array.flat

#### Defined in

typescript/lib/lib.es2019.array.d.ts:81

___

### flatMap

▸ **flatMap**<`U`, `This`\>(`callback`, `thisArg?`): `U`[]

Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | `U` |
| `This` | `undefined` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`this`: `This`, `value`: `T`, `index`: `number`, `array`: `T`[]) => `U` \| readonly `U`[] | A function that accepts up to three arguments. The flatMap method calls the callback function one time for each element in the array. |
| `thisArg?` | `This` | An object to which the this keyword can refer in the callback function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`U`[]

#### Inherited from

Array.flatMap

#### Defined in

typescript/lib/lib.es2019.array.d.ts:70

___

### flatten

▸ **flatten**(): `void`

It takes an array of arrays and flattens it into a single array.

#### Returns

`void`

#### Defined in

[src/Classes/ImprovedArray.ts:134](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/ImprovedArray.ts#L134)

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

Performs the specified action for each element in an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `void` | A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`void`

#### Inherited from

Array.forEach

#### Defined in

typescript/lib/lib.es5.d.ts:1435

___

### getRandomElement

▸ **getRandomElement**(): `T`

It returns a random element from the array

#### Returns

`T`

The random element from the array.

#### Defined in

[src/Classes/ImprovedArray.ts:25](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/ImprovedArray.ts#L25)

___

### getRandomIndex

▸ **getRandomIndex**(): `number`

It returns a random number between 0 and the length of the array.

#### Returns

`number`

The random index of the array.

#### Defined in

[src/Classes/ImprovedArray.ts:17](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/ImprovedArray.ts#L17)

___

### includes

▸ **includes**(`searchElement`, `fromIndex?`): `boolean`

Determines whether an array includes a certain element, returning true or false as appropriate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | `T` | The element to search for. |
| `fromIndex?` | `number` | The position in this array at which to begin searching for searchElement. |

#### Returns

`boolean`

#### Inherited from

Array.includes

#### Defined in

typescript/lib/lib.es2016.array.include.d.ts:27

___

### indexOf

▸ **indexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | `T` | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0. |

#### Returns

`number`

#### Inherited from

Array.indexOf

#### Defined in

typescript/lib/lib.es5.d.ts:1396

___

### insertAt

▸ **insertAt**(`index`, `...items`): `void`

It takes an index and an array of items, and inserts the items into the array at the given
index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The index to insert the items at. |
| `...items` | `T`[] | T[] |

#### Returns

`void`

#### Defined in

[src/Classes/ImprovedArray.ts:47](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/ImprovedArray.ts#L47)

___

### isEmpty

▸ **isEmpty**(): `boolean`

If the length of the array is equal to zero, return true, otherwise return false.

#### Returns

`boolean`

The length of the array.

#### Defined in

[src/Classes/ImprovedArray.ts:73](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/ImprovedArray.ts#L73)

___

### join

▸ **join**(`separator?`): `string`

Adds all the elements of an array into a string, separated by the specified separator string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `separator?` | `string` | A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma. |

#### Returns

`string`

#### Inherited from

Array.join

#### Defined in

typescript/lib/lib.es5.d.ts:1339

___

### keys

▸ **keys**(): `IterableIterator`<`number`\>

Returns an iterable of keys in the array

#### Returns

`IterableIterator`<`number`\>

#### Inherited from

Array.keys

#### Defined in

typescript/lib/lib.es2015.iterable.d.ts:70

___

### lastIndexOf

▸ **lastIndexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | `T` | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array. |

#### Returns

`number`

#### Inherited from

Array.lastIndexOf

#### Defined in

typescript/lib/lib.es5.d.ts:1402

___

### map

▸ **map**<`U`\>(`callbackfn`, `thisArg?`): `U`[]

Calls a defined callback function on each element of an array, and returns an array that contains the results.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `U` | A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`U`[]

#### Inherited from

Array.map

#### Defined in

typescript/lib/lib.es5.d.ts:1441

___

### none

▸ **none**(`predicate`): `boolean`

If the predicate returns true for any of the elements in the array, return false, otherwise
return true.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `T`) => `boolean` | (value: T) => boolean |

#### Returns

`boolean`

The reduce method is being called on the array. The reduce method takes two parameters,
a callback function and an initial value. The callback function takes two parameters, an
accumulator and a value. The accumulator is the value returned by the previous call to the
callback function. The value is the current value in the array. The initial value is the value
that the accumulator is set to before the

#### Defined in

[src/Classes/ImprovedArray.ts:87](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/ImprovedArray.ts#L87)

___

### pop

▸ **pop**(): `undefined` \| `T`

Removes the last element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

#### Returns

`undefined` \| `T`

#### Inherited from

Array.pop

#### Defined in

typescript/lib/lib.es5.d.ts:1317

___

### push

▸ **push**(`...items`): `number`

Appends new elements to the end of an array, and returns the new length of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `T`[] | New elements to add to the array. |

#### Returns

`number`

#### Inherited from

Array.push

#### Defined in

typescript/lib/lib.es5.d.ts:1322

___

### reduce

▸ **reduce**(`callbackfn`): `T`

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `T`, `currentValue`: `T`, `currentIndex`: `number`, `array`: `T`[]) => `T` | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |

#### Returns

`T`

#### Inherited from

Array.reduce

#### Defined in

typescript/lib/lib.es5.d.ts:1459

▸ **reduce**(`callbackfn`, `initialValue`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: `T`, `currentValue`: `T`, `currentIndex`: `number`, `array`: `T`[]) => `T` |
| `initialValue` | `T` |

#### Returns

`T`

#### Inherited from

Array.reduce

#### Defined in

typescript/lib/lib.es5.d.ts:1460

▸ **reduce**<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: `T`, `currentIndex`: `number`, `array`: `T`[]) => `U` | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

#### Inherited from

Array.reduce

#### Defined in

typescript/lib/lib.es5.d.ts:1466

___

### reduceRight

▸ **reduceRight**(`callbackfn`): `T`

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `T`, `currentValue`: `T`, `currentIndex`: `number`, `array`: `T`[]) => `T` | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |

#### Returns

`T`

#### Inherited from

Array.reduceRight

#### Defined in

typescript/lib/lib.es5.d.ts:1472

▸ **reduceRight**(`callbackfn`, `initialValue`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: `T`, `currentValue`: `T`, `currentIndex`: `number`, `array`: `T`[]) => `T` |
| `initialValue` | `T` |

#### Returns

`T`

#### Inherited from

Array.reduceRight

#### Defined in

typescript/lib/lib.es5.d.ts:1473

▸ **reduceRight**<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: `T`, `currentIndex`: `number`, `array`: `T`[]) => `U` | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

#### Inherited from

Array.reduceRight

#### Defined in

typescript/lib/lib.es5.d.ts:1479

___

### rejected

▸ **rejected**(`predicate`): [`ImprovedArray`](ImprovedArray.md)<`T`\>

It returns a new array with all the elements that do not satisfy the predicate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`val`: `T`, `ind`: `number`, `arr`: `T`[]) => `boolean` | (val: T, ind: number, arr: T[]) => boolean |

#### Returns

[`ImprovedArray`](ImprovedArray.md)<`T`\>

A new instance of ImprovedArray with the filtered values.

#### Defined in

[src/Classes/ImprovedArray.ts:96](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/ImprovedArray.ts#L96)

___

### remove

▸ **remove**(`index`): `T`

It removes the element at the specified index and returns it.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | number - The index of the item to remove. |

#### Returns

`T`

The splice method returns an array containing the deleted elements. If only one element
is removed, an array of one element is returned.

#### Defined in

[src/Classes/ImprovedArray.ts:35](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/ImprovedArray.ts#L35)

___

### removeDuplicates

▸ **removeDuplicates**(): `void`

removes all duplicates from the array

#### Returns

`void`

#### Defined in

[src/Classes/ImprovedArray.ts:113](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/ImprovedArray.ts#L113)

___

### reverse

▸ **reverse**(): `T`[]

Reverses the elements in an array in place.
This method mutates the array and returns a reference to the same array.

#### Returns

`T`[]

#### Inherited from

Array.reverse

#### Defined in

typescript/lib/lib.es5.d.ts:1344

___

### shift

▸ **shift**(): `undefined` \| `T`

Removes the first element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

#### Returns

`undefined` \| `T`

#### Inherited from

Array.shift

#### Defined in

typescript/lib/lib.es5.d.ts:1349

___

### shuffle

▸ **shuffle**(): `void`

For each element in the array, swap it with a random element in the array.

#### Returns

`void`

#### Defined in

[src/Classes/ImprovedArray.ts:151](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/ImprovedArray.ts#L151)

___

### slice

▸ **slice**(`start?`, `end?`): `T`[]

Returns a copy of a section of an array.
For both start and end, a negative index can be used to indicate an offset from the end of the array.
For example, -2 refers to the second to last element of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start?` | `number` | The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0. |
| `end?` | `number` | The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array. |

#### Returns

`T`[]

#### Inherited from

Array.slice

#### Defined in

typescript/lib/lib.es5.d.ts:1359

___

### some

▸ **some**(`predicate`, `thisArg?`): `boolean`

Determines whether the specified callback function returns true for any element of an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `unknown` | A function that accepts up to three arguments. The some method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value true, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

#### Inherited from

Array.some

#### Defined in

typescript/lib/lib.es5.d.ts:1429

___

### sort

▸ **sort**(`compareFn?`): [`ImprovedArray`](ImprovedArray.md)<`T`\>

Sorts an array in place.
This method mutates the array and returns a reference to the same array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compareFn?` | (`a`: `T`, `b`: `T`) => `number` | Function used to determine the order of the elements. It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order. ```ts [11,2,22,1].sort((a, b) => a - b) ``` |

#### Returns

[`ImprovedArray`](ImprovedArray.md)<`T`\>

#### Inherited from

Array.sort

#### Defined in

typescript/lib/lib.es5.d.ts:1370

___

### splice

▸ **splice**(`start`, `deleteCount?`): `T`[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The zero-based location in the array from which to start removing elements. |
| `deleteCount?` | `number` | The number of elements to remove. |

#### Returns

`T`[]

An array containing the elements that were deleted.

#### Inherited from

Array.splice

#### Defined in

typescript/lib/lib.es5.d.ts:1377

▸ **splice**(`start`, `deleteCount`, `...items`): `T`[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The zero-based location in the array from which to start removing elements. |
| `deleteCount` | `number` | The number of elements to remove. |
| `...items` | `T`[] | Elements to insert into the array in place of the deleted elements. |

#### Returns

`T`[]

An array containing the elements that were deleted.

#### Inherited from

Array.splice

#### Defined in

typescript/lib/lib.es5.d.ts:1385

___

### sum

▸ **sum**(): `string` \| `T`

The function `sum` returns the sum of all the elements in the array

#### Returns

`string` \| `T`

The return type is T | string.

#### Defined in

[src/Classes/ImprovedArray.ts:104](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/ImprovedArray.ts#L104)

___

### toJSONString

▸ **toJSONString**(): `string`

This function takes an object and returns a string that represents the object in JSON format.

#### Returns

`string`

The JSON string representation of the object.

#### Defined in

[src/Classes/ImprovedArray.ts:144](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/ImprovedArray.ts#L144)

___

### toLocaleString

▸ **toLocaleString**(): `string`

Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.

#### Returns

`string`

#### Inherited from

Array.toLocaleString

#### Defined in

typescript/lib/lib.es5.d.ts:1312

___

### toString

▸ **toString**(): `string`

Returns a string representation of an array.

#### Returns

`string`

#### Inherited from

Array.toString

#### Defined in

typescript/lib/lib.es5.d.ts:1308

___

### unshift

▸ **unshift**(`...items`): `number`

Inserts new elements at the start of an array, and returns the new length of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `T`[] | Elements to insert at the start of the array. |

#### Returns

`number`

#### Inherited from

Array.unshift

#### Defined in

typescript/lib/lib.es5.d.ts:1390

___

### values

▸ **values**(): `IterableIterator`<`T`\>

Returns an iterable of values in the array

#### Returns

`IterableIterator`<`T`\>

#### Inherited from

Array.values

#### Defined in

typescript/lib/lib.es2015.iterable.d.ts:75

___

### from

▸ `Static` **from**<`T`\>(`arrayLike`): `T`[]

Creates an array from an array-like object.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arrayLike` | `ArrayLike`<`T`\> | An array-like object to convert to an array. |

#### Returns

`T`[]

#### Inherited from

Array.from

#### Defined in

typescript/lib/lib.es2015.core.d.ts:72

▸ `Static` **from**<`T`, `U`\>(`arrayLike`, `mapfn`, `thisArg?`): `U`[]

Creates an array from an iterable object.

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arrayLike` | `ArrayLike`<`T`\> | An array-like object to convert to an array. |
| `mapfn` | (`v`: `T`, `k`: `number`) => `U` | A mapping function to call on every element of the array. |
| `thisArg?` | `any` | Value of 'this' used to invoke the mapfn. |

#### Returns

`U`[]

#### Inherited from

Array.from

#### Defined in

typescript/lib/lib.es2015.core.d.ts:80

▸ `Static` **from**<`T`\>(`iterable`): `T`[]

Creates an array from an iterable object.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iterable` | `Iterable`<`T`\> \| `ArrayLike`<`T`\> | An iterable object to convert to an array. |

#### Returns

`T`[]

#### Inherited from

Array.from

#### Defined in

typescript/lib/lib.es2015.iterable.d.ts:83

▸ `Static` **from**<`T`, `U`\>(`iterable`, `mapfn`, `thisArg?`): `U`[]

Creates an array from an iterable object.

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iterable` | `Iterable`<`T`\> \| `ArrayLike`<`T`\> | An iterable object to convert to an array. |
| `mapfn` | (`v`: `T`, `k`: `number`) => `U` | A mapping function to call on every element of the array. |
| `thisArg?` | `any` | Value of 'this' used to invoke the mapfn. |

#### Returns

`U`[]

#### Inherited from

Array.from

#### Defined in

typescript/lib/lib.es2015.iterable.d.ts:91

___

### isArray

▸ `Static` **isArray**(`arg`): arg is any[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `any` |

#### Returns

arg is any[]

#### Inherited from

Array.isArray

#### Defined in

typescript/lib/lib.es5.d.ts:1491

___

### of

▸ `Static` **of**<`T`\>(`...items`): `T`[]

Returns a new array from a set of elements.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `T`[] | A set of elements to include in the new array object. |

#### Returns

`T`[]

#### Inherited from

Array.of

#### Defined in

typescript/lib/lib.es2015.core.d.ts:86
