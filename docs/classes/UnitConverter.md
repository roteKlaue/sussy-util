[sussy-util](../README.md) / [classes](./README.md) / UnitConverter

# Class: UnitConverter

## Table of contents

### Constructors

- [constructor](UnitConverter.md#constructor)

### Properties

- [FAHRENHEIT\_TO\_CELSIUS\_FACTOR](UnitConverter.md#fahrenheit_to_celsius_factor)
- [FAHRENHEIT\_TO\_CELSIUS\_OFFSET](UnitConverter.md#fahrenheit_to_celsius_offset)
- [KELVIN\_TO\_CELSIUS\_OFFSET](UnitConverter.md#kelvin_to_celsius_offset)
- [KILOMETERS\_PER\_MILE](UnitConverter.md#kilometers_per_mile)
- [map](UnitConverter.md#map)

### Methods

- [celsiusToFahrenheit](UnitConverter.md#celsiustofahrenheit)
- [celsiusToKelvin](UnitConverter.md#celsiustokelvin)
- [convert](UnitConverter.md#convert)
- [fahrenheitToCelsius](UnitConverter.md#fahrenheittocelsius)
- [fahrenheitToKelvin](UnitConverter.md#fahrenheittokelvin)
- [kelvinToCelsius](UnitConverter.md#kelvintocelsius)
- [kelvinToFahrenheit](UnitConverter.md#kelvintofahrenheit)
- [kilometersToMiles](UnitConverter.md#kilometerstomiles)
- [milesToKilometers](UnitConverter.md#milestokilometers)

## Constructors

### constructor

• **new UnitConverter**()

#### Overrides

AbstractClass.constructor

#### Defined in

[UnitConverter.ts:31](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/UnitConverter.ts#L31)

## Properties

### FAHRENHEIT\_TO\_CELSIUS\_FACTOR

▪ `Static` `Private` `Readonly` **FAHRENHEIT\_TO\_CELSIUS\_FACTOR**: `number`

#### Defined in

[UnitConverter.ts:8](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/UnitConverter.ts#L8)

___

### FAHRENHEIT\_TO\_CELSIUS\_OFFSET

▪ `Static` `Private` `Readonly` **FAHRENHEIT\_TO\_CELSIUS\_OFFSET**: ``32``

#### Defined in

[UnitConverter.ts:6](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/UnitConverter.ts#L6)

___

### KELVIN\_TO\_CELSIUS\_OFFSET

▪ `Static` `Private` `Readonly` **KELVIN\_TO\_CELSIUS\_OFFSET**: ``273.15``

#### Defined in

[UnitConverter.ts:7](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/UnitConverter.ts#L7)

___

### KILOMETERS\_PER\_MILE

▪ `Static` `Private` `Readonly` **KILOMETERS\_PER\_MILE**: ``1.60934``

#### Defined in

[UnitConverter.ts:5](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/UnitConverter.ts#L5)

___

### map

▪ `Static` `Private` `Readonly` **map**: `MutableObject`<`undefined` \| `MutableObject`<(`arg0`: `number`) => `undefined` \| `number`\>\>

#### Defined in

[UnitConverter.ts:10](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/UnitConverter.ts#L10)

## Methods

### celsiusToFahrenheit

▸ `Static` **celsiusToFahrenheit**(`celsius`): `number`

"Convert a temperature in Celsius to Fahrenheit."

The first line of the function is a comment. It's a good idea to include a comment at the top of
each function that describes what the function does

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `celsius` | `number` | number - The temperature in celsius |

#### Returns

`number`

The temperature in Fahrenheit.

#### Defined in

[UnitConverter.ts:99](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/UnitConverter.ts#L99)

___

### celsiusToKelvin

▸ `Static` **celsiusToKelvin**(`val`): `number`

Convert a temperature in Celsius to Kelvin.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | number - The value to convert. |

#### Returns

`number`

The value of the argument minus 273.15

#### Defined in

[UnitConverter.ts:49](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/UnitConverter.ts#L49)

___

### convert

▸ `Static` **convert**(`value`, `from`, `to`): `number`

If the conversion is not possible, throw an error, otherwise, return the result of the
conversion.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | number - The value to convert |
| `from` | ``"Celsius"`` \| ``"Fahrenheit"`` \| ``"Kelvin"`` \| ``"Miles"`` \| ``"Kilometers"`` | UnitType |
| `to` | ``"Celsius"`` \| ``"Fahrenheit"`` \| ``"Kelvin"`` \| ``"Miles"`` \| ``"Kilometers"`` | UnitType - The unit type to convert to |

#### Returns

`number`

The return value is the result of the conversion

#### Defined in

[UnitConverter.ts:124](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/UnitConverter.ts#L124)

___

### fahrenheitToCelsius

▸ `Static` **fahrenheitToCelsius**(`fahrenheit`): `number`

"Convert a temperature in Fahrenheit to Celsius."

The first line of the function is a comment. It's a good idea to include a comment at the top of
each function that describes what the function does

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fahrenheit` | `number` | number - The temperature in Fahrenheit |

#### Returns

`number`

The return value is the result of the calculation.

#### Defined in

[UnitConverter.ts:111](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/UnitConverter.ts#L111)

___

### fahrenheitToKelvin

▸ `Static` **fahrenheitToKelvin**(`val`): `number`

Convert a temperature in Fahrenheit to Kelvin by first converting it to Celsius and then to
Kelvin.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | number - The value to convert |

#### Returns

`number`

The value of the function call.

#### Defined in

[UnitConverter.ts:59](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/UnitConverter.ts#L59)

___

### kelvinToCelsius

▸ `Static` **kelvinToCelsius**(`val`): `number`

This function takes a number and adds 273.15 to it.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | number - The value to convert |

#### Returns

`number`

The value of the variable val plus the value of the constant KELVIN_TO_CELSIUS_OFFSET.

#### Defined in

[UnitConverter.ts:40](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/UnitConverter.ts#L40)

___

### kelvinToFahrenheit

▸ `Static` **kelvinToFahrenheit**(`val`): `number`

Convert a temperature in Kelvin to Fahrenheit by first converting it to Celsius and then to
Fahrenheit.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | number - The value to convert |

#### Returns

`number`

The value of the function call.

#### Defined in

[UnitConverter.ts:69](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/UnitConverter.ts#L69)

___

### kilometersToMiles

▸ `Static` **kilometersToMiles**(`kilometers`): `number`

Convert kilometers to miles.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `kilometers` | `number` | number |

#### Returns

`number`

The number of miles in the given number of kilometers.

#### Defined in

[UnitConverter.ts:78](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/UnitConverter.ts#L78)

___

### milesToKilometers

▸ `Static` **milesToKilometers**(`miles`): `number`

Converts miles to kilometers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `miles` | `number` | number - The number of miles to convert to kilometers. |

#### Returns

`number`

The number of kilometers per mile.

#### Defined in

[UnitConverter.ts:87](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/UnitConverter.ts#L87)
