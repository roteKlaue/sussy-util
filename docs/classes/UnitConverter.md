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
- [kilogramsToPounds](UnitConverter.md#kilogramstopounds)
- [kilometersPerHourToMilesPerHour](UnitConverter.md#kilometersperhourtomilesperhour)
- [kilometersToMiles](UnitConverter.md#kilometerstomiles)
- [milesPerHourToKilometersPerHour](UnitConverter.md#milesperhourtokilometersperhour)
- [milesToKilometers](UnitConverter.md#milestokilometers)
- [poundsToKilograms](UnitConverter.md#poundstokilograms)

## Constructors

### constructor

• **new UnitConverter**()

## Properties

### FAHRENHEIT\_TO\_CELSIUS\_FACTOR

▪ `Static` `Private` `Readonly` **FAHRENHEIT\_TO\_CELSIUS\_FACTOR**: `number`

#### Defined in

[src/Classes/UnitConverter.ts:7](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/UnitConverter.ts#L7)

___

### FAHRENHEIT\_TO\_CELSIUS\_OFFSET

▪ `Static` `Private` `Readonly` **FAHRENHEIT\_TO\_CELSIUS\_OFFSET**: ``32``

#### Defined in

[src/Classes/UnitConverter.ts:5](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/UnitConverter.ts#L5)

___

### KELVIN\_TO\_CELSIUS\_OFFSET

▪ `Static` `Private` `Readonly` **KELVIN\_TO\_CELSIUS\_OFFSET**: ``273.15``

#### Defined in

[src/Classes/UnitConverter.ts:6](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/UnitConverter.ts#L6)

___

### KILOMETERS\_PER\_MILE

▪ `Static` `Private` `Readonly` **KILOMETERS\_PER\_MILE**: ``1.60934``

#### Defined in

[src/Classes/UnitConverter.ts:4](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/UnitConverter.ts#L4)

___

### map

▪ `Static` `Private` `Readonly` **map**: `default`<`undefined` \| `default`<(`arg0`: `number`) => `undefined` \| `number`\>\>

#### Defined in

[src/Classes/UnitConverter.ts:9](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/UnitConverter.ts#L9)

## Methods

### celsiusToFahrenheit

▸ `Static` **celsiusToFahrenheit**(`celsius`): `number`

Convert a temperature in Celsius to Fahrenheit.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `celsius` | `number` | number - The temperature in celsius |

#### Returns

`number`

The temperature in Fahrenheit.

#### Defined in

[src/Classes/UnitConverter.ts:91](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/UnitConverter.ts#L91)

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

[src/Classes/UnitConverter.ts:44](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/UnitConverter.ts#L44)

___

### convert

▸ `Static` **convert**(`value`, `from`, `to`): `number`

If the conversion is not possible, throws an error, otherwise, returns the result of the
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

[src/Classes/UnitConverter.ts:113](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/UnitConverter.ts#L113)

___

### fahrenheitToCelsius

▸ `Static` **fahrenheitToCelsius**(`fahrenheit`): `number`

Convert a temperature in Fahrenheit to Celsius.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fahrenheit` | `number` | number - The temperature in Fahrenheit |

#### Returns

`number`

The return value is the result of the calculation.

#### Defined in

[src/Classes/UnitConverter.ts:100](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/UnitConverter.ts#L100)

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

[src/Classes/UnitConverter.ts:54](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/UnitConverter.ts#L54)

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

[src/Classes/UnitConverter.ts:35](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/UnitConverter.ts#L35)

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

[src/Classes/UnitConverter.ts:64](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/UnitConverter.ts#L64)

___

### kilogramsToPounds

▸ `Static` **kilogramsToPounds**(`kilograms`): `number`

Converts a weight from kilograms to pounds.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `kilograms` | `number` | The weight in kilograms. |

#### Returns

`number`

The weight in pounds.

#### Defined in

[src/Classes/UnitConverter.ts:145](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/UnitConverter.ts#L145)

___

### kilometersPerHourToMilesPerHour

▸ `Static` **kilometersPerHourToMilesPerHour**(`kmPerHour`): `number`

Converts a speed from kilometers per hour to miles per hour.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `kmPerHour` | `number` | The speed in kilometers per hour. |

#### Returns

`number`

The speed in miles per hour.

#### Defined in

[src/Classes/UnitConverter.ts:127](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/UnitConverter.ts#L127)

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

[src/Classes/UnitConverter.ts:73](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/UnitConverter.ts#L73)

___

### milesPerHourToKilometersPerHour

▸ `Static` **milesPerHourToKilometersPerHour**(`mph`): `number`

Converts a speed from miles per hour to kilometers per hour.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mph` | `number` | The speed in miles per hour. |

#### Returns

`number`

The speed in kilometers per hour.

#### Defined in

[src/Classes/UnitConverter.ts:136](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/UnitConverter.ts#L136)

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

[src/Classes/UnitConverter.ts:82](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/UnitConverter.ts#L82)

___

### poundsToKilograms

▸ `Static` **poundsToKilograms**(`pounds`): `number`

Converts a weight from pounds to kilograms.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pounds` | `number` | The weight in pounds. |

#### Returns

`number`

The weight in kilograms.

#### Defined in

[src/Classes/UnitConverter.ts:154](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/UnitConverter.ts#L154)