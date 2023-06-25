[sussy-util](../README.md) / [classes](./README.md) / Point

# Class: Point

## Table of contents

### Constructors

- [constructor](Point.md#constructor)

### Properties

- [x](Point.md#x)
- [y](Point.md#y)

### Methods

- [angleBetween](Point.md#anglebetween)
- [distanceTo](Point.md#distanceto)
- [midpointTo](Point.md#midpointto)
- [slopeTo](Point.md#slopeto)
- [vectorTo](Point.md#vectorto)

## Constructors

### constructor

• **new Point**(`x`, `y`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Defined in

[src/Classes/Point.ts:7](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Point.ts#L7)

## Properties

### x

• `Readonly` **x**: `number`

#### Defined in

[src/Classes/Point.ts:5](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Point.ts#L5)

___

### y

• `Readonly` **y**: `number`

#### Defined in

[src/Classes/Point.ts:4](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Point.ts#L4)

## Methods

### angleBetween

▸ **angleBetween**(`p1`, `p2`): `number`

Calculates the angle in degrees between two vectors formed by three points (this point, p1, and p2).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p1` | [`Point`](Point.md) | The second point. |
| `p2` | [`Point`](Point.md) | The third point. |

#### Returns

`number`

The angle in degrees between the two vectors.

#### Defined in

[src/Classes/Point.ts:75](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Point.ts#L75)

___

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

[src/Classes/Point.ts:18](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Point.ts#L18)

___

### midpointTo

▸ **midpointTo**(`other`): [`Point`](Point.md)

The midpointTo() function returns the midpoint between the invoking point and the argument point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Point`](Point.md) | Point - The point to which the midpoint is being calculated. |

#### Returns

[`Point`](Point.md)

The midpoint between this point and the other point.

#### Defined in

[src/Classes/Point.ts:52](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Point.ts#L52)

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

[src/Classes/Point.ts:32](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Point.ts#L32)

___

### vectorTo

▸ **vectorTo**(`other`): [`Vector2d`](Vector2d.md)

Creates a Vector2d object from this point to the given point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Point`](Point.md) | The point to create a vector towards. |

#### Returns

[`Vector2d`](Vector2d.md)

A Vector2d object representing the vector from this point to the given point.

#### Defined in

[src/Classes/Point.ts:63](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Point.ts#L63)
