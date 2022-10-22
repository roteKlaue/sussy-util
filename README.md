<h3 align="center">SussyUtilByRaphael</h3>
<p align="center">
    Just a few Functions and Classes made by ME
    <br>
    <strong>Version 1.3.1</strong>
</p>

# Table of Contents
- [Table of Contents](#table-of-contents)
  - [Classes](#classes)
    - [Collection](#collection)
    - [ImprovedArray](#improvedarray)
    - [Stack](#stack)
    - [Set](#set)
    - [StringUtil](#stringutil)
  - [Functions](#functions)
    - [asyncHandler](#asynchandler)
    - [bytesToSize](#bytestosize)
    - [isEven](#iseven)
    - [isOdd](#isodd)
    - [isPrime](#isprime)
    - [getRandomNumberInRange](#getrandomnumberinrange)
    - [isSymbol](#issymbol)
    - [isArray](#isarray)
    - [isBoolean](#isboolean)
    - [isNullorUndefined](#isnullorundefined)
    - [isNumber](#isnumber)
    - [isRegExp](#isregexp)
    - [isString](#isstring)
    - [merge](#merge)
    - [removeDuplicatesArray](#removeduplicatesarray)
    - [removeFirstDigit](#removefirstdigit)
    - [removeLastDigit](#removelastdigit)
    - [removeXDigits](#removexdigits)
    - [callbackify](#callbackify)
    - [betterRound](#betterround)
    - [isFunction](#isfunction)
    - [hasValue](#hasvalue)
  - [Going from 1.0.X to 1.1.X](#going-from-10x-to-11x)
  - [Going from 1.1.X to 1.2.X](#going-from-11x-to-12x)

## Classes

 - [Collection](#collection)
 - [ImprovedArray](#improvedarray)
 - [Stack](#stack)
 - [Set](#set)
 - [StringUtil](#stringutil)

### Collection
>```js
> // create a collection
> const { Collection } = require('sussyutilbyraphaelbader');
> const collection = new Collection();
>
> //usage example
> collection.add({ key: /* your key */ , value: /* your value */ });
> const value = collection.get(key);
> collection.remove(key);
>```

### ImprovedArray

>```js
> // create a ImprovedArray
> const { ImprovedArray } = require('sussyutilbyraphaelbader');
> const array = new ImprovedArray(/* put initial items here */);
>
> //usage example
> //has all Array functions
> array.insertAt(index, ...values); // inserts items at index
> array.remove(index); // remove elements from array at index
> const index = array.getRandomIndex(); // returns random index of array
> const element = array.getRandomElement(); // returns element at random index
> array.clear(); // removes all elements
> array.clone(); // returns clone
> const empty = array.isEmpty(); // returns if the array is empty true else false
> array.none(function); // returns true if none of the array elements fits the specified function
> array.rejected(function); // opposite of Array.prototype.filter
>```

### Stack

>```js
> // create a Stack
> const { Stack } = require('sussyutilbyraphaelbader');
> const stack = new Stack();
>
> //usage example
> stack.push(...elm); // put elm on top of stack
> const value = stack.pop(); // returns value on top of stack and removes it
> const value = stack.peek(); // returns value on top of stack without removing it
> stack.empty(); // returns if stack is empty
>```

### Set

>```js
> // create a Set
> const { Set } = require('sussyutilbyraphaelbader');
> const set = new Set();
>
> //usage example
> set.push(elm); // put elm in set if not already in set
> set.delete(elm); // removes the first elements which equals elm
> set.isEmpty(); // returns if set is empty
> const elm = set.get(index); // returns elm at index
> const length = set.length(); // returns number of elements in set
> set.remove(number); // removes the element at index
>```

### StringUtil

>```ts
> // create a Stack
> const { StringUtil } = require('sussyutilbyraphaelbader');
> const stringUtil = new StringUtil();
>
> //static function example usage
> StringUtil.reverse("Sussy"); // reverses the string | output: yssus
> StringUtil.isDiscordUsername("Sussy#1234"); // checks if string is a discord username | output: true
> StringUtil.isStrongPassword("kaljsd"); // checks if string is a strong password | output: false
>
> //usage example
> stringUtil.randomCharacter(); // returns a random character based on the current charset
> stringUtil.randomString(length); // returns a random string with the length given
> stringUtil.randomDiscordUsername(withSufix:boolean); // returns a random string with length 4 - 32 if withSufix is true then # and 4 random numbers will be added
> stringUtil.generatePassword(length); // returns a random strong password with given length if charset allows it
>```

## Functions

  - [asyncHandler](#asynchandler)
  - [bytesToSize](#bytestosize)
  - [isEven](#iseven)
  - [isPrime](#isprime)
  - [isOdd](#isodd)
  - [getRandomNumberInRange](#getrandomnumberinrange)
  - [isSymbol](#issymbol)
  - [isArray](#isarray)
  - [isBoolean](#isboolean)
  - [isNullorUndefined](#isnullorundefined)
  - [isNumber](#isnumber)
  - [isRegExp](#isregexp)
  - [isString](#isstring)
  - [merge](#merge)
  - [removeDuplicatesArray](#removeduplicatesarray)
  - [removeFirstDigit](#removefirstdigit)
  - [removeLastDigit](#removelastdigit)
  - [removeXDigits](#removexdigits)
  - [callbackify](#callbackify)
  - [betterRound](#betterround)
  - [isFunction](#isfunction)
  - [hasValue](#hasvalue)

### asyncHandler

>```js
> const { asyncHandler } = require('sussyutilbyraphaelbader');
> const [ result, error ] = await asyncHandler(promiseFunction, params);
> if(error) {
>   console.log(error);
> }
>
> if(result) {
>   // do stuff
> }
>```

### bytesToSize

>```js
> const { bytesToSize } = require('sussyutilbyraphaelbader');
> const bytesString = bytesToSize(12300);
> console.log(bytesString); // output: 12.0 KB
>```

### isEven

>```js
> const { isEven } = require('sussyutilbyraphaelbader');
> console.log(isEven(22)); // output: true
>```

### isOdd

>```js
> const { isOdd } = require('sussyutilbyraphaelbader');
> console.log(isOdd(22)); // output: false
>```

### isPrime

>```js
> const { isPrime } = require('sussyutilbyraphaelbader');
> console.log(isEven(7)); // output: true
> console.log(isEven(22)); // output: false
>```

### getRandomNumberInRange

>```js
> const { getRandomNumberInRange } = require('sussyutilbyraphaelbader'); 
> console.log(getRandomNumberInRange(1,5); // output:random number from 1 to 5
> ```

### isSymbol

>```js
> const { isSymbol } = require('sussyutilbyraphaelbader');
> console.log(isSymbol(Symbol("sus"))); // output: true
> ```

### isArray

>```js
> const { isArray } = require('sussyutilbyraphaelbader');
> console.log(isArray([12,123,45]); // output: true
> ```

### isBoolean

>```js
> const { isBoolean } = require('sussyutilbyraphaelbader');
> console.log(isBoolean(true); // output: true
> console.log(isBoolean("true"); //output: true
> console.log(isBoolean("s.jads")); // output: false
> ```

### isNullorUndefined

>```js
> const { isNullOrUndefined } = require('sussyutilbyraphaelbader');
> console.log(isNullOrUndefined("true"); // output: false
> console.log(isNullOrUndefined(null); // output: true
> ```

### isNumber

>```js
> const { isNumber } = require('sussyutilbyraphaelbader');
> console.log(isNumber(234)); // output: true
> console.log(isNumber("234")); // output: true
> ```

### isRegExp

>```js
> const { isRegExp } = require('sussyutilbyraphaelbader');
> console.log(isRegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)); // output: true
> ```

### isString

>```js
> const { isString } = require('sussyutilbyraphaelbader');
> console.log(isString("hello")); // output: true
> ```

### merge

>```js
> const { merge } = require('sussyutilbyraphaelbader');
> console.log(merge({ a:12, b:34 }, { m:34 })); // output: { a:12, b:34, m:34 }
>```

### removeDuplicatesArray

>```js
> const { removeDuplicatesArray } = require('sussyutilbyraphaelbader');
> console.log(removeDuplicatesArray([12,223,12,12]); // output: [12,223]
> ```

### removeFirstDigit 

>```js
> const { removeFirstDigit } = require('sussyutilbyraphaelbader');
> console.log(removeFirstDigit(123); // output: 23
> ```

### removeLastDigit

>```js
> const { removeLastDigit } = require('sussyutilbyraphaelbader');
> console.log(removeLastDigit(123)); // output: 12
> ```

### removeXDigits

>```js
> const { removeXDigits } = require('sussyutilbyraphaelbader');
> console.log(removeXDigits(7213, 3); // removes x amount of digits from behind | output: 7
> ```

### callbackify

>```js
> const { callbackify, betterRound } = require('sussyutilbyraphaelbader');
> callbackify(betterRound, (res, err) => {
>   if(err) {
>     //do something
>   }
>   console.log(res); // output: 123.12
> },
> 123.123, 2);
> ```

### betterRound

>```js
> const { betterRound } = require('sussyutilbyraphaelbader');
> console.log(betterRound(123.56, 1)); // output: 123.6
> ```

### isFunction

>```js
> const { isFunction } = require('sussyutilbyraphaelbader');
> console.log(isFunction(() => {}); // output: true
> ```

### hasValue

>```js
> const { hasValue } = require('sussyutilbyraphaelbader');
> console.log(hasValue(123)); // output: true
> console.log(hasValue([]); // output: false
> console.log(hasValue([23]); // output: true
> console.log(hasValue([[],[]]); // output: false
> console.log(hasValue(() => {})); // output: true
> console.log(hasValue(undefined)); // output: false
> console.log(hasValue(true)); // output: true
> console.log(hasValue(false)); // output: true
> console.log(hasValue(new RegExp())); // output: false
> console.log(hasValue(new RegExp("sus")); // output: true
> console.log(hasValue(""); // output: false
> console.log(hasValue(" amogus "); // output: true
> ```

## Going from 1.0.X to 1.1.X
renamed Class impArray to improvedArray

>```js
>//old
>const { impArray } = require('sussyutilbyraphaelbader');
>const array = new impArray();
>
>//new
>const { improvedArray } = require('sussyutilbyraphaelbader');
>const array = new improvedArray();
>```

## Going from 1.1.X to 1.2.X
renamed Class improvedArray to ImprovedArray

>```js
>//old
>const { improvedArray } = require('sussyutilbyraphaelbader');
>const array = new improvedArray();
>
>//new
>const { ImprovedArray } = require('sussyutilbyraphaelbader');
>const a = new ImprovedArray();
>```