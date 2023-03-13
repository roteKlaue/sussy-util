[sussy-util](../README.md) / [classes](./README.md) / StopWatch

# Class: StopWatch

## Table of contents

### Constructors

- [constructor](StopWatch.md#constructor)

### Properties

- [pauseStartTime](StopWatch.md#pausestarttime)
- [rounds](StopWatch.md#rounds)
- [starttime](StopWatch.md#starttime)
- [totalTimePause](StopWatch.md#totaltimepause)

### Methods

- [fixPausedTime](StopWatch.md#fixpausedtime)
- [getRounds](StopWatch.md#getrounds)
- [pause](StopWatch.md#pause)
- [reset](StopWatch.md#reset)
- [resume](StopWatch.md#resume)
- [round](StopWatch.md#round)
- [time](StopWatch.md#time)

## Constructors

### constructor

• **new StopWatch**()

#### Defined in

[StopWatch.ts:9](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/StopWatch.ts#L9)

## Properties

### pauseStartTime

• `Private` **pauseStartTime**: `undefined` \| `number`

#### Defined in

[StopWatch.ts:6](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/StopWatch.ts#L6)

___

### rounds

• `Private` `Readonly` **rounds**: `ImprovedArray`<`number`\>

#### Defined in

[StopWatch.ts:5](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/StopWatch.ts#L5)

___

### starttime

• `Private` **starttime**: `number`

#### Defined in

[StopWatch.ts:4](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/StopWatch.ts#L4)

___

### totalTimePause

• `Private` **totalTimePause**: `number` = `0`

#### Defined in

[StopWatch.ts:7](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/StopWatch.ts#L7)

## Methods

### fixPausedTime

▸ `Private` **fixPausedTime**(): `void`

If the pauseStartTime is set, then set the totalTimePause to the current time minus the
pauseStartTime and set the pauseStartTime to the current time.

#### Returns

`void`

#### Defined in

[StopWatch.ts:17](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/StopWatch.ts#L17)

___

### getRounds

▸ **getRounds**(): `Array`<`number`\>

This function returns the rounds array.

#### Returns

`StopWatch`<`number`\>

The rounds array.

#### Defined in

[StopWatch.ts:58](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/StopWatch.ts#L58)

___

### pause

▸ **pause**(): `void`

If the pauseStartTime is not set, then set it to the current time.

#### Returns

`void`

#### Defined in

[StopWatch.ts:65](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/StopWatch.ts#L65)

___

### reset

▸ **reset**(): `void`

Reset the timer to its initial state.

#### Returns

`void`

#### Defined in

[StopWatch.ts:37](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/StopWatch.ts#L37)

___

### resume

▸ **resume**(): `void`

If the pauseStartTime is defined, then fix the paused time and set the pauseStartTime to
undefined.

#### Returns

`void`

#### Defined in

[StopWatch.ts:73](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/StopWatch.ts#L73)

___

### round

▸ **round**(): `void`

It takes the current time, subtracts the total time paused, and subtracts the sum of all
previous rounds.

#### Returns

`void`

#### Defined in

[StopWatch.ts:29](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/StopWatch.ts#L29)

___

### time

▸ **time**(): `number`

If the game is paused, add the time that has passed since the game was paused to the total time
that the game has been paused.

#### Returns

`number`

The time since the timer was started, minus the time the timer was paused.

#### Defined in

[StopWatch.ts:49](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b66779f/src/Classes/StopWatch.ts#L49)
