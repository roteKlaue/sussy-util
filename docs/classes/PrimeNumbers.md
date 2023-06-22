[sussy-util](../README.md) / [classes](./README.md) / PrimeNumbers


# Class: PrimeNumbers

## Table of contents

### Constructors

- [constructor](PrimeNumbers.md#constructor)

### Properties

- [current](PrimeNumbers.md#current)
- [primes](PrimeNumbers.md#primes)

### Methods

- [addPrimes](PrimeNumbers.md#addprimes)
- [getTill](PrimeNumbers.md#gettill)

## Constructors

### constructor

• **new PrimeNumbers**()

## Properties

### current

• `Private` **current**: `number` = `0`

#### Defined in

[src/Classes/PrimeNumbers.ts:4](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/PrimeNumbers.ts#L4)

___

### primes

• `Private` **primes**: `number`[] = `[]`

#### Defined in

[src/Classes/PrimeNumbers.ts:5](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/PrimeNumbers.ts#L5)

## Methods

### addPrimes

▸ **addPrimes**(`num`): `number`[]

adds n amount of prime numbers to the the cache and returns it

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `num` | `number` | number - The number of primes to add to the list. |

#### Returns

`number`[]

The array of primes.

#### Defined in

[src/Classes/PrimeNumbers.ts:29](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/PrimeNumbers.ts#L29)

___

### getTill

▸ **getTill**(`num`): `number`[]

It returns an array of prime numbers up to a given number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `num` | `number` | number - The number to get the primes till. |

#### Returns

`number`[]

The primes array.

#### Defined in

[src/Classes/PrimeNumbers.ts:12](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/PrimeNumbers.ts#L12)
