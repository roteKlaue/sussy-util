[sussy-util](../README.md) / [classes](./README.md) / Vector3d

# Class: Vector3d

## Table of contents

### Constructors

- [constructor](Vector3d.md#constructor)

### Properties

- [ x ](Vector3d.md#x)
- [ y ](Vector3d.md#y)
- [ z ](Vector3d.md#z)

### Methods

- [abs](Vector3d.md#abs)
- [add](Vector3d.md#add)
- [angleTo](Vector3d.md#angleto)
- [clone](Vector3d.md#clone)
- [crossProduct](Vector3d.md#crossproduct)
- [divide](Vector3d.md#divide)
- [dotProduct](Vector3d.md#dotproduct)
- [equals](Vector3d.md#equals)
- [isParallelTo](Vector3d.md#isparallelto)
- [isPerpendicularTo](Vector3d.md#isperpendicularto)
- [magnitude](Vector3d.md#magnitude)
- [multiply](Vector3d.md#multiply)
- [normalize](Vector3d.md#normalize)
- [subtract](Vector3d.md#subtract)
- [toArray](Vector3d.md#toarray)
- [toString](Vector3d.md#tostring)
- [fromArray](Vector3d.md#fromarray)

## Constructors

### constructor

• **new Vector3d**(`x?`, `y?`, `z?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `number` | `0` |
| `y` | `number` | `0` |
| `z` | `number` | `0` |

#### Defined in

[src/Classes/Vector3d.ts:6](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Vector3d.ts#L6)

## Properties

### x

• `Readonly` **x**: `number`

#### Defined in

[src/Classes/Vector3d.ts:2](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Vector3d.ts#L2)

___

### y

• `Readonly` **y**: `number`

#### Defined in

[src/Classes/Vector3d.ts:3](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Vector3d.ts#L3)

___

### z

• `Readonly` **z**: `number`

#### Defined in

[src/Classes/Vector3d.ts:4](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Vector3d.ts#L4)

## Methods

### abs

▸ **abs**(): [`Vector3d`](Vector3d.md)

Returns a vector with the absolute values of the original vector's components.

#### Returns

[`Vector3d`](Vector3d.md)

- A new Vector2d object with absolute values.

#### Defined in

[src/Classes/Vector3d.ts:137](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Vector3d.ts#L137)

___

### add

▸ **add**(`vector`): [`Vector3d`](Vector3d.md)

Adds another vector to the current vector and returns the result as a new vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector` | [`Vector3d`](Vector3d.md) | The vector to be added. |

#### Returns

[`Vector3d`](Vector3d.md)

The sum of the two vectors as a new Vector3d instance.

#### Defined in

[src/Classes/Vector3d.ts:25](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Vector3d.ts#L25)

___

### angleTo

▸ **angleTo**(`vector`): `number`

Calculates the angle in radians between the current vector and another vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector` | [`Vector3d`](Vector3d.md) | The other vector. |

#### Returns

`number`

The angle between the two vectors in radians.

#### Defined in

[src/Classes/Vector3d.ts:107](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Vector3d.ts#L107)

___

### clone

▸ **clone**(): [`Vector3d`](Vector3d.md)

Creates a new Vector3d instance with the same x, y, and z values as the current vector.

#### Returns

[`Vector3d`](Vector3d.md)

A new Vector3d instance.

#### Defined in

[src/Classes/Vector3d.ts:16](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Vector3d.ts#L16)

___

### crossProduct

▸ **crossProduct**(`vector`): [`Vector3d`](Vector3d.md)

Calculates the cross product of the current vector and another vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector` | [`Vector3d`](Vector3d.md) | The other vector. |

#### Returns

[`Vector3d`](Vector3d.md)

The cross product of the two vectors as a new Vector3d instance.

#### Defined in

[src/Classes/Vector3d.ts:95](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Vector3d.ts#L95)

___

### divide

▸ **divide**(`scalar`): [`Vector3d`](Vector3d.md)

Divides the vector by a scalar value and returns the result as a new vector.

**`Throws`**

Throws an error if the scalar value is 0.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scalar` | `number` | The scalar value to divide the vector by. |

#### Returns

[`Vector3d`](Vector3d.md)

The vector divided by the scalar value as a new Vector3d instance.

#### Defined in

[src/Classes/Vector3d.ts:53](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Vector3d.ts#L53)

___

### dotProduct

▸ **dotProduct**(`vector`): `number`

Calculates the dot product of the current vector and another vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector` | [`Vector3d`](Vector3d.md) | The other vector. |

#### Returns

`number`

The dot product of the two vectors.

#### Defined in

[src/Classes/Vector3d.ts:86](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Vector3d.ts#L86)

___

### equals

▸ **equals**(`vector`): `boolean`

Checks if the vector is equal to another vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector` | [`Vector3d`](Vector3d.md) | The vector to compare with. |

#### Returns

`boolean`

- True if the vectors are equal, false otherwise.

#### Defined in

[src/Classes/Vector3d.ts:146](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Vector3d.ts#L146)

___

### isParallelTo

▸ **isParallelTo**(`vector`): `boolean`

Determines if the current vector is parallel to another vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector` | [`Vector3d`](Vector3d.md) | The other vector. |

#### Returns

`boolean`

True if the vectors are parallel, false otherwise.

#### Defined in

[src/Classes/Vector3d.ts:119](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Vector3d.ts#L119)

___

### isPerpendicularTo

▸ **isPerpendicularTo**(`vector`): `boolean`

Determines if the current vector is perpendicular (orthogonal) to another vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector` | [`Vector3d`](Vector3d.md) | The other vector. |

#### Returns

`boolean`

True if the vectors are perpendicular, false otherwise.

#### Defined in

[src/Classes/Vector3d.ts:129](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Vector3d.ts#L129)

___

### magnitude

▸ **magnitude**(): `number`

Calculates the magnitude (length) of the vector.

#### Returns

`number`

The magnitude of the vector.

#### Defined in

[src/Classes/Vector3d.ts:64](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Vector3d.ts#L64)

___

### multiply

▸ **multiply**(`scalar`): [`Vector3d`](Vector3d.md)

Multiplies the vector by a scalar value and returns the result as a new vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scalar` | `number` | The scalar value to multiply the vector by. |

#### Returns

[`Vector3d`](Vector3d.md)

The vector multiplied by the scalar value as a new Vector3d instance.

#### Defined in

[src/Classes/Vector3d.ts:43](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Vector3d.ts#L43)

___

### normalize

▸ **normalize**(): [`Vector3d`](Vector3d.md)

Normalizes the vector to have a magnitude of 1 and returns the result as a new vector.

**`Throws`**

Throws an error if the vector is a zero vector (magnitude is 0).

#### Returns

[`Vector3d`](Vector3d.md)

The normalized vector as a new Vector3d instance.

#### Defined in

[src/Classes/Vector3d.ts:73](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Vector3d.ts#L73)

___

### subtract

▸ **subtract**(`vector`): [`Vector3d`](Vector3d.md)

Subtracts another vector from the current vector and returns the result as a new vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector` | [`Vector3d`](Vector3d.md) | The vector to be subtracted. |

#### Returns

[`Vector3d`](Vector3d.md)

The difference between the two vectors as a new Vector3d instance.

#### Defined in

[src/Classes/Vector3d.ts:34](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Vector3d.ts#L34)

___

### toArray

▸ **toArray**(): `number`[]

Converts the vector to an array representation.

#### Returns

`number`[]

An array containing the x, y, and z components of the vector.

#### Defined in

[src/Classes/Vector3d.ts:154](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Vector3d.ts#L154)

___

### toString

▸ **toString**(): `string`

Returns a string representation of the vector in the format "(x, y, z)".

#### Returns

`string`

A string representation of the vector.

#### Defined in

[src/Classes/Vector3d.ts:162](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Vector3d.ts#L162)

___

### fromArray

▸ `Static` **fromArray**(`arr`): [`Vector3d`](Vector3d.md)

Creates a new Vector3d instance from an array representation.

**`Throws`**

Throws an error if the array length is not 3.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | `number`[] | An array containing the x, y, and z components of the vector. |

#### Returns

[`Vector3d`](Vector3d.md)

A new Vector3d instance created from the array.

#### Defined in

[src/Classes/Vector3d.ts:172](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Vector3d.ts#L172)
