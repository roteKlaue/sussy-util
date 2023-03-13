[sussy-util](../README.md) / [classes](./README.md) / BetterMath

# Class: BetterMath

## Table of contents

### Constructors

- [constructor](BetterMath.md#constructor)

### Methods

- [average](BetterMath.md#average)
- [avg](BetterMath.md#avg)
- [distance](BetterMath.md#distance)
- [factorial](BetterMath.md#factorial)
- [gcd](BetterMath.md#gcd)
- [greatestCommonDivisor](BetterMath.md#greatestcommondivisor)
- [lcm](BetterMath.md#lcm)
- [lowestCommonDenominator](BetterMath.md#lowestcommondenominator)
- [median](BetterMath.md#median)
- [quickselect](BetterMath.md#quickselect)
- [random](BetterMath.md#random)
- [round](BetterMath.md#round)
- [square](BetterMath.md#square)

## Constructors

### constructor

• **new BatterMath**()

#### Overrides

AbstractClass.constructor

#### Defined in

[BetterMath.ts:5](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/BetterMath.ts#L5)

## Methods

### average

▸ `Static` **average**(`numbers`): `number`

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

[BetterMath.ts:76](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/BetterMath.ts#L76)

___

### avg

▸ `Static` **avg**(`numbers`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `numbers` | `number`[] |

#### Returns

`number`

#### Defined in

[BetterMath.ts:80](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/BetterMath.ts#L80)

___

### distance

▸ `Static` **distance**(`path`, `index?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `path` | `Point`[] | `undefined` |
| `index` | `number` | `0` |

#### Returns

`number`

#### Defined in

[BetterMath.ts:32](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/BetterMath.ts#L32)

___

### factorial

▸ `Static` **factorial**(`num`): `number`

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

[BetterMath.ts:90](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/BetterMath.ts#L90)

___

### gcd

▸ `Static` **gcd**(`a`, `b`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |

#### Returns

`number`

#### Defined in

[BetterMath.ts:51](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/BetterMath.ts#L51)

___

### greatestCommonDivisor

▸ `Static` **greatestCommonDivisor**(`a`, `b`): `number`

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

[BetterMath.ts:44](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/BetterMath.ts#L44)

___

### lcm

▸ `Static` **lcm**(`a`, `b`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |

#### Returns

`number`

#### Defined in

[BetterMath.ts:66](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/BetterMath.ts#L66)

___

### lowestCommonDenominator

▸ `Static` **lowestCommonDenominator**(`a`, `b`): `number`

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

[BetterMath.ts:61](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/BetterMath.ts#L61)

___

### median

▸ `Static` **median**(`values`): `number`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `number`[] | number[] - The array of numbers to get the median of. |

#### Returns

`number`

The median of the array.

#### Defined in

[BetterMath.ts:117](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/BetterMath.ts#L117)

___

### quickselect

▸ `Static` `Private` **quickselect**(`arr`, `k`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `number`[] |
| `k` | `number` |

#### Returns

`number`

#### Defined in

[BetterMath.ts:94](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/BetterMath.ts#L94)

___

### random

▸ `Static` **random**(): `number`

#### Returns

`number`

#### Defined in

[BetterMath.ts:24](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/BetterMath.ts#L24)

___

### round

▸ `Static` **round**(`value`, `digit`): `number`

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

[BetterMath.ts:15](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/BetterMath.ts#L15)

___

### square

▸ `Static` **square**(`num`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `number` |

#### Returns

`number`

#### Defined in

[BetterMath.ts:28](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/BetterMath.ts#L28)
