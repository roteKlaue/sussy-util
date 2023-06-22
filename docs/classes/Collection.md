[sussy-util](../README.md) / [classes](./README.md) / Collection

# Class: Collection<K, V\>

## Type parameters

| Name |
| :------ |
| `K` |
| `V` |

## Hierarchy

- `Map`<`K`, `V`\>

  ↳ **`Collection`**

## Table of contents

### Constructors

- [constructor](Collection.md#constructor)

### Properties

- [[toStringTag]](Collection.md#[tostringtag])
- [size](Collection.md#size)
- [[species]](Collection.md#[species])

### Methods

- [[iterator]](Collection.md#[iterator])
- [clear](Collection.md#clear)
- [contains](Collection.md#contains)
- [count](Collection.md#count)
- [delete](Collection.md#delete)
- [entries](Collection.md#entries)
- [every](Collection.md#every)
- [filter](Collection.md#filter)
- [forEach](Collection.md#foreach)
- [get](Collection.md#get)
- [has](Collection.md#has)
- [keys](Collection.md#keys)
- [map](Collection.md#map)
- [merge](Collection.md#merge)
- [missing](Collection.md#missing)
- [reduce](Collection.md#reduce)
- [remove](Collection.md#remove)
- [set](Collection.md#set)
- [some](Collection.md#some)
- [toArray](Collection.md#toarray)
- [toJSONString](Collection.md#tojsonstring)
- [toString](Collection.md#tostring)
- [values](Collection.md#values)

## Constructors

### constructor

• **new Collection**<`K`, `V`\>(`entries?`)

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `entries?` | ``null`` \| readonly readonly [`K`, `V`][] |

#### Inherited from

Map<K, V\>.constructor

#### Defined in

typescript/lib/lib.es2015.collection.d.ts:53

• **new Collection**<`K`, `V`\>(`iterable?`)

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable?` | ``null`` \| `Iterable`<readonly [`K`, `V`]\> |

#### Inherited from

Map<K, V\>.constructor

#### Defined in

typescript/lib/lib.es2015.iterable.d.ts:161

## Properties

### [toStringTag]

• `Readonly` **[toStringTag]**: `string`

#### Inherited from

Map.\_\_@toStringTag@104

#### Defined in

typescript/lib/lib.es2015.symbol.wellknown.d.ts:135

___

### size

• `Readonly` **size**: `number`

#### Inherited from

Map.size

#### Defined in

typescript/lib/lib.es2015.collection.d.ts:48

___

### [species]

▪ `Static` `Readonly` **[species]**: `MapConstructor`

#### Inherited from

Map.\_\_@species@221

#### Defined in

typescript/lib/lib.es2015.symbol.wellknown.d.ts:317

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<[`K`, `V`]\>

Returns an iterable of entries in the map.

#### Returns

`IterableIterator`<[`K`, `V`]\>

#### Inherited from

Map.\_\_@iterator@124

#### Defined in

typescript/lib/lib.es2015.iterable.d.ts:121

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

Map.clear

#### Defined in

typescript/lib/lib.es2015.collection.d.ts:23

___

### contains

▸ **contains**(`value`): `boolean`

It checks if the map contains a specific value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `V` | The value to search for in the map. |

#### Returns

`boolean`

A boolean value indicating whether the value is found in the map.

#### Defined in

[src/Classes/Collection.ts:62](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Collection.ts#L62)

___

### count

▸ **count**(): `number`

It returns the size of the stack.

#### Returns

`number`

The size of the list.

#### Defined in

[src/Classes/Collection.ts:36](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Collection.ts#L36)

___

### delete

▸ **delete**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`boolean`

true if an element in the Map existed and has been removed, or false if the element does not exist.

#### Inherited from

Map.delete

#### Defined in

typescript/lib/lib.es2015.collection.d.ts:27

___

### entries

▸ **entries**(): `IterableIterator`<[`K`, `V`]\>

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

`IterableIterator`<[`K`, `V`]\>

#### Inherited from

Map.entries

#### Defined in

typescript/lib/lib.es2015.iterable.d.ts:126

___

### every

▸ **every**(`predicate`): `boolean`

It checks if all entries in the Collection satisfy the provided predicate function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | `Predicate`<`V`, `K`\> | A predicate function that is called for each entry with arguments (value, key, collection). |

#### Returns

`boolean`

A boolean value indicating whether all entries satisfy the predicate function.

#### Defined in

[src/Classes/Collection.ts:129](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Collection.ts#L129)

___

### filter

▸ **filter**(`predicate`): [`Collection`](Collection.md)<`K`, `V`\>

It returns a new Collection containing entries that satisfy the provided predicate function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | `Predicate`<`V`, `K`\> | A predicate function that is called for each entry with arguments (value, key, collection). |

#### Returns

[`Collection`](Collection.md)<`K`, `V`\>

A new Collection containing entries that satisfy the predicate function.

#### Defined in

[src/Classes/Collection.ts:86](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Collection.ts#L86)

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

Executes a provided function once per each key/value pair in the Map, in insertion order.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `V`, `key`: `K`, `map`: `Map`<`K`, `V`\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Inherited from

Map.forEach

#### Defined in

typescript/lib/lib.es2015.collection.d.ts:31

___

### get

▸ **get**(`key`): `undefined` \| `V`

Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`undefined` \| `V`

Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.

#### Inherited from

Map.get

#### Defined in

typescript/lib/lib.es2015.collection.d.ts:36

___

### has

▸ **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`boolean`

boolean indicating whether an element with the specified key exists or not.

#### Inherited from

Map.has

#### Defined in

typescript/lib/lib.es2015.collection.d.ts:40

___

### keys

▸ **keys**(): `IterableIterator`<`K`\>

Returns an iterable of keys in the map

#### Returns

`IterableIterator`<`K`\>

#### Inherited from

Map.keys

#### Defined in

typescript/lib/lib.es2015.iterable.d.ts:131

___

### map

▸ **map**<`U`\>(`transformFn`): [`Collection`](Collection.md)<`K`, `U`\>

It performs a transformation on each entry in the Collection and returns a new Collection with the transformed entries.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transformFn` | (`value`: `V`, `key`: `K`, `collection`: [`Collection`](Collection.md)<`K`, `V`\>) => `U` | A function that is called for each entry with arguments (value, key, collection). |

#### Returns

[`Collection`](Collection.md)<`K`, `U`\>

A new Collection with the transformed entries.

#### Defined in

[src/Classes/Collection.ts:101](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Collection.ts#L101)

___

### merge

▸ **merge**(`map`): `void`

It merges the entries from another map into the current map.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `map` | [`Collection`](Collection.md)<`K`, `V`\> | The map to merge with the current map. |

#### Returns

`void`

#### Defined in

[src/Classes/Collection.ts:75](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Collection.ts#L75)

___

### missing

▸ **missing**(`key`): `boolean`

returns true if the key is not in the map

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | K |

#### Returns

`boolean`

A boolean value.

#### Defined in

[src/Classes/Collection.ts:45](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Collection.ts#L45)

___

### reduce

▸ **reduce**<`U`\>(`reducer`, `initialValue`): `U`

It performs a reduce operation on the Collection, accumulating a single value based on the entries.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reducer` | (`accumulator`: `U`, `value`: `V`, `key`: `K`, `collection`: [`Collection`](Collection.md)<`K`, `V`\>) => `U` | A reducer function that is called for each entry with arguments (accumulator, value, key, collection). |
| `initialValue` | `U` | An initial value for the accumulator. |

#### Returns

`U`

The accumulated value after applying the reducer function to each entry.

#### Defined in

[src/Classes/Collection.ts:116](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Collection.ts#L116)

___

### remove

▸ **remove**(`key`): `undefined` \| `default`<`K`, `V`\>

It removes the key and value from the map.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | The key of the element to remove from the Map object. |

#### Returns

`undefined` \| `default`<`K`, `V`\>

The object that was removed from the map.

#### Defined in

[src/Classes/Collection.ts:11](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Collection.ts#L11)

___

### set

▸ **set**(`key`, `value`): [`Collection`](Collection.md)<`K`, `V`\>

Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | `V` |

#### Returns

[`Collection`](Collection.md)<`K`, `V`\>

#### Inherited from

Map.set

#### Defined in

typescript/lib/lib.es2015.collection.d.ts:44

___

### some

▸ **some**(`predicate`): `boolean`

It checks if any entry in the Collection satisfies the provided predicate function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | `Predicate`<`V`, `K`\> | A predicate function that is called for each entry with arguments (value, key, collection). |

#### Returns

`boolean`

A boolean value indicating whether any entry satisfies the predicate function.

#### Defined in

[src/Classes/Collection.ts:143](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Collection.ts#L143)

___

### toArray

▸ **toArray**(): `default`<`K`, `V`\>[]

It converts the map to an array of objects.

#### Returns

`default`<`K`, `V`\>[]

An array of objects with key and value properties.

#### Defined in

[src/Classes/Collection.ts:28](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Collection.ts#L28)

___

### toJSONString

▸ **toJSONString**(): `string`

It converts the object to a JSON string.

#### Returns

`string`

The JSON string representation of the array.

#### Defined in

[src/Classes/Collection.ts:53](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Collection.ts#L53)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[src/Classes/Collection.ts:20](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Collection.ts#L20)

___

### values

▸ **values**(): `IterableIterator`<`V`\>

Returns an iterable of values in the map

#### Returns

`IterableIterator`<`V`\>

#### Inherited from

Map.values

#### Defined in

typescript/lib/lib.es2015.iterable.d.ts:136
