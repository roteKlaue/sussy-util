[sussy-util](../README.md) / [classes](./README.md) / BetterMath

# Class: BetterMath

## Table of contents

### Constructors

- [constructor](BetterMath.md#constructor)

### Properties

- [instance](BetterMath.md#instance)

### Methods

- [average](BetterMath.md#average)
- [avg](BetterMath.md#avg)
- [combinations](BetterMath.md#combinations)
- [degreesToRadians](BetterMath.md#degreestoradians)
- [distance](BetterMath.md#distance)
- [factorial](BetterMath.md#factorial)
- [gcd](BetterMath.md#gcd)
- [greatestCommonDivisor](BetterMath.md#greatestcommondivisor)
- [lcm](BetterMath.md#lcm)
- [logarithm](BetterMath.md#logarithm)
- [lowestCommonDenominator](BetterMath.md#lowestcommondenominator)
- [median](BetterMath.md#median)
- [nthRoot](BetterMath.md#nthroot)
- [permutations](BetterMath.md#permutations)
- [radiansToDegrees](BetterMath.md#radianstodegrees)
- [round](BetterMath.md#round)
- [square](BetterMath.md#square)
- [getInstance](BetterMath.md#getinstance)

## Constructors

### constructor

• `Private` **new BetterMath**()

#### Defined in

[BetterMath.ts:5](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/BetterMath.ts#L5)

## Properties

### instance

▪ `Static` `Private` **instance**: [`BetterMath`](BetterMath.md)

#### Defined in

[BetterMath.ts:4](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/BetterMath.ts#L4)

## Methods

### average

▸ **average**(`numbers`): `number`

It takes an array of numbers, adds them together, divides the sum by the number of elements in
the array, and returns the result

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `numbers` | `number`[] | number[] - An array of numbers to average. |

#### Returns

`number`

The average of the numbers in the array.

#### Defined in

[BetterMath.ts:88](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/BetterMath.ts#L88)

___

### avg

▸ **avg**(`numbers`): `number`

It takes an array of numbers, adds them together, divides the sum by the number of elements in
the array, and returns the result

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `numbers` | `number`[] | number[] - An array of numbers to average. |

#### Returns

`number`

The average of the numbers in the array.

#### Defined in

[BetterMath.ts:98](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/BetterMath.ts#L98)

___

### combinations

▸ **combinations**(`n`, `r`): `number`

Calculate the number of combinations of r elements from a set of n elements.

**`Throws`**

n must be greater than or equal to r in combinations.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | `number` | The total number of elements. |
| `r` | `number` | The number of elements to select. |

#### Returns

`number`

The number of combinations.

#### Defined in

[BetterMath.ts:176](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/BetterMath.ts#L176)

___

### degreesToRadians

▸ **degreesToRadians**(`degrees`): `number`

Convert degrees to radians.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `degrees` | `number` | The value in degrees. |

#### Returns

`number`

The value in radians.

#### Defined in

[BetterMath.ts:188](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/BetterMath.ts#L188)

___

### distance

▸ **distance**(`path`, `index?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `path` | `BetterMath`[] | `undefined` |
| `index` | `number` | `0` |

#### Returns

`number`

#### Defined in

[BetterMath.ts:31](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/BetterMath.ts#L31)

___

### factorial

▸ **factorial**(`num`): `number`

If the number is less than or equal to 1, return 1, otherwise return the number multiplied by
the factorial of the number minus 1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `num` | `number` | number - The number to calculate the factorial of. |

#### Returns

`number`

The factorial of the number passed in.

#### Defined in

[BetterMath.ts:108](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/BetterMath.ts#L108)

___

### gcd

▸ **gcd**(`a`, `b`): `number`

If b is 0, return a, otherwise return the greatest common divisor of b and the remainder of a
divided by b.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | The first number to find the greatest common divisor of. |
| `b` | `number` | number = 0 |

#### Returns

`number`

The greatest common divisor of a and b.

#### Defined in

[BetterMath.ts:57](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/BetterMath.ts#L57)

___

### greatestCommonDivisor

▸ **greatestCommonDivisor**(`a`, `b`): `number`

If b is 0, return a, otherwise return the greatest common divisor of b and the remainder of a
divided by b.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | The first number to find the greatest common divisor of. |
| `b` | `number` | number = 0 |

#### Returns

`number`

The greatest common divisor of a and b.

#### Defined in

[BetterMath.ts:43](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/BetterMath.ts#L43)

___

### lcm

▸ **lcm**(`a`, `b`): `number`

It returns the lowest common denominator of two numbers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | number, b: number |
| `b` | `number` | number - The second number to find the lowest common denominator of. |

#### Returns

`number`

The lowest common denominator of two numbers.

#### Defined in

[BetterMath.ts:78](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/BetterMath.ts#L78)

___

### logarithm

▸ **logarithm**(`number`, `base`): `number`

Calculate the logarithm of a number with a specified base.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `number` | `number` | The number. |
| `base` | `number` | The base of the logarithm. |

#### Returns

`number`

The logarithm of the number with the specified base.

#### Defined in

[BetterMath.ts:147](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/BetterMath.ts#L147)

___

### lowestCommonDenominator

▸ **lowestCommonDenominator**(`a`, `b`): `number`

It returns the lowest common denominator of two numbers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | number, b: number |
| `b` | `number` | number - The second number to find the lowest common denominator of. |

#### Returns

`number`

The lowest common denominator of two numbers.

#### Defined in

[BetterMath.ts:67](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/BetterMath.ts#L67)

___

### median

▸ **median**(`values`): `number`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `number`[] | number[] - The array of numbers to get the median of. |

#### Returns

`number`

The median of the array.

#### Defined in

[BetterMath.ts:116](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/BetterMath.ts#L116)

___

### nthRoot

▸ **nthRoot**(`number`, `n`): `number`

Calculate the nth root of a number.

**`Throws`**

Cannot calculate even root of a negative number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `number` | `number` | The number. |
| `n` | `number` | The root to calculate. |

#### Returns

`number`

The nth root of the number.

#### Defined in

[BetterMath.ts:134](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/BetterMath.ts#L134)

___

### permutations

▸ **permutations**(`n`, `r`): `number`

Calculate the number of permutations of r elements from a set of n elements.

**`Throws`**

n must be greater than or equal to r in permutations.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | `number` | The total number of elements. |
| `r` | `number` | The number of elements to select. |

#### Returns

`number`

The number of permutations.

#### Defined in

[BetterMath.ts:158](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/BetterMath.ts#L158)

___

### radiansToDegrees

▸ **radiansToDegrees**(`radians`): `number`

Convert radians to degrees.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `radians` | `number` | The value in radians. |

#### Returns

`number`

The value in degrees.

#### Defined in

[BetterMath.ts:197](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/BetterMath.ts#L197)

___

### round

▸ **round**(`value`, `digit`): `number`

Round a number to a specified number of decimal places.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | The number to round. |
| `digit` | `number` | The number of digits to round to. |

#### Returns

`number`

The rounded value.

#### Defined in

[BetterMath.ts:13](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/BetterMath.ts#L13)

___

### square

▸ **square**(`num`): `number`

Calculate the square of a number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `num` | `number` | The number to calculate the square of. |

#### Returns

`number`

The square of the number.

#### Defined in

[BetterMath.ts:27](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/BetterMath.ts#L27)

___

### getInstance

▸ `Static` **getInstance**(): [`BetterMath`](BetterMath.md)

Get the instance of the BetterMath class (Singleton pattern).

#### Returns

[`BetterMath`](BetterMath.md)

The instance of the BetterMath class.

#### Defined in

[BetterMath.ts:205](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/BetterMath.ts#L205)
