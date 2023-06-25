[sussy-util](../README.md) / [classes](./README.md) / Vector2d

# Class: Vector2d

## Table of contents

### Constructors

- [constructor](Vector2d.md#constructor)

### Properties

- [ x ](Vector2d.md#x)
- [ y ](Vector2d.md#y)

### Methods

- [abs](Vector2d.md#abs)
- [add](Vector2d.md#add)
- [angleTo](Vector2d.md#angleto)
- [clone](Vector2d.md#clone)
- [distanceTo](Vector2d.md#distanceto)
- [divide](Vector2d.md#divide)
- [dotProduct](Vector2d.md#dotproduct)
- [equals](Vector2d.md#equals)
- [magnitude](Vector2d.md#magnitude)
- [multiply](Vector2d.md#multiply)
- [normalize](Vector2d.md#normalize)
- [subtract](Vector2d.md#subtract)
- [toString](Vector2d.md#tostring)

## Constructors

### constructor

• **new Vector2d**(`x?`, `y?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `number` | `0` |
| `y` | `number` | `0` |

#### Defined in

[src/Classes/Vector2d.ts:5](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Vector2d.ts#L5)

## Properties

### x

• `Readonly` **x**: `number`

#### Defined in

[src/Classes/Vector2d.ts:2](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Vector2d.ts#L2)

___

### y

• `Readonly` **y**: `number`

#### Defined in

[src/Classes/Vector2d.ts:3](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Vector2d.ts#L3)

## Methods

### abs

▸ **abs**(): [`Vector2d`](Vector2d.md)

Returns a vector with the absolute values of the original vector's components.

#### Returns

[`Vector2d`](Vector2d.md)

- A new Vector2d object with absolute values.

#### Defined in

[src/Classes/Vector2d.ts:116](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Vector2d.ts#L116)

___

### add

▸ **add**(`vector`): [`Vector2d`](Vector2d.md)

Adds another vector to the current vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector` | [`Vector2d`](Vector2d.md) | The vector to be added. |

#### Returns

[`Vector2d`](Vector2d.md)

- A new Vector2d object representing the sum of the two vectors.

#### Defined in

[src/Classes/Vector2d.ts:23](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Vector2d.ts#L23)

___

### angleTo

▸ **angleTo**(`vector`): `number`

Calculates the angle between two vectors in radians.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector` | [`Vector2d`](Vector2d.md) | The vector to calculate the angle to. |

#### Returns

`number`

- The angle between the two vectors in radians.

#### Defined in

[src/Classes/Vector2d.ts:106](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Vector2d.ts#L106)

___

### clone

▸ **clone**(): [`Vector2d`](Vector2d.md)

Creates a copy of the vector.

#### Returns

[`Vector2d`](Vector2d.md)

- A new Vector2d object with the same x and y coordinates.

#### Defined in

[src/Classes/Vector2d.ts:14](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Vector2d.ts#L14)

___

### distanceTo

▸ **distanceTo**(`vector`): `number`

Calculates the distance between two vectors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector` | [`Vector2d`](Vector2d.md) | The vector to calculate the distance to. |

#### Returns

`number`

- The distance between the two vectors.

#### Defined in

[src/Classes/Vector2d.ts:95](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Vector2d.ts#L95)

___

### divide

▸ **divide**(`scalar`): [`Vector2d`](Vector2d.md)

Divides the vector by a scalar value.

**`Throws`**

- Throws an error if the scalar is zero.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scalar` | `number` | The scalar value to divide the vector by. |

#### Returns

[`Vector2d`](Vector2d.md)

- A new Vector2d object representing the divided vector.

#### Defined in

[src/Classes/Vector2d.ts:51](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Vector2d.ts#L51)

___

### dotProduct

▸ **dotProduct**(`vector`): `number`

Calculates the dot product of the vector with another vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector` | [`Vector2d`](Vector2d.md) | The vector to calculate the dot product with. |

#### Returns

`number`

- The dot product of the two vectors.

#### Defined in

[src/Classes/Vector2d.ts:86](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Vector2d.ts#L86)

___

### equals

▸ **equals**(`vector`): `boolean`

Checks if the vector is equal to another vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector` | [`Vector2d`](Vector2d.md) | The vector to compare with. |

#### Returns

`boolean`

- True if the vectors are equal, false otherwise.

#### Defined in

[src/Classes/Vector2d.ts:125](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Vector2d.ts#L125)

___

### magnitude

▸ **magnitude**(): `number`

Calculates the magnitude (length) of the vector.

#### Returns

`number`

- The magnitude of the vector.

#### Defined in

[src/Classes/Vector2d.ts:63](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Vector2d.ts#L63)

___

### multiply

▸ **multiply**(`scalar`): [`Vector2d`](Vector2d.md)

Multiplies the vector by a scalar value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scalar` | `number` | The scalar value to multiply the vector by. |

#### Returns

[`Vector2d`](Vector2d.md)

- A new Vector2d object representing the scaled vector.

#### Defined in

[src/Classes/Vector2d.ts:41](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Vector2d.ts#L41)

___

### normalize

▸ **normalize**(): [`Vector2d`](Vector2d.md)

Returns a normalized version of the vector.

**`Throws`**

- Throws an error if the vector is a zero vector.

#### Returns

[`Vector2d`](Vector2d.md)

- A new Vector2d object representing the normalized vector.

#### Defined in

[src/Classes/Vector2d.ts:72](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Vector2d.ts#L72)

___

### subtract

▸ **subtract**(`vector`): [`Vector2d`](Vector2d.md)

Subtracts another vector from the current vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector` | [`Vector2d`](Vector2d.md) | The vector to be subtracted. |

#### Returns

[`Vector2d`](Vector2d.md)

- A new Vector2d object representing the difference between the two vectors.

#### Defined in

[src/Classes/Vector2d.ts:32](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Vector2d.ts#L32)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[src/Classes/Vector2d.ts:129](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/Vector2d.ts#L129)
