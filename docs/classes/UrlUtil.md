[sussy-util](../README.md) / [classes](./README.md) / UrlUtil

# Class: UrlUtil

## Table of contents

### Constructors

- [constructor](UrlUtil.md#constructor)

### Properties

- [instance](UrlUtil.md#instance)

### Methods

- [addQueryParams](UrlUtil.md#addqueryparams)
- [editQueryParams](UrlUtil.md#editqueryparams)
- [getDomainName](UrlUtil.md#getdomainname)
- [getPath](UrlUtil.md#getpath)
- [getQueryParamValue](UrlUtil.md#getqueryparamvalue)
- [getQueryParams](UrlUtil.md#getqueryparams)
- [hasQueryParams](UrlUtil.md#hasqueryparams)
- [isUrl](UrlUtil.md#isurl)
- [parseUrl](UrlUtil.md#parseurl)
- [removeQueryParam](UrlUtil.md#removequeryparam)
- [updatePath](UrlUtil.md#updatepath)
- [getInstance](UrlUtil.md#getinstance)

## Constructors

### constructor

• `Private` **new UrlUtil**()

#### Defined in

[UrlUtil.ts:5](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/UrlUtil.ts#L5)

## Properties

### instance

▪ `Static` `Private` **instance**: [`UrlUtil`](UrlUtil.md)

#### Defined in

[UrlUtil.ts:4](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/UrlUtil.ts#L4)

## Methods

### addQueryParams

▸ **addQueryParams**(`url`, `params`): `string`

It takes a URL and a set of key-value pairs and returns a new URL with the key-value pairs added
as query parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | string - The URL to add the query parameters to. |
| `params` | `UrlUtil`<`string`\> | MutableObject<string> |

#### Returns

`string`

A string

#### Defined in

[UrlUtil.ts:55](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/UrlUtil.ts#L55)

___

### editQueryParams

▸ **editQueryParams**(`url`, `params`): `string`

It takes a URL and a set of key-value pairs, and returns a new URL with the query parameters
updated to match the key-value pairs

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | string - The URL to edit |
| `params` | `UrlUtil`<`string`\> | MutableObject<string> |

#### Returns

`string`

A string

#### Defined in

[UrlUtil.ts:80](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/UrlUtil.ts#L80)

___

### getDomainName

▸ **getDomainName**(`url`): `string`

It takes a URL as a string, and returns the domain name as a string

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The URL to get the domain name from. |

#### Returns

`string`

The hostname of the URL.

#### Defined in

[UrlUtil.ts:35](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/UrlUtil.ts#L35)

___

### getPath

▸ **getPath**(`url`): `string`

It takes a URL and returns the pathname of the URL

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The URL to parse. |

#### Returns

`string`

The pathname of the url.

#### Defined in

[UrlUtil.ts:44](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/UrlUtil.ts#L44)

___

### getQueryParamValue

▸ **getQueryParamValue**(`url`, `param`): ``null`` \| `string`

It takes a URL and a query parameter name, and returns the value of the specified query parameter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The URL to extract the query parameter value from. |
| `param` | `string` | The query parameter name. |

#### Returns

``null`` \| `string`

The value of the specified query parameter, or null if it doesn't exist.

#### Defined in

[UrlUtil.ts:110](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/UrlUtil.ts#L110)

___

### getQueryParams

▸ **getQueryParams**(`url`): `UrlUtil`<`string`\>

It takes a URL and returns an object containing the query parameters as key-value pairs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The URL to extract query parameters from. |

#### Returns

`UrlUtil`<`string`\>

An object containing the query parameters.

#### Defined in

[UrlUtil.ts:96](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/UrlUtil.ts#L96)

___

### hasQueryParams

▸ **hasQueryParams**(`url`): `boolean`

It takes a URL and returns a boolean indicating whether it has any query parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The URL to check for query parameters. |

#### Returns

`boolean`

A boolean value indicating if the URL has query parameters.

#### Defined in

[UrlUtil.ts:132](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/UrlUtil.ts#L132)

___

### isUrl

▸ **isUrl**(`url`): `boolean`

If the URL is valid, it will return true, otherwise it will return false.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The URL to validate. |

#### Returns

`boolean`

A boolean value.

#### Defined in

[UrlUtil.ts:12](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/UrlUtil.ts#L12)

___

### parseUrl

▸ **parseUrl**(`url`): `URL`

It takes a string and returns a URL object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The URL to parse. |

#### Returns

`URL`

A new URL object.

#### Defined in

[UrlUtil.ts:26](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/UrlUtil.ts#L26)

___

### removeQueryParam

▸ **removeQueryParam**(`url`, `param`): `string`

It takes a URL and a query parameter name, and returns the URL with the query parameter removed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The URL to be parsed. |
| `param` | `string` | The query parameter to remove |

#### Returns

`string`

A string

#### Defined in

[UrlUtil.ts:67](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/UrlUtil.ts#L67)

___

### updatePath

▸ **updatePath**(`url`, `newPath`): `string`

It takes a URL and a new path, and returns a new URL with the updated path.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The URL to update the path for. |
| `newPath` | `string` | The new path to set. |

#### Returns

`string`

The updated URL with the new path.

#### Defined in

[UrlUtil.ts:121](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/UrlUtil.ts#L121)

___

### getInstance

▸ `Static` **getInstance**(): [`UrlUtil`](UrlUtil.md)

#### Returns

[`UrlUtil`](UrlUtil.md)

#### Defined in

[UrlUtil.ts:137](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/UrlUtil.ts#L137)
