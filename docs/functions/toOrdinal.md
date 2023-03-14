
[sussy-util](../README.md) / [functions](./README.md) / toOrdinal

# toOrdinal

▸ **toOrdinal**(`n`): `string`

Returns the given number as a string with an ordinal suffix indicating its position in an ordered sequence.

**`Example`**

```ts
// returns '1st'
getOrdinalSuffix(1);
```

**`Example`**

```ts
// returns '42nd'
getOrdinalSuffix(42);
```

**`Example`**

```ts
// returns '123rd'
getOrdinalSuffix(123);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | `number` | The number to be converted to an ordinal string. |

#### Returns

`string`

The ordinal string representation of the given number.

#### Defined in

[toOrdinal.ts:18](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/10106df/src/Functions/toOrdinal.ts#L18)
