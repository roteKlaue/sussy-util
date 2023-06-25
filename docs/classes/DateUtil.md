[sussy-util](../README.md) / [classes](./README.md) / DateUtil

# Class: DateUtil

## Table of contents

### Constructors

- [constructor](DateUtil.md#constructor)

### Properties

- [dFullNames](DateUtil.md#dfullnames)
- [dayAbrs](DateUtil.md#dayabrs)
- [instance](DateUtil.md#instance)
- [mFullNames](DateUtil.md#mfullnames)
- [monthAbrs](DateUtil.md#monthabrs)

### Methods

- [addDays](DateUtil.md#adddays)
- [compareDates](DateUtil.md#comparedates)
- [equals](DateUtil.md#equals)
- [formatDate](DateUtil.md#formatdate)
- [getCurrentDate](DateUtil.md#getcurrentdate)
- [getCurrentTimestamp](DateUtil.md#getcurrenttimestamp)
- [getDayAbbr](DateUtil.md#getdayabbr)
- [getDayFullName](DateUtil.md#getdayfullname)
- [getDaysDiff](DateUtil.md#getdaysdiff)
- [getMonthAbbr](DateUtil.md#getmonthabbr)
- [getMonthFirstDay](DateUtil.md#getmonthfirstday)
- [getMonthFullName](DateUtil.md#getmonthfullname)
- [getMonthLastDay](DateUtil.md#getmonthlastday)
- [isAfter](DateUtil.md#isafter)
- [isBefore](DateUtil.md#isbefore)
- [isLeapYear](DateUtil.md#isleapyear)
- [isWeekend](DateUtil.md#isweekend)
- [leapYearsInRange](DateUtil.md#leapyearsinrange)
- [toDate](DateUtil.md#todate)
- [today](DateUtil.md#today)
- [tomorrow](DateUtil.md#tomorrow)
- [weekFirstDay](DateUtil.md#weekfirstday)
- [weekLastDay](DateUtil.md#weeklastday)
- [yearsToMonths](DateUtil.md#yearstomonths)
- [yesterday](DateUtil.md#yesterday)
- [getInstance](DateUtil.md#getinstance)

## Constructors

### constructor

• `Private` **new DateUtil**()

#### Defined in

[DateUtil.ts:10](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/DateUtil.ts#L10)

## Properties

### dFullNames

▪ `Static` `Private` **dFullNames**: `string`[]

#### Defined in

[DateUtil.ts:8](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/DateUtil.ts#L8)

___

### dayAbrs

▪ `Static` `Private` **dayAbrs**: `string`[]

#### Defined in

[DateUtil.ts:7](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/DateUtil.ts#L7)

___

### instance

▪ `Static` `Private` **instance**: [`DateUtil`](DateUtil.md)

#### Defined in

[DateUtil.ts:4](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/DateUtil.ts#L4)

___

### mFullNames

▪ `Static` `Private` **mFullNames**: `string`[]

#### Defined in

[DateUtil.ts:6](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/DateUtil.ts#L6)

___

### monthAbrs

▪ `Static` `Private` **monthAbrs**: `string`[]

#### Defined in

[DateUtil.ts:5](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/DateUtil.ts#L5)

## Methods

### addDays

▸ **addDays**<`T`\>(`dt`, `days`): `Date`

Adds the specified number of days to a given date.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Date` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dt` | `number` \| `Date` \| `T` | The date to add days to. |
| `days` | `number` | The number of days to add. |

#### Returns

`Date`

The resulting date after adding the specified number of days.

#### Defined in

[DateUtil.ts:253](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/DateUtil.ts#L253)

___

### compareDates

▸ **compareDates**<`T`\>(`dt1`, `dt2`): `number`

Compares two dates and returns the difference between them in milliseconds.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Date` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dt1` | `number` \| `Date` \| `T` | The first date. |
| `dt2` | `number` \| `Date` \| `T` | The second date. |

#### Returns

`number`

The difference between the two dates in milliseconds.

#### Defined in

[DateUtil.ts:56](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/DateUtil.ts#L56)

___

### equals

▸ **equals**<`T`\>(`dt1`, `dt2`): `boolean`

Checks if two dates are equal.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Date` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dt1` | `number` \| `Date` \| `T` | The first date. |
| `dt2` | `number` \| `Date` \| `T` | The second date. |

#### Returns

`boolean`

True if the two dates are equal, false otherwise.

#### Defined in

[DateUtil.ts:68](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/DateUtil.ts#L68)

___

### formatDate

▸ **formatDate**<`T`\>(`dt`, `format`): `string`

Formats a given date object into a string representation using the specified format.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Date` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dt` | `number` \| `Date` \| `T` | The date object to format. |
| `format` | `string` | The format string. (e.g., 'YYYY-MM-DD') |

#### Returns

`string`

The formatted date string.

#### Defined in

[DateUtil.ts:265](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/DateUtil.ts#L265)

___

### getCurrentDate

▸ **getCurrentDate**(): `Date`

Returns a new Date object with the current date and time.

#### Returns

`Date`

A new Date object with the current date and time.

#### Defined in

[DateUtil.ts:16](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/DateUtil.ts#L16)

___

### getCurrentTimestamp

▸ **getCurrentTimestamp**(): `number`

Returns the current timestamp in milliseconds.

#### Returns

`number`

The current timestamp in milliseconds.

#### Defined in

[DateUtil.ts:288](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/DateUtil.ts#L288)

___

### getDayAbbr

▸ **getDayAbbr**(`number`): `string`

Returns the day abbreviation for the given day number (0-6, where 0 is Sunday).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `number` | `number` | The day number (0-6). |

#### Returns

`string`

The day abbreviation.

#### Defined in

[DateUtil.ts:99](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/DateUtil.ts#L99)

___

### getDayFullName

▸ **getDayFullName**(`number`): `string`

Returns the full name of the day for the given day number (0-6, where 0 is Sunday).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `number` | `number` | The day number (0-6). |

#### Returns

`string`

The full name of the day.

#### Defined in

[DateUtil.ts:109](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/DateUtil.ts#L109)

___

### getDaysDiff

▸ **getDaysDiff**<`T`\>(`dt1`, `dt2`): `number`

Calculates the difference in days between two dates.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Date` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dt1` | `number` \| `Date` \| `T` | The first date. |
| `dt2` | `number` \| `Date` \| `T` | The second date. |

#### Returns

`number`

The difference in days between the two dates.

#### Defined in

[DateUtil.ts:239](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/DateUtil.ts#L239)

___

### getMonthAbbr

▸ **getMonthAbbr**(`number`): `string`

Returns the month abbreviation for the given month number (1-12).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `number` | `number` | The month number (1-12). |

#### Returns

`string`

The month abbreviation.

#### Defined in

[DateUtil.ts:79](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/DateUtil.ts#L79)

___

### getMonthFirstDay

▸ **getMonthFirstDay**(): `Date`

Returns the first day of the current month.

#### Returns

`Date`

A Date object representing the first day of the current month.

#### Defined in

[DateUtil.ts:163](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/DateUtil.ts#L163)

___

### getMonthFullName

▸ **getMonthFullName**(`number`): `string`

Returns the full name of the month for the given month number (1-12).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `number` | `number` | The month number (1-12). |

#### Returns

`string`

The full name of the month.

#### Defined in

[DateUtil.ts:89](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/DateUtil.ts#L89)

___

### getMonthLastDay

▸ **getMonthLastDay**(): `Date`

Returns the last day of the current month.

#### Returns

`Date`

A Date object representing the last day of the current month.

#### Defined in

[DateUtil.ts:172](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/DateUtil.ts#L172)

___

### isAfter

▸ **isAfter**<`T`\>(`date1`, `date2`): `boolean`

If date1 is before date2, return true, else return false.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Date` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date1` | `number` \| `Date` \| `T` | T \| number \| Date |
| `date2` | `number` \| `Date` \| `T` | T \| number \| Date |

#### Returns

`boolean`

A boolean value.

#### Defined in

[DateUtil.ts:195](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/DateUtil.ts#L195)

___

### isBefore

▸ **isBefore**<`T`\>(`date1`, `date2`): `boolean`

If date1 is before date2, return true, else return false.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Date` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date1` | `number` \| `Date` \| `T` | T \| number \| Date |
| `date2` | `number` \| `Date` \| `T` | T \| number \| Date |

#### Returns

`boolean`

A boolean value.

#### Defined in

[DateUtil.ts:207](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/DateUtil.ts#L207)

___

### isLeapYear

▸ **isLeapYear**(`year`): `boolean`

Checks if a given year is a leap year.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `year` | `number` | The year. |

#### Returns

`boolean`

True if the year is a leap year, false otherwise.

#### Defined in

[DateUtil.ts:119](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/DateUtil.ts#L119)

___

### isWeekend

▸ **isWeekend**<`T`\>(`dt`): `boolean`

Checks if a given date falls on a weekend (Saturday or Sunday).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Date` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dt` | `number` \| `Date` \| `T` | The date to check. |

#### Returns

`boolean`

True if the date falls on a weekend, false otherwise.

#### Defined in

[DateUtil.ts:227](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/DateUtil.ts#L227)

___

### leapYearsInRange

▸ **leapYearsInRange**(`startYear`, `endYear`): `number`[]

Returns an array of leap years between a start and end year (inclusive).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startYear` | `number` | The start year. |
| `endYear` | `number` | The end year. |

#### Returns

`number`[]

An array of leap years.

#### Defined in

[DateUtil.ts:148](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/DateUtil.ts#L148)

___

### toDate

▸ **toDate**<`T`\>(`input`): `Date`

Converts the input to a Date object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Date` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `Number` \| `T` | The input value. |

#### Returns

`Date`

A Date object.

#### Defined in

[DateUtil.ts:182](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/DateUtil.ts#L182)

___

### today

▸ **today**(): `Date`

Returns a new Date object with the time set to midnight.

#### Returns

`Date`

A Date object with the current date and time.

#### Defined in

[DateUtil.ts:24](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/DateUtil.ts#L24)

___

### tomorrow

▸ **tomorrow**(): `Date`

Returns a new Date object that is set to tomorrow's date.

#### Returns

`Date`

A date object that is the current date plus one day.

#### Defined in

[DateUtil.ts:34](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/DateUtil.ts#L34)

___

### weekFirstDay

▸ **weekFirstDay**(): `Date`

It returns the first day of the week (Monday) based on the current date.

#### Returns

`Date`

The first day of the week.

#### Defined in

[DateUtil.ts:128](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/DateUtil.ts#L128)

___

### weekLastDay

▸ **weekLastDay**(): `Date`

It returns the last day of the week.

#### Returns

`Date`

The last day of the week.

#### Defined in

[DateUtil.ts:137](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/DateUtil.ts#L137)

___

### yearsToMonths

▸ **yearsToMonths**(`years`): `number`

This function takes a number of years and returns the number of months in that number of years.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `years` | `number` | number |

#### Returns

`number`

The number of months in the given number of years.

#### Defined in

[DateUtil.ts:218](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/DateUtil.ts#L218)

___

### yesterday

▸ **yesterday**(): `Date`

Returns a new Date object that is set to yesterday's date.

#### Returns

`Date`

A date object that is yesterday's date.

#### Defined in

[DateUtil.ts:44](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/DateUtil.ts#L44)

___

### getInstance

▸ `Static` **getInstance**(): [`DateUtil`](DateUtil.md)

#### Returns

[`DateUtil`](DateUtil.md)

#### Defined in

[DateUtil.ts:292](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/DateUtil.ts#L292)
