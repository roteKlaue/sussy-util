[sussy-util](../README.md) / [classes](./README.md) / DateUtil

# Class: DateUtil

## Table of contents

### Constructors

- [constructor](DateUtil.md#constructor)

### Properties

- [dFullNames](DateUtil.md#dfullnames)
- [dayAbrs](DateUtil.md#dayabrs)
- [mFullNames](DateUtil.md#mfullnames)
- [monthAbrs](DateUtil.md#monthabrs)

### Methods

- [compareDates](DateUtil.md#comparedates)
- [equals](DateUtil.md#equals)
- [formatRelative](DateUtil.md#formatrelative)
- [getCurrentDate](DateUtil.md#getcurrentdate)
- [getDayAbbr](DateUtil.md#getdayabbr)
- [getDayFullName](DateUtil.md#getdayfullname)
- [getMonthAbbr](DateUtil.md#getmonthabbr)
- [getMonthFirstDay](DateUtil.md#getmonthfirstday)
- [getMonthFullName](DateUtil.md#getmonthfullname)
- [getMonthLastDay](DateUtil.md#getmonthlastday)
- [isAfter](DateUtil.md#isafter)
- [isBefore](DateUtil.md#isbefore)
- [isLeapYear](DateUtil.md#isleapyear)
- [leapYearsInRange](DateUtil.md#leapyearsinrange)
- [toDate](DateUtil.md#todate)
- [today](DateUtil.md#today)
- [tomorrow](DateUtil.md#tomorrow)
- [weekFirstDay](DateUtil.md#weekfirstday)
- [weekLastDay](DateUtil.md#weeklastday)
- [yearsToMonths](DateUtil.md#yearstomonths)
- [yesterday](DateUtil.md#yesterday)

## Constructors

### constructor

• **new DateUtil**()

#### Overrides

AbstractClass.constructor

#### Defined in

[DateUtil.ts:9](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/DateUtil.ts#L9)

## Properties

### dFullNames

▪ `Static` `Private` **dFullNames**: `string`[]

#### Defined in

[DateUtil.ts:7](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/DateUtil.ts#L7)

___

### dayAbrs

▪ `Static` `Private` **dayAbrs**: `string`[]

#### Defined in

[DateUtil.ts:6](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/DateUtil.ts#L6)

___

### mFullNames

▪ `Static` `Private` **mFullNames**: `string`[]

#### Defined in

[DateUtil.ts:5](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/DateUtil.ts#L5)

___

### monthAbrs

▪ `Static` `Private` **monthAbrs**: `string`[]

#### Defined in

[DateUtil.ts:4](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/DateUtil.ts#L4)

## Methods

### compareDates

▸ `Static` **compareDates**<`T`\>(`dt1`, `dt2`): `number`

It takes two dates and returns a number that is the difference between the two dates

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Date` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dt1` | `number` \| `Date` \| `T` | T \| number \| Date |
| `dt2` | `number` \| `Date` \| `T` | T \| number \| Date |

#### Returns

`number`

The difference between the two dates in milliseconds.

#### Defined in

[DateUtil.ts:57](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/DateUtil.ts#L57)

___

### equals

▸ `Static` **equals**<`T`\>(`dt1`, `dt2`): `boolean`

If the two dates are the same, return true, otherwise return false.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Date` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dt1` | `number` \| `Date` \| `T` | T \| number \| Date |
| `dt2` | `number` \| `Date` \| `T` | T \| number \| Date |

#### Returns

`boolean`

A boolean value.

#### Defined in

[DateUtil.ts:69](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/DateUtil.ts#L69)

___

### formatRelative

▸ `Static` **formatRelative**(`date1`, `date2`, `format`): `string`

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `date1` | `Date` |
| `date2` | `Date` |
| `format` | `string` |

#### Returns

`string`

#### Defined in

[DateUtil.ts:182](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/DateUtil.ts#L182)

___

### getCurrentDate

▸ `Static` `Private` **getCurrentDate**(): `Date`

It returns a new Date object with the current date and time.

#### Returns

`Date`

A new Date object with the current date and time.

#### Defined in

[DateUtil.ts:17](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/DateUtil.ts#L17)

___

### getDayAbbr

▸ `Static` **getDayAbbr**(`number`): `string`

If the number is a number and the number is in the array, return the day abbreviation, otherwise
return an empty string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `number` | `number` | number - The number of the day you want to get the abbreviation for. |

#### Returns

`string`

The day abbreviation for the given number.

#### Defined in

[DateUtil.ts:101](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/DateUtil.ts#L101)

___

### getDayFullName

▸ `Static` **getDayFullName**(`number`): `string`

If the number is a number, return the day name, otherwise return an empty string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `number` | `number` | number - The number of the day you want to get the full name of. |

#### Returns

`string`

The day full name.

#### Defined in

[DateUtil.ts:111](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/DateUtil.ts#L111)

___

### getMonthAbbr

▸ `Static` **getMonthAbbr**(`number`): `string`

It returns the month abbreviation for the given number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `number` | `number` | number - The number of the month you want to get the abbreviation for. |

#### Returns

`string`

The month abbreviation for the given number.

#### Defined in

[DateUtil.ts:80](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/DateUtil.ts#L80)

___

### getMonthFirstDay

▸ `Static` **getMonthFirstDay**(): `Date`

Get the first day of the current month.

#### Returns

`Date`

A new Date object with the current year and month.

#### Defined in

[DateUtil.ts:167](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/DateUtil.ts#L167)

___

### getMonthFullName

▸ `Static` **getMonthFullName**(`number`): `string`

If the number is a number, return the month name, otherwise return an empty string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `number` | `number` | number - The number of the month you want to get the full name of. |

#### Returns

`string`

The full name of the month.

#### Defined in

[DateUtil.ts:90](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/DateUtil.ts#L90)

___

### getMonthLastDay

▸ `Static` **getMonthLastDay**(): `Date`

It returns the last day of the current month.

#### Returns

`Date`

The last day of the current month.

#### Defined in

[DateUtil.ts:176](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/DateUtil.ts#L176)

___

### isAfter

▸ `Static` **isAfter**<`T`\>(`date1`, `date2`): `boolean`

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

[DateUtil.ts:207](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/DateUtil.ts#L207)

___

### isBefore

▸ `Static` **isBefore**<`T`\>(`date1`, `date2`): `boolean`

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

[DateUtil.ts:219](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/DateUtil.ts#L219)

___

### isLeapYear

▸ `Static` **isLeapYear**(`year`): `boolean`

If the year is not divisible by 4, then it is a common year. Otherwise, if the year is not
divisible by 100, then it is a leap year. Otherwise, if the year is not divisible by 400, then
it is a common year. Otherwise, it is a leap year.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `year` | `number` | number |

#### Returns

`boolean`

The remainder of the year divided by 4, or 400.

#### Defined in

[DateUtil.ts:123](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/DateUtil.ts#L123)

___

### leapYearsInRange

▸ `Static` **leapYearsInRange**(`start`, `endYear`): `number`[]

Given a start year and an end year, return an array of all the leap years between them.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | number - The start year |
| `endYear` | `number` | The end year of the range. |

#### Returns

`number`[]

An array of leap years between the start and end year.

#### Defined in

[DateUtil.ts:152](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/DateUtil.ts#L152)

___

### toDate

▸ `Static` **toDate**<`T`\>(`date`): `Date`

If the input is a number, return a new Date object with the number as the constructor argument.
Otherwise, return the input as a Date object.
</code>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Date` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | `Number` \| `T` | T \| Number |

#### Returns

`Date`

A Date object.

#### Defined in

[DateUtil.ts:194](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/DateUtil.ts#L194)

___

### today

▸ `Static` **today**(): `Date`

This function returns a new Date object with the time set to midnight.

#### Returns

`Date`

A date object with the current date and time.

#### Defined in

[DateUtil.ts:25](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/DateUtil.ts#L25)

___

### tomorrow

▸ `Static` **tomorrow**(): `Date`

It returns a new Date object that is set to tomorrow's date

#### Returns

`Date`

A date object that is the current date plus one day.

#### Defined in

[DateUtil.ts:35](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/DateUtil.ts#L35)

___

### weekFirstDay

▸ `Static` **weekFirstDay**(): `Date`

It returns the first day of the week (Monday) based on the current date.

#### Returns

`Date`

The first day of the week.

#### Defined in

[DateUtil.ts:132](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/DateUtil.ts#L132)

___

### weekLastDay

▸ `Static` **weekLastDay**(): `Date`

It returns the last day of the week.

#### Returns

`Date`

The last day of the week.

#### Defined in

[DateUtil.ts:141](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/DateUtil.ts#L141)

___

### yearsToMonths

▸ `Static` **yearsToMonths**(`years`): `number`

This function takes a number of years and returns the number of months in that number of years.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `years` | `number` | number |

#### Returns

`number`

The number of months in the given number of years.

#### Defined in

[DateUtil.ts:230](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/DateUtil.ts#L230)

___

### yesterday

▸ `Static` **yesterday**(): `Date`

It returns a new Date object that is set to yesterday's date

#### Returns

`Date`

A date object that is yesterday's date.

#### Defined in

[DateUtil.ts:45](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/DateUtil.ts#L45)
