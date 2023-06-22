[sussy-util](../README.md) / [classes](./README.md) / DataConverter

# Class: DataConverter

## Table of contents

### Constructors

- [constructor](DataConverter.md#constructor)

### Methods

- [csvToJson](DataConverter.md#csvtojson)
- [jsonToCsv](DataConverter.md#jsontocsv)

## Constructors

### constructor

• **new DataConverter**()

## Methods

### csvToJson

▸ `Static` **csvToJson**(`csv`, `del?`): `default`[]

It takes a CSV string and returns an array of objects.
The first line of the CSV is assumed to be the header row.
The header row is used to create the keys for the objects in the array.
The values for the keys are taken from the subsequent rows.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `csv` | `string` | `undefined` | string - The CSV string you want to convert to JSON |
| `del?` | `string` | `","` | The delimiter in use in the CSV file. |

#### Returns

`default`[]

An array of objects.

#### Defined in

[src/Classes/DataConverter.ts:13](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/DataConverter.ts#L13)

___

### jsonToCsv

▸ `Static` **jsonToCsv**(`json`, `del?`): `string`

It takes an array of objects and returns a CSV string.
The first object in the array is taken as for the properties of the csv string.

The function takes two parameters:
json: an array of objects
del: the delimiter to use in the CSV string (defaults to a comma)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `json` | `default`[] | `undefined` | object[] - The JSON object you want to convert to CSV. |
| `del?` | `string` | `","` | The delimiter to use in the CSV file. |

#### Returns

`string`

A string

#### Defined in

[src/Classes/DataConverter.ts:58](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/DataConverter.ts#L58)
