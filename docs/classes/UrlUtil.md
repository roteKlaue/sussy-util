[sussy-util](../README.md) / [classes](./README.md) / UrlUtil

# Class: UrlUtil

## Table of contents

### Constructors

- [constructor](UrlUtil.md#constructor)

### Methods

- [addQueryParams](UrlUtil.md#addqueryparams)
- [editQueryParams](UrlUtil.md#editqueryparams)
- [getDomainName](UrlUtil.md#getdomainname)
- [getPath](UrlUtil.md#getpath)
- [isUrl](UrlUtil.md#isurl)
- [parseUrl](UrlUtil.md#parseurl)
- [removeQueryParam](UrlUtil.md#removequeryparam)

## Constructors

### constructor

• **new UrlUtil**(`Constructor`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `Constructor` | `Function` |

#### Inherited from

AbstractClass.constructor

#### Defined in

[AbstractClass.ts:3](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/2ba93e9/src/Classes/AbstractClass.ts#L3)

## Methods

### addQueryParams

▸ `Static` **addQueryParams**(`url`, `params`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `params` | `MutableObject`<`string`\> |

#### Returns

`string`

#### Defined in

UrlUtil.ts:31

___

### editQueryParams

▸ `Static` **editQueryParams**(`url`, `params`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `params` | `UrlUtil`<`string`\> |

#### Returns

`string`

#### Defined in

UrlUtil.ts:43

___

### getDomainName

▸ `Static` **getDomainName**(`url`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`string`

#### Defined in

UrlUtil.ts:23

___

### getPath

▸ `Static` **getPath**(`url`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`string`

#### Defined in

UrlUtil.ts:27

___

### isUrl

▸ `Static` **isUrl**(`url`): `boolean`

If the URL is valid, it will return true, otherwise it will return false.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The URL to validate. |

#### Returns

`boolean`

A boolean value.

#### Defined in

UrlUtil.ts:10

___

### parseUrl

▸ `Static` **parseUrl**(`url`): `URL`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`URL`

#### Defined in

UrlUtil.ts:19

___

### removeQueryParam

▸ `Static` **removeQueryParam**(`url`, `param`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `param` | `string` |

#### Returns

`string`

#### Defined in

UrlUtil.ts:37
