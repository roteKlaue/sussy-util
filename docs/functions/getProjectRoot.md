[sussy-util](../README.md) / [functions](./README.md) / getProjectRoot

# getProjectRoot

▸ **getProjectRoot**(`dirPath`): `string`

"If the package.json file exists in the given directory, return the directory, otherwise, return the
parent directory."

The function is recursive, meaning that it calls itself. It does this until it finds the
package.json file

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dirPath` | `string` | The path to the directory you want to check. |

#### Returns

`string`

#### Defined in

[getProjectRoot.ts:12](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/10106df/src/Functions/getProjectRoot.ts#L12)