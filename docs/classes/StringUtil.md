[sussy-util](../../README.md) / [classes](../README.md) / StringUtil

# Class: StringUtil

## Table of contents

### Constructors

- [constructor](default.md#constructor)

### Methods

- [camelCase](default.md#camelcase)
- [camelToKebab](default.md#cameltokebab)
- [capitalize](default.md#capitalize)
- [collaps](default.md#collaps)
- [contains](default.md#contains)
- [generatePassword](default.md#generatepassword)
- [getRatingString](default.md#getratingstring)
- [isDiscordUsername](default.md#isdiscordusername)
- [isEmail](default.md#isemail)
- [isEmpty](default.md#isempty)
- [isFloat](default.md#isfloat)
- [isHTTPUrl](default.md#ishttpurl)
- [isIP](default.md#isip)
- [isIPv4](default.md#isipv4)
- [isIPv6](default.md#isipv6)
- [isInteger](default.md#isinteger)
- [isMacAddress](default.md#ismacaddress)
- [isPalindrome](default.md#ispalindrome)
- [isPhoneNumber](default.md#isphonenumber)
- [isStrongPassword](default.md#isstrongpassword)
- [isURL](default.md#isurl)
- [isUrlWithoutHTTP](default.md#isurlwithouthttp)
- [isWeakPassword](default.md#isweakpassword)
- [lowerFirst](default.md#lowerfirst)
- [lpad](default.md#lpad)
- [ltrim](default.md#ltrim)
- [noSpaces](default.md#nospaces)
- [normalizeLineBreaks](default.md#normalizelinebreaks)
- [protectEmail](default.md#protectemail)
- [randomCharacter](default.md#randomcharacter)
- [randomColorCode](default.md#randomcolorcode)
- [randomDiscordUsername](default.md#randomdiscordusername)
- [randomString](default.md#randomstring)
- [repeat](default.md#repeat)
- [reverse](default.md#reverse)
- [rpad](default.md#rpad)
- [rtrim](default.md#rtrim)
- [shorten](default.md#shorten)
- [slugify](default.md#slugify)
- [spilce](default.md#spilce)
- [stripHtmlTags](default.md#striphtmltags)
- [swapCase](default.md#swapcase)
- [toCharCode](default.md#tocharcode)
- [uncapitalize](default.md#uncapitalize)
- [upperFirst](default.md#upperfirst)
- [wordCount](default.md#wordcount)

## Constructors

### constructor

• **new StringUtil**()

#### Overrides

AbstractClass.constructor

#### Defined in

[StringUtil.ts:5](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/StringUtil.ts#L5)

## Methods

### camelCase

▸ `Static` **camelCase**(`str`): `string`

It takes a string, splits it on non-word characters and underscores, capitalizes each word, and
joins them together

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | string - The string to be converted to camelCase |

#### Returns

`string`

The first letter of the string is being returned in lowercase.

#### Defined in

[StringUtil.ts:276](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/StringUtil.ts#L276)

___

### camelToKebab

▸ `Static` **camelToKebab**(`str`): `string`

It takes a string and replaces any lowercase letter followed by an uppercase letter with the
lowercase letter followed by a dash followed by the uppercase letter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | string - The string to convert |

#### Returns

`string`

The string with the first letter lowercase.

#### Defined in

[StringUtil.ts:476](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/StringUtil.ts#L476)

___

### capitalize

▸ `Static` **capitalize**(`value`): `string`

Capitalize the first letter of a string and lowercase the rest.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | string - The string to be capitalized. |

#### Returns

`string`

The first character of the string is being returned in uppercase and the rest of the
string is being returned in lowercase.

#### Defined in

[StringUtil.ts:188](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/StringUtil.ts#L188)

___

### collaps

▸ `Static` **collaps**(`str`): `string`

It takes a string, trims it, splits it into an array of words, filters out any empty words, and
then joins the array back into a string

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | string - The string to be collapsed. |

#### Returns

`string`

A string

#### Defined in

[StringUtil.ts:286](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/StringUtil.ts#L286)

___

### contains

▸ `Static` **contains**(`str`, `substring`, `fromIndex`): `boolean`

It returns true if the string contains the substring, otherwise it returns false

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | The string to search in. |
| `substring` | `string` | The substring to search for. |
| `fromIndex` | `number` | The index at which to begin searching the String object. If omitted, search starts at the beginning of the string. |

#### Returns

`boolean`

The index of the first occurrence of the specified substring, or -1 if there is no such
occurrence.

#### Defined in

[StringUtil.ts:398](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/StringUtil.ts#L398)

___

### generatePassword

▸ `Static` **generatePassword**(`length`, `characters?`): `string`

It generates a random string of a given length, using a given set of characters, and if the
generated string is not strong enough, it generates another one

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `length` | `number` | number - The length of the password to generate |
| `characters?` | `string` | string = "ascdefghijklmnopqrstuvwxyzABCDEFGHIJLMOPRSTUVWXYZ1234567890!$$%&?#*+~'" |

#### Returns

`string`

A string of length `length` that is a strong password.

#### Defined in

[StringUtil.ts:341](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/StringUtil.ts#L341)

___

### getRatingString

▸ `Static` **getRatingString**(`rate`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rate` | `number` |

#### Returns

`string`

#### Defined in

[StringUtil.ts:369](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/StringUtil.ts#L369)

___

### isDiscordUsername

▸ `Static` **isDiscordUsername**(`username`): `boolean`

It returns true if the username is a valid Discord username, and false if it isn't

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `username` | `string` | The username to check. |

#### Returns

`boolean`

A boolean value.

#### Defined in

[StringUtil.ts:68](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/StringUtil.ts#L68)

___

### isEmail

▸ `Static` **isEmail**(`value`): `boolean`

It checks if the value is a string, and if it is, it checks if the string is at least 4
characters long, contains an @ symbol, and ends with a . followed by at least 2 characters

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | string - The value to be tested. |

#### Returns

`boolean`

A boolean value.

#### Defined in

[StringUtil.ts:117](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/StringUtil.ts#L117)

___

### isEmpty

▸ `Static` **isEmpty**(`str`): `boolean`

If the string is null, empty, or equal to an empty string, then it is empty

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | string - The string to check if it's empty. |

#### Returns

`boolean`

a boolean value.

#### Defined in

[StringUtil.ts:448](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/StringUtil.ts#L448)

___

### isFloat

▸ `Static` **isFloat**(`value`): `boolean`

It returns true if the value is a float, otherwise it returns false

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | string - The value to check |

#### Returns

`boolean`

A boolean value.

#### Defined in

[StringUtil.ts:87](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/StringUtil.ts#L87)

___

### isHTTPUrl

▸ `Static` **isHTTPUrl**(`value`): `boolean`

It checks if the value is a valid HTTP URL.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | The value to be tested. |

#### Returns

`boolean`

A boolean value.

#### Defined in

[StringUtil.ts:126](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/StringUtil.ts#L126)

___

### isIP

▸ `Static` **isIP**(`value`): `boolean`

If the value is an IPv4 address, return true. Otherwise, if the value is an IPv6 address,
return true. Otherwise, return false.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | string |

#### Returns

`boolean`

A boolean value.

#### Defined in

[StringUtil.ts:226](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/StringUtil.ts#L226)

___

### isIPv4

▸ `Static` **isIPv4**(`value`): `boolean`

It returns true if the value is a valid IPv4 address, otherwise it returns false.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | The value to check. |

#### Returns

`boolean`

A boolean value.

#### Defined in

[StringUtil.ts:207](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/StringUtil.ts#L207)

___

### isIPv6

▸ `Static` **isIPv6**(`value`): `boolean`

It checks if the value is a valid IPv6 address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | The value to check. |

#### Returns

`boolean`

A boolean value.

#### Defined in

[StringUtil.ts:216](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/StringUtil.ts#L216)

___

### isInteger

▸ `Static` **isInteger**(`value`): `boolean`

If the value is a string, and the string contains only digits, then return true. Otherwise,
return false

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | The value to be tested. |

#### Returns

`boolean`

A boolean value.

#### Defined in

[StringUtil.ts:78](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/StringUtil.ts#L78)

___

### isMacAddress

▸ `Static` **isMacAddress**(`value`): `boolean`

It returns true if the value is a valid MAC address, otherwise it returns false

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | The value to check. |

#### Returns

`boolean`

A boolean value.

#### Defined in

[StringUtil.ts:235](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/StringUtil.ts#L235)

___

### isPalindrome

▸ `Static` **isPalindrome**(`str`): `boolean`

We take a string, convert it to lowercase, split it into an array, reverse the array, join the
array back into a string, and then compare the reversed string to the original string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | string - the string to check if it's a palindrome |

#### Returns

`boolean`

A boolean value.

#### Defined in

[StringUtil.ts:486](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/StringUtil.ts#L486)

___

### isPhoneNumber

▸ `Static` **isPhoneNumber**(`value`): `boolean`

If the value is a string that matches the regular expression, then return true, otherwise return
false.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | string - The value to be tested. |

#### Returns

`boolean`

A boolean value.

#### Defined in

[StringUtil.ts:245](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/StringUtil.ts#L245)

___

### isStrongPassword

▸ `Static` **isStrongPassword**(`value`): `boolean`

The password must be at least eight characters long and contain at least one lowercase letter,
one uppercase letter, one numeric digit, and one special character

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | string - The value to check |

#### Returns

`boolean`

A boolean value.

#### Defined in

[StringUtil.ts:98](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/StringUtil.ts#L98)

___

### isURL

▸ `Static` **isURL**(`value`): `boolean`

If the string is a URL, return true, otherwise return false.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | string |

#### Returns

`boolean`

A boolean value.

#### Defined in

[StringUtil.ts:144](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/StringUtil.ts#L144)

___

### isUrlWithoutHTTP

▸ `Static` **isUrlWithoutHTTP**(`value`): `boolean`

It checks if the value is a valid URL without the HTTP or HTTPS prefix

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | string - The value to be tested. |

#### Returns

`boolean`

A boolean value.

#### Defined in

[StringUtil.ts:135](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/StringUtil.ts#L135)

___

### isWeakPassword

▸ `Static` **isWeakPassword**(`value`): `boolean`

If the password is not strong, then it is weak.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | string - The value to check. |

#### Returns

`boolean`

The return value is a boolean.

#### Defined in

[StringUtil.ts:107](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/StringUtil.ts#L107)

___

### lowerFirst

▸ `Static` **lowerFirst**(`str`): `string`

It takes a string, and returns a new string with the first character lowercased

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | string - The string to be converted. |

#### Returns

`string`

The first character of the string is being returned in lowercase, and the rest of the
string is being returned in its original case.

#### Defined in

[StringUtil.ts:266](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/StringUtil.ts#L266)

___

### lpad

▸ `Static` **lpad**(`str`, `minLen`, `ch?`): `string`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | string - The string to pad. |
| `minLen` | `number` | The minimum length of the string. |
| `ch?` | `string` | The character to pad the string with. |

#### Returns

`string`

The string with the padding.

#### Defined in

[StringUtil.ts:424](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/StringUtil.ts#L424)

___

### ltrim

▸ `Static` **ltrim**(`str`): `string`

It removes all the leading white spaces from a string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | The string to be trimmed. |

#### Returns

`string`

The string with the leading whitespace removed.

#### Defined in

[StringUtil.ts:457](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/StringUtil.ts#L457)

___

### noSpaces

▸ `Static` **noSpaces**(`str`): `string`

It takes a string, trims it, splits it into an array of strings, and then joins it back together

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | string - The string to be trimmed. |

#### Returns

`string`

The string with no spaces.

#### Defined in

[StringUtil.ts:295](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/StringUtil.ts#L295)

___

### normalizeLineBreaks

▸ `Static` **normalizeLineBreaks**(`str`, `lineEnd?`): `string`

It replaces all line breaks with the lineEnd parameter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | string - The string to normalize. |
| `lineEnd?` | `string` | The line ending to normalize to (defaults to \n). |

#### Returns

`string`

A string with all line breaks normalized to the specified lineEnd string, or the
default lineEnd string.

#### Defined in

[StringUtil.ts:380](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/StringUtil.ts#L380)

___

### protectEmail

▸ `Static` **protectEmail**(`str`): `string`

It takes a string, checks if it's an email, splits it in half, shortens the first half, and
returns the result.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | string - The string to protect |

#### Returns

`string`

The email address with the first half of the email address shortened to 3 characters.

#### Defined in

[StringUtil.ts:316](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/StringUtil.ts#L316)

___

### randomCharacter

▸ `Static` **randomCharacter**(`charset?`): `string`

It takes a string of characters and returns a random character from that string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `charset?` | `string` | The characters to choose from. Defaults to all alphanumeric characters. |

#### Returns

`string`

A random character from the charset.

#### Defined in

[StringUtil.ts:24](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/StringUtil.ts#L24)

___

### randomColorCode

▸ `Static` **randomColorCode**(): `string`

It returns a random color code in hexadecimal format.

#### Returns

`string`

A random color code.

#### Defined in

[StringUtil.ts:353](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/StringUtil.ts#L353)

___

### randomDiscordUsername

▸ `Static` **randomDiscordUsername**(`withSufix?`): `string`

It generates a random string, checks if it's a valid discord username, if it's not, it generates
another one, if it is, it returns it.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `withSufix?` | `boolean` | `false` | boolean |

#### Returns

`string`

A random string that is a valid discord username.

#### Defined in

[StringUtil.ts:50](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/StringUtil.ts#L50)

___

### randomString

▸ `Static` **randomString**(`length`, `characterset?`): `string`

Generate a random string of a given length, using a given character set.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `length` | `number` | number - The length of the string to generate |
| `characterset?` | `string` | The characterset to use for the random string. |

#### Returns

`string`

A string of random characters.

#### Defined in

[StringUtil.ts:36](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/StringUtil.ts#L36)

___

### repeat

▸ `Static` **repeat**(`str`, `n`): `string`

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |
| `n` | `number` |

#### Returns

`string`

#### Defined in

[StringUtil.ts:403](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/StringUtil.ts#L403)

___

### reverse

▸ `Static` **reverse**(`input`): `string`

It takes a string, splits it into an array of characters, reverses the array, and joins the
array back into a string

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | The string to be reversed. |

#### Returns

`string`

The reverse of the input string.

#### Defined in

[StringUtil.ts:14](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/StringUtil.ts#L14)

___

### rpad

▸ `Static` **rpad**(`str`, `minLen`, `ch?`): `string`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | string - The string to pad. |
| `minLen` | `number` | The minimum length of the string. |
| `ch?` | `string` | The character to pad the string with. |

#### Returns

`string`

The string with the padding added to it.

#### Defined in

[StringUtil.ts:413](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/StringUtil.ts#L413)

___

### rtrim

▸ `Static` **rtrim**(`str`): `string`

It replaces all the spaces at the end of the string with nothing

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | The string to trim. |

#### Returns

`string`

The string with the whitespace removed from the end.

#### Defined in

[StringUtil.ts:466](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/StringUtil.ts#L466)

___

### shorten

▸ `Static` **shorten**(`value`, `length`, `ellipsisCount`): `string`

It takes a string, a length, and an ellipsis count, and returns a string that is the original
string shortened to the length, with the ellipsis count number of ellipses appended to the end.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | The string to shorten |
| `length` | `number` | The length of the string you want to return. |
| `ellipsisCount` | `number` | The number of dots to use in the ellipsis. |

#### Returns

`string`

The value of the string is being returned.

#### Defined in

[StringUtil.ts:157](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/StringUtil.ts#L157)

___

### slugify

▸ `Static` **slugify**(`str`): `string`

It takes a string, converts it to lowercase, trims it, removes all non-word characters, replaces
all whitespace and underscores with a dash, and removes all leading and trailing dashes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | string - The string to slugify |

#### Returns

`string`

A string

#### Defined in

[StringUtil.ts:169](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/StringUtil.ts#L169)

___

### spilce

▸ `Static` **spilce**(`str`, `offset`, `removeCount`, `text?`): `string`

It takes a string, an offset, a removeCount, and a text, and returns a string.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `str` | `string` | `undefined` | string - The string to be spliced. |
| `offset` | `number` | `undefined` | The index of the string to start replacing at. |
| `removeCount` | `undefined` \| `number` | `undefined` | The amount of characters to remove from the string. |
| `text?` | `string` | `""` | The text to insert into the string. |

#### Returns

`string`

The string with the text inserted at the offset.

#### Defined in

[StringUtil.ts:437](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/StringUtil.ts#L437)

___

### stripHtmlTags

▸ `Static` **stripHtmlTags**(`str`): `string`

It takes a string, and returns a string with all HTML tags removed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | The string to be stripped of HTML tags. |

#### Returns

`string`

The string with all HTML tags removed.

#### Defined in

[StringUtil.ts:178](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/StringUtil.ts#L178)

___

### swapCase

▸ `Static` **swapCase**(`str`): `string`

It takes a string, and returns a string with the first letter of each word capitalized, and the
rest of the letters lowercase.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | string - The string to be swapped. |

#### Returns

`string`

the string with the first letter of each word capitalized.

#### Defined in

[StringUtil.ts:329](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/StringUtil.ts#L329)

___

### toCharCode

▸ `Static` **toCharCode**(`str`): `string`

It takes a string, splits it into an array of characters, maps each character to its charCode,
and then joins the array of charCodes into a string

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | string - The string to convert to char codes. |

#### Returns

`string`

The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16
code unit at the given index.

#### Defined in

[StringUtil.ts:306](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/StringUtil.ts#L306)

___

### uncapitalize

▸ `Static` **uncapitalize**(`value`): `string`

It takes a string and returns the same string with the first letter lowercase.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | string - The string to uncapitalize. |

#### Returns

`string`

The first character of the string is converted to lowercase and then concatenated with
the rest of the string.

#### Defined in

[StringUtil.ts:198](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/StringUtil.ts#L198)

___

### upperFirst

▸ `Static` **upperFirst**(`str`): `string`

It takes a string, gets the first character, makes it uppercase, and then adds the rest of the
string to it

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | string - The string to be converted. |

#### Returns

`string`

The first character of the string is being returned in uppercase, and the rest of the
string is being returned in lowercase.

#### Defined in

[StringUtil.ts:256](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/StringUtil.ts#L256)

___

### wordCount

▸ `Static` **wordCount**(`str`): `number`

It returns the number of words in a string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | string - The string to count the words in. |

#### Returns

`number`

The number of words in the string.

#### Defined in

[StringUtil.ts:362](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/d057c7a/src/Classes/StringUtil.ts#L362)
