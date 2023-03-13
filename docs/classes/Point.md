[sussy-util](../README.md) / [classes](./README.md) / Point

# Class: Point

## Table of contents

### Constructors

- [constructor](Point.md#constructor)

### Properties

- [ x ](Point.md#x)
- [ y ](Point.md#y)

### Methods

- [distanceTo](Point.md#distanceto)
- [slopeTo](Point.md#slopeto)

## Constructors

### constructor

• **new Point**(`x`, `y`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Defined in

[Point.ts:5](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/Point.ts#L5)

## Properties

### x

• `Readonly` **x**: `number`

#### Defined in

[Point.ts:3](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/Point.ts#L3)

___

### y

• `Readonly` **y**: `number`

#### Defined in

[Point.ts:2](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/Point.ts#L2)

## Methods

### distanceTo

▸ **distanceTo**(`other`): `number`

This function takes a Point object as an argument and returns the distance between the two
points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Point`](Point.md) | Point - The point to calculate the distance to. |

#### Returns

`number`

The distance between two points.

#### Defined in

[Point.ts:16](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/Point.ts#L16)

___

### slopeTo

▸ **slopeTo**(`other`): `number`

The slopeTo() function returns the slope between the invoking point (x0, y0) and the argument
point (x1, y1) to be (y1 − y0) / (x1 − x0). Treat the slope of a horizontal line segment as
positive zero; treat the slope of a vertical line segment as positive infinity; treat the slope
of a degenerate line segment (between a point and itself) as negative infinity

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Point`](Point.md) | Point - The point to which the slope is being calculated. |

#### Returns

`number`

The slope of the line between this point and the other point.

#### Defined in

[Point.ts:30](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/master/src/Classes/Point.ts#L30)
