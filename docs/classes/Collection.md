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
- [count](Collection.md#count)
- [delete](Collection.md#delete)
- [entries](Collection.md#entries)
- [forEach](Collection.md#foreach)
- [get](Collection.md#get)
- [has](Collection.md#has)
- [keys](Collection.md#keys)
- [missing](Collection.md#missing)
- [remove](Collection.md#remove)
- [set](Collection.md#set)
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

Map.\_\_@toStringTag@225

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

Map.\_\_@species@179

#### Defined in

typescript/lib/lib.es2015.symbol.wellknown.d.ts:317

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<[`K`, `V`]\>

Returns an iterable of entries in the map.

#### Returns

`IterableIterator`<[`K`, `V`]\>

#### Inherited from

Map.\_\_@iterator@82

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

### count

▸ **count**(): `number`

It returns the size of the stack.

#### Returns

`number`

The size of the list.

#### Defined in

[src/Classes/Collection.ts:34](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/Collection.ts#L34)

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

[src/Classes/Collection.ts:43](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/Collection.ts#L43)

___

### remove

▸ **remove**(`key`): `undefined` \| `MapEntry`<`K`, `V`\>

It removes the key and value from the map.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | The key of the element to remove from the Map object. |

#### Returns

`undefined` \| `MapEntry`<`K`, `V`\>

The object that was removed from the map.

#### Defined in

[src/Classes/Collection.ts:9](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/Collection.ts#L9)

___

### set

▸ **set**(`key`, `value`): [`MapEntry`](../types/MapEntry.md)<`K`, `V`\>

Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | `V` |

#### Returns

[`MapEntry`](../types/MapEntry.md)<`K`, `V`\>

#### Inherited from

Map.set

#### Defined in

typescript/lib/lib.es2015.collection.d.ts:44

___

### toArray

▸ **toArray**(): [`MapEntry`](../types/MapEntry.md)<`K`, `V`\>[]

It converts the map to an array of objects.

#### Returns

[`MapEntry`](../types/MapEntry.md)<`K`, `V`\> []

An array of objects with key and value properties.

#### Defined in

[src/Classes/Collection.ts:26](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/Collection.ts#L26)

___

### toJSONString

▸ **toJSONString**(): `string`

It converts the object to a JSON string.

#### Returns

`string`

The JSON string representation of the array.

#### Defined in

[src/Classes/Collection.ts:51](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/Collection.ts#L51)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[src/Classes/Collection.ts:18](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/Collection.ts#L18)

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
