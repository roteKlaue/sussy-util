[sussy-util](../README.md) / [functions](./README.md) / callbackify

# callbackify

▸ **callbackify**(`func`, `callback`, `...params`): `Promise`<`void`\>

Executes the given asynchronous function with the provided parameters, and 
calls the callback function when the function has completed with either 
the resolved value or the error that occurred.

**`Async`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | (...`args`: `any`[]) => `any` | The asynchronous function to execute. |
| `callback` | `Function` | The callback function to call when the function has completed. |
| `...params` | `any`[] | The parameters to pass to the asynchronous function. |

#### Returns

`Promise`<`void`\>

A Promise that resolves when the function has completed and the callback has been called.

#### Defined in

[callbackify.ts:14](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/10106df/src/Functions/callbackify.ts#L14)