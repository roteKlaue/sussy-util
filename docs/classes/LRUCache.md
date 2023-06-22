[sussy-util](../README.md) / [classes](./README.md) / LRUCache

# Class: LRUCache<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](LRUCache.md#constructor)

### Properties

- [cache](LRUCache.md#cache)
- [currentSize](LRUCache.md#currentsize)
- [maxSize](LRUCache.md#maxsize)

### Methods

- [add](LRUCache.md#add)
- [get](LRUCache.md#get)
- [removeLRU](LRUCache.md#removelru)

## Constructors

### constructor

• **new LRUCache**<`T`\>(`maxSize`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxSize` | `number` |

#### Defined in

[src/Classes/LRUCache.ts:6](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/LRUCache.ts#L6)

## Properties

### cache

• `Private` **cache**: `Map`<`string`, { `timestamp`: `number` ; `value`: `T`  }\>

#### Defined in

[src/Classes/LRUCache.ts:2](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/LRUCache.ts#L2)

___

### currentSize

• `Private` **currentSize**: `number` = `0`

#### Defined in

[src/Classes/LRUCache.ts:4](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/LRUCache.ts#L4)

___

### maxSize

• `Private` **maxSize**: `number`

#### Defined in

[src/Classes/LRUCache.ts:3](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/LRUCache.ts#L3)

## Methods

### add

▸ **add**(`key`, `value`): `void`

If the key exists, update the timestamp and value, otherwise, if the cache is full, remove the
least recently used item, otherwise, add the key, value, and timestamp to the cache.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | string - The key to store the value under |
| `value` | `T` | The value to be stored in the cache |

#### Returns

`void`

The value of the key.

#### Defined in

[src/Classes/LRUCache.ts:20](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/LRUCache.ts#L20)

___

### get

▸ **get**(`key`): `undefined` \| `T`

If the key exists in the cache, update the timestamp and return the value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | string - The key to retrieve the value for. |

#### Returns

`undefined` \| `T`

The value of the entry.value property.

#### Defined in

[src/Classes/LRUCache.ts:41](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/LRUCache.ts#L41)

___

### removeLRU

▸ **removeLRU**(): `void`

We iterate through the cache, and find the key with the lowest timestamp, and then delete that
key from the cache.

#### Returns

`void`

#### Defined in

[src/Classes/LRUCache.ts:54](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/LRUCache.ts#L54)
