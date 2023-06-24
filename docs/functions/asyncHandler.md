[sussy-util](../README.md) / [functions](./README.md) / asyncHandler

# asyncHandler

▸ **asyncHandler**<`T`, `R`\>(`promise`, `...args`): `Promise`<[``null`` \| `R`, ``null`` \| `T`]\>

It takes a promise and returns a promise that resolves to an array of two elements, the first being
the resolved value of the promise and the second being the error if the promise was rejected

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Error` |
| `R` | `R` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `promise` | (...`a`: `any`) => `Promise`<`R`\> | (...a: any) => Promise<R> |
| `...args` | `any`[] | R[] - The arguments to pass to the promise. |

#### Returns

`Promise`<[``null`` \| `R`, ``null`` \| `T`]\>

[R | null, null | T]

#### Defined in

[asyncHandler.ts:8](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/f47bf77/src/Functions/asyncHandler.ts#L8)
