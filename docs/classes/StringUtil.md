[sussy-util](../README.md) / [classes](./README.md) / StringUtil

# Class: StringUtil

## Table of contents

### Methods

- [camelCase](StringUtil.md#camelcase)
- [camelToKebab](StringUtil.md#cameltokebab)
- [capitalize](StringUtil.md#capitalize)
- [collaps](StringUtil.md#collaps)
- [contains](StringUtil.md#contains)
- [generatePassword](StringUtil.md#generatepassword)
- [getRatingString](StringUtil.md#getratingstring)
- [isDiscordUsername](StringUtil.md#isdiscordusername)
- [isEmail](StringUtil.md#isemail)
- [isEmpty](StringUtil.md#isempty)
- [isFloat](StringUtil.md#isfloat)
- [isHTTPUrl](StringUtil.md#ishttpurl)
- [isIP](StringUtil.md#isip)
- [isIPv4](StringUtil.md#isipv4)
- [isIPv6](StringUtil.md#isipv6)
- [isInteger](StringUtil.md#isinteger)
- [isMacAddress](StringUtil.md#ismacaddress)
- [isPalindrome](StringUtil.md#ispalindrome)
- [isPhoneNumber](StringUtil.md#isphonenumber)
- [isStrongPassword](StringUtil.md#isstrongpassword)
- [isURL](StringUtil.md#isurl)
- [isUrlWithoutHTTP](StringUtil.md#isurlwithouthttp)
- [isWeakPassword](StringUtil.md#isweakpassword)
- [lowerFirst](StringUtil.md#lowerfirst)
- [lpad](StringUtil.md#lpad)
- [ltrim](StringUtil.md#ltrim)
- [noSpaces](StringUtil.md#nospaces)
- [normalizeLineBreaks](StringUtil.md#normalizelinebreaks)
- [protectEmail](StringUtil.md#protectemail)
- [randomCharacter](StringUtil.md#randomcharacter)
- [randomColorCode](StringUtil.md#randomcolorcode)
- [randomDiscordUsername](StringUtil.md#randomdiscordusername)
- [randomString](StringUtil.md#randomstring)
- [reverse](StringUtil.md#reverse)
- [rpad](StringUtil.md#rpad)
- [rtrim](StringUtil.md#rtrim)
- [shorten](StringUtil.md#shorten)
- [slugify](StringUtil.md#slugify)
- [spilce](StringUtil.md#spilce)
- [stripHtmlTags](StringUtil.md#striphtmltags)
- [swapCase](StringUtil.md#swapcase)
- [toCharCode](StringUtil.md#tocharcode)
- [uncapitalize](StringUtil.md#uncapitalize)
- [upperFirst](StringUtil.md#upperfirst)
- [wordCount](StringUtil.md#wordcount)

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

[src/Classes/StringUtil.ts:270](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/StringUtil.ts#L270)

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

[src/Classes/StringUtil.ts:465](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/StringUtil.ts#L465)

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

[src/Classes/StringUtil.ts:182](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/StringUtil.ts#L182)

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

[src/Classes/StringUtil.ts:280](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/StringUtil.ts#L280)

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

[src/Classes/StringUtil.ts:392](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/StringUtil.ts#L392)

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

[src/Classes/StringUtil.ts:335](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/StringUtil.ts#L335)

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

[src/Classes/StringUtil.ts:363](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/StringUtil.ts#L363)

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

[src/Classes/StringUtil.ts:62](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/StringUtil.ts#L62)

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

[src/Classes/StringUtil.ts:111](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/StringUtil.ts#L111)

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

[src/Classes/StringUtil.ts:437](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/StringUtil.ts#L437)

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

[src/Classes/StringUtil.ts:81](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/StringUtil.ts#L81)

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

[src/Classes/StringUtil.ts:120](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/StringUtil.ts#L120)

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

[src/Classes/StringUtil.ts:220](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/StringUtil.ts#L220)

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

[src/Classes/StringUtil.ts:201](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/StringUtil.ts#L201)

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

[src/Classes/StringUtil.ts:210](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/StringUtil.ts#L210)

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

[src/Classes/StringUtil.ts:72](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/StringUtil.ts#L72)

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

[src/Classes/StringUtil.ts:229](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/StringUtil.ts#L229)

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

[src/Classes/StringUtil.ts:475](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/StringUtil.ts#L475)

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

[src/Classes/StringUtil.ts:239](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/StringUtil.ts#L239)

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

[src/Classes/StringUtil.ts:92](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/StringUtil.ts#L92)

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

[src/Classes/StringUtil.ts:138](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/StringUtil.ts#L138)

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

[src/Classes/StringUtil.ts:129](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/StringUtil.ts#L129)

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

[src/Classes/StringUtil.ts:101](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/StringUtil.ts#L101)

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

[src/Classes/StringUtil.ts:260](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/StringUtil.ts#L260)

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

[src/Classes/StringUtil.ts:413](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/StringUtil.ts#L413)

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

[src/Classes/StringUtil.ts:446](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/StringUtil.ts#L446)

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

[src/Classes/StringUtil.ts:289](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/StringUtil.ts#L289)

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

[src/Classes/StringUtil.ts:374](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/StringUtil.ts#L374)

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

[src/Classes/StringUtil.ts:310](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/StringUtil.ts#L310)

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

[src/Classes/StringUtil.ts:20](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/StringUtil.ts#L20)

___

### randomColorCode

▸ `Static` **randomColorCode**(): `string`

It returns a random color code in hexadecimal format.

#### Returns

`string`

A random color code.

#### Defined in

[src/Classes/StringUtil.ts:347](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/StringUtil.ts#L347)

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

[src/Classes/StringUtil.ts:45](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/StringUtil.ts#L45)

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

[src/Classes/StringUtil.ts:31](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/StringUtil.ts#L31)

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

[src/Classes/StringUtil.ts:10](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/StringUtil.ts#L10)

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

[src/Classes/StringUtil.ts:402](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/StringUtil.ts#L402)

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

[src/Classes/StringUtil.ts:455](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/StringUtil.ts#L455)

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

[src/Classes/StringUtil.ts:151](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/StringUtil.ts#L151)

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

[src/Classes/StringUtil.ts:163](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/StringUtil.ts#L163)

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

[src/Classes/StringUtil.ts:426](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/StringUtil.ts#L426)

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

[src/Classes/StringUtil.ts:172](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/StringUtil.ts#L172)

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

[src/Classes/StringUtil.ts:323](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/StringUtil.ts#L323)

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

[src/Classes/StringUtil.ts:300](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/StringUtil.ts#L300)

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

[src/Classes/StringUtil.ts:192](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/StringUtil.ts#L192)

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

[src/Classes/StringUtil.ts:250](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/StringUtil.ts#L250)

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

[src/Classes/StringUtil.ts:356](https://github.com/roteKlaue/SussyUtilMadeByMe/blob/b43239d/src/Classes/StringUtil.ts#L356)
