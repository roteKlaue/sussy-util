[sussy-util](../README.md) / [functions](./README.md) / asyncHandler

# asyncHandler

▸ **asyncHandler**<`T`\>(`promise`, `...args`): `Promise`<[`any`, ``null`` \| `T`]\>

It takes a promise and returns a promise that resolves to an array of two elements, the first being
the resolved value of the promise and the second being the error if the promise was rejected

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Error` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `promise` | (...`a`: `any`) => `Promise`<`any`\> | (...a: any) => Promise<any> |
| `...args` | `any`[] | any[] - The arguments to pass to the promise. |

#### Returns

`Promise`<[`any`, ``null`` \| `T`]\>

[any | null, null | T]

#### Defined in

[asyncHandler.ts:8](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/10106df/src/Functions/asyncHandler.ts#L8)
