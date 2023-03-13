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

#### Overrides

AbstractClass.constructor

#### Defined in

[DataConverter.ts:4](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/DataConverter.ts#L4)

## Methods

### csvToJson

▸ `Static` **csvToJson**(`csv`): `object`[]

It takes a CSV string and returns an array of objects.
The first line of the CSV is assumed to be the header row.
The header row is used to create the keys for the objects in the array.
The values for the keys are taken from the subsequent rows.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `csv` | `string` | string - The CSV string you want to convert to JSON |

#### Returns

`object`[]

An array of objects.

#### Defined in

[DataConverter.ts:16](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/DataConverter.ts#L16)

___

### jsonToCsv

▸ `Static` **jsonToCsv**(`json`, `del?`): `string`

It takes an array of objects and returns a CSV string.
The first object in the array is taken as for the properties of the csv string.

The function takes two parameters:
json: an array of objects
del: the delimiter to use in the CSV string (DataConverters to a comma)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `json` | `object`[] | `undefined` | object[] - The JSON object you want to convert to CSV. |
| `del?` | `string` | `","` | The delimiter to use in the CSV file. |

#### Returns

`string`

A string

#### Defined in

[DataConverter.ts:46](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/DataConverter.ts#L46)
