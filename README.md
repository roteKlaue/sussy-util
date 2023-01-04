<p align="center" style="height: 200px;"><img src="./logo.png"></p>
<h3 align="center">Sussy Util</h3>
<p align="center">
    Just a few Functions and Classes made by me
    <br>
    <strong>Version 1.9.0</strong>
    <br>
    <a href="https://www.npmjs.com/package/sussy-util">
        <img src="https://img.shields.io/npm/v/sussy-util.svg?style=flat">
    </a>
    <a href="https://npmjs.org/package/sussy-util">
        <img src="https://img.shields.io/npm/dt/sussy-util.svg?style=flat">
    </a>
    <a href="https://packagephobia.com/result?p=sussy-util">
        <img src="https://packagephobia.com/badge?p=sussy-util">
    </a>
    <a href="#contributors">
        <img src="https://img.shields.io/badge/all_contributors-1-red.svg?style=flat">
    </a>
    <a href="https://www.npmjs.com/package/sussy-util"> 
        <img src="https://shields.io/npm/l/sussy-util.svg"> 
    </a>
    <a href="https://www.jsdelivr.com/package/npm/sussy-util"> 
        <img src="https://data.jsdelivr.com/v1/package/npm/sussy-util/badge?style=rounded"> 
    </a>
</p>

# Table of Contents
- [Table of Contents](#table-of-contents)
  - [Classes](#classes)
    - [AbstractClass](#abstractclass)
    - [BetterMath](#bettermath)
    - [Collection](#collection)
    - [DateUtil](#dateutil)
    - [ImprovedArray](#improvedarray)
    - [IsSomething](#issomething)
    - [PrimeNumbers](#primenumbers)
    - [Random](#random)
    - [Set](#set)
    - [Stack](#stack)
    - [StringUtil](#stringutil)
  - [Functions](#functions)
    - [addProperty](#addproperty)
    - [asyncHandler](#asynchandler)
    - [attributesToArray](#attributestoarray)
    - [betterRound](#betterround)
    - [bytesToSize](#bytestosize)
    - [callbackify](#callbackify)
    - [callIfFunction](#calliffunction)
    - [deepClone](#deepclone)
    - [getTypeString](#gettypestring)
    - [hasProperty](#hasproperty)
    - [hasValue](#hasvalue)
    - [measureTime](#measuretime)
    - [merge](#merge)
    - [objectToString](#objecttostring)
    - [removeFirstDigit](#removefirstdigit)
    - [removeLastDigit](#removelastdigit)
    - [removeProperty](#removeproperty)
    - [removeXDigits](#removexdigits)
    - [strickJSONParse](#strickjsonparse)
  - [Types and Interfaces](#types-and-interfaces)
    - [MapEntry](#mapentry)
    - [MutableObject](#mutableobject)
    - [PromiseOr](#promiseor)
  - [Updating](#updating)
    - [Going from 1.0.X to 1.1.X](#going-from-10x-to-11x)
    - [Going from 1.1.X to 1.2.X](#going-from-11x-to-12x)
    - [Going from 1.4.X to 1.5.X](#going-from-14x-to-15x)
    - [Going from 1.5.X to 1.6.X](#going-from-15x-to-16x)
    - [Going from 1.6.X to 1.7.X](#going-from-16x-to-17x)
  - [Change Log](#change-log)
    - [v1.5.0](#v150)
    - [v1.6.0-alpha](#v160-alpha)
    - [v1.6.0-beta](#v160-beta)
    - [v1.6.0](#v160)
    - [v1.7.0-alpha](#v170-alpha)
    - [v1.7.0-beta](#v170-beta)
    - [v1.7.0](#v170)
    - [v1.7.1](#v171)
    - [v1.8.0](#v180)

## Classes

 - [AbstractClass](#abstractclass)
 - [Collection](#collection)
 - [DateUtil](#dateutil)
 - [IsSomething](#issomething)
 - [ImprovedArray](#improvedarray)
 - [Random](#random)
 - [Set](#set)
 - [Stack](#stack)
 - [StringUtil](#stringutil)

### AbstractClass

This class allows you to make an abstract class in JavaScript.

Usage:
>```js
> const { AbstractClass } = require('sussy-util');
> class SUS extends AbstractClass {
>   constructor() {
>     super(SUS); // now it will throw an error if you try to make an instance of this class without extending it first
>   }
> }
>```

### BetterMath

>```js
> const { BetterMath } = require('sussy-util');
> BetterMath.distance(...Point); // returns the total distance between all given points
> BetterMath.round(number, digit); // returns round a number to a certain digit
> BetterMath.square(number); // returns the square of a number
> BetterMath.greatestCommonDivisor(a, b);
> BetterMath.gcd(a, b); // identical to BetterMath.greatestCommonDivisor
> BetterMath.lowestCommonDenominator(a,b);
> BetterMath.lcm(a, b); // identical to BetterMath.lowestCommonDenominator
> BetterMath.average([13, 12, 11]); // returns the average value of a number array
> BetterMath.avg(); // identical to BetterMath.average
> BetterMath.median();
>```

### Collection
>```js
> // create a collection
> const { Collection } = require('sussy-util');
> const collection = new Collection();
>
> //usage example
> collection.add({ key: /* your key */ , value: /* your value */ });
> collection.put({ key: /* your key */ , value: /* your value */ }); // add or replace
> const value = collection.get(key);
> collection.remove(key);
> collection.toArray(); // returns a array of MapEntry
> collection.has(key);
> collection.missing(key);
> collection.toString();
> collection.toJSONString();
> collection.count(); // returns the amount of entries
>```

### DateUtil

>```js
> // get DateUtil class
> const { DateUtil } = require('sussy-util');
>
> //static functions
> DateUtil.getCurrentDate(); // returns the current date
> DateUtil.today(); // returns the current date at 00:00:00
> DateUtil.tomorrow(); // returns the next day at 00:00:00
> DateUtil.yesterday(); // returns the last day at 00:00:00
> DateUtil.conpareDates(date1,date2); // returns and interger based on which date is bigger
> DateUtil.equals(date1, date2); // returns boolean based of if both dates are identical
> DateUtil.getMonthAbbr(month); // returns the abbreviated month name based on the number given 
> DateUtil.getMonthFullName(month); // returns the full month name based on the number given 
> DateUtil.getDayAbbr(day); // returns the abbreviated day name based on the number given
> DateUtil.getDayFullName(day); // returns the full day name based on the number given
> DateUtil.isLeapYear(year); // returns boolean based on if the given year is a leap year
> DateUtil.weekFirstDay(); // returns the first week day of the current week
> DateUtil.weekLastDay(); // returns the last week day of the current week
> DateUtil.leapYearsInRange(12, 2020); // returns all leap years in the given range
> DateUtil.getMonthFirstDay(); // returns the first day of the current month
> DateUtil.getMonthLastDay(); // returns the last day of the current month
> ```

### ImprovedArray

>```js
> // create a ImprovedArray
> const { ImprovedArray } = require('sussy-util');
> const array = new ImprovedArray(/* put initial items here */);
>
> //usage example
> // getting items from array
> const elm = array[index];
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
> array.sum(); // returns the sum of all elements of the array
> array.removeDuplicates(); // removes duplicates
> array.scramble(); // scrambles the array
> array.countOccurrences(value); // counts how often the value given is in the array
> array.flatten(); // flattens the array
> array.toJSONString();
>```

### IsSomething

>```js
> // get IsSomething class
> const { IsSomething } = require('sussy-util');
>
> // static methods
> IsSomething.isArray(); // returns true if the given value is a array
> IsSomething.isBoolean(); // returns true if the given value is a boolean
> IsSomething.isClass(); // returns if the given value is a class constructor
> IsSomething.isDate(); // returns true if the given value is a instanceof Date
> IsSomething.isError(); // returns true if the given value is a instanceof Error
> IsSomething.isEven(); // returns true if the given  number is even returns null if given value is not a number
> IsSomething.isFunction(); // returns true if the given value is a function
> IsSomething.isNullorUndefined(); // returns true if the given value is null or undefined
> IsSomething.isNumber(); // returns true if the given value is a number or a string which contains only digits
> IsSomething.isObject(); // returns true if the given value is a object but not an array
> IsSomething.isPrime(); // returns true if the given number is a prime number returns null if given value is not a number
> IsSomething.isRegExp(); // returns true if the given value is a regular expression
> IsSomething.isString(); // returns true if the given value is a string
> IsSomething.isSymbol(); // returns true if the given is a instanceof Symbol
> ```

### PrimeNumbers
Get prime numbers and save them in an array for later use

>```js
> const { PrimeNumbers } = require('sussy-util');
> const primes = new PrimeNumbers();
> primes.getTill(highedsNumber);
> primes.addPrimes(amount);
>```

### Random

>```js
>const { Random } = require('sussy-util');
>
>Random.randomInt(upper, lower); // returns a random integer with upper and lower bounds given
>Random.randomDouble(upper, lower); // returns a random double with upper and lower bounds
>Random.randomString(length, charset?); // returns a random string with given length and charset
>Random.randomChar(charset?); // returns a random char with given charset
>Random.randomElement(array?); // returns a random element of an array
>Random.randomElementInRange(array?); // returns a random element of an array in range
>```

### Set

>```js
> // create a Set
> const { Set } = require('sussy-util');
> const set = new Set();
>
> //usage example
> set.push(elm); // put elm in set if not already in set
> set.delete(elm); // removes the first elements which equals elm
> set.isEmpty(); // returns if set is empty
> const elm = set.get(index); // returns elm at index
> const length = set.length(); // returns number of elements in set
> set.remove(number); // removes the element at index
> set.changeCheckFunction(() => {}); // changes the check function for each element
> set.toString();
> set.toJSONString();
>```

### Stack

>```js
> // create a Stack
> const { Stack } = require('sussy-util');
> const stack = new Stack();
>
> //usage example
> stack.push(...elm); // put elm on top of stack
> const value = stack.pop(); // returns value on top of stack and removes it
> const value = stack.peek(); // returns value on top of stack without removing it
> stack.empty(); // returns if stack is empty
> stack.toArray(); // returns stack as array
> stack.toString();
> stack.toJSONString();
>```

### StringUtil

>```ts
> // get StringUtil class
> const { StringUtil } = require('sussy-util');
>
> //static function example usage
> StringUtil.reverse("Sussy"); // reverses the string | output: yssus
> StringUtil.isDiscordUsername("Sussy#1234"); // checks if string is a discord username | output: true
> StringUtil.isStrongPassword("kaljsd"); // checks if string is a strong password | output: false
> StringUtil.isWeakPassword("kaljsd"); // checks if string is a weak password | output: true
> StringUtil.isEmail("sussyBalls@gmail.com"); // checks if string is a email  | output: true
> StringUtil.isInteger("12wqeq"); // output: false
> StringUtil.isURL("https://sus.com/"); // output: true
> StringUtil.shorten("Amogus SUS", length, elipse count);
> StringUtil.slugify("Amogus SUS"); // returns amogus-sus
> StringUtil.stripHtmlTags("<sussy> balls </sussy>") // removes html tags | returns balls
> StringUtil.capitalize("no bitches?"); // Makes the first letter uppercase and the rest lowercase | returns No bitches?
> StringUtil.isIPv6("::1"); // checks if string is a IPv6 address | returns true
> StringUtil.isIPv4("127.0.0.1"); // checks if string is a IPv4 address | returns true
> StringUtil.isIP("168.10.0.1"|"c927:501c:abf9:bc8f:c86d:541a:c354:120f"); // checks whether string is a IP address or not | eturns true
> StringUtil.isMacAddress("82-D3-32-D3-5D-43"); // checks if string is a MAC address |  returns true
> StringUtil.isPhoneNumber(""); // checks if string is a phone number
> StringUtil.camelCase("sus amogus"); // uses the capitalize function | returns Sus Amogus
> StringUtil.randomColorCode(); // returns random hex color code
> StringUtil.randomCharacter(charset?); // returns a random character based on the current charset
> StringUtil.randomString(length, charset?); // returns a random string with the length given
> StringUtil.randomDiscordUsername(withSufix:boolean); // returns a random string with length 4 - 32 if withSufix is true then # and 4 random numbers will be added
> StringUtil.generatePassword(length, charset?); // returns a random strong password with given length if charset allows it
> StringUtil.wordCount(string); // returns the amount of words in the string
> StringUtil.getRatingString(number of stars); // 1 - 5 stars returns full/empty stars
> StringUtil.normalizeLineBreaks(string, lineEnd?); // returns string with only one type of line break
> StringUtil.contains(string, searchsParam); // returns boolean based on if the second string is in the first string
> StringUtil.repeat(string, number); // returns string repeated number amount of times
> StringUtil.rpad(string, number); // returns string padded on the right site to given length: number
> StringUtil.lpad(string, number); // returns string padded on the left site to given length: number
> StringUtil.uncapitalize(string);
> StringUtil.isFloat(string);
> StringUtil.splice();
> StringUtil.rtrim();
> StringUtil.ltrim();
>```

## Functions
  - [addProperty](#addproperty)
  - [asyncHandler](#asynchandler)
  - [attributesToArray](#attributestoarray)
  - [betterRound](#betterround)
  - [bytesToSize](#bytestosize)
  - [callbackify](#callbackify)
  - [callIfFunction](#calliffunction)
  - [deepClone](#deepclone)
  - [getTypeString](#gettypestring)
  - [hasProperty](#hasproperty)
  - [hasValue](#hasvalue)
  - [measureTime](#measuretime)
  - [merge](#merge)
  - [objectToString](#objecttostring)
  - [removeFirstDigit](#removefirstdigit)
  - [removeLastDigit](#removelastdigit)
  - [removeProperty](#removeproperty)
  - [removeXDigits](#removexdigits)
  - [strickJSONParse](#strickjsonparse)

### addProperty

>```js
> const { addProperty } = require('sussy-util');
> addProperty({sus:true}, "imposter", true); // output: { sus:true, imposter:true }
>```

### asyncHandler

>```js
> const { asyncHandler } = require('sussy-util');
> const [ result, error ] = await asyncHandler(promiseFunction, params);
> if(error) {
>   console.log(error);
> }
>
> if(result) {
>   // do stuff
> }
>```

### attributesToArray

>```js
> const { attributesToArray } = require('sussy-util');
> attributesToArray({ sus:true, imposter:true }, true); // output: [true, true];
>```

### betterRound

>```js
> const { betterRound } = require('sussy-util');
> console.log(betterRound(123.56, 1)); // output: 123.6
> ```

### bytesToSize

>```js
> const { bytesToSize } = require('sussy-util');
> const bytesString = bytesToSize(12300);
> console.log(bytesString); // output: 12.0 KB
>```

### callbackify

>```js
> const { callbackify, betterRound } = require('sussy-util');
> callbackify(betterRound, (res, err) => {
>   if(err) {
>     //do something
>   }
>   console.log(res); // output: 123.12
> },
> 123.123, 2);
> ```

### callIfFunction

>```js
> const { callIfFunction } = require('sussy-util');
> callIfFunction(() => true); // output: true
> callIfFunction({hi:false}); // output: null
>```

### deepClone

>```js
> const { deepClone } = require('sussy-util');
> deepClone({er:true, us:{or:true}}): // output: {er:true, us:{or:true}}
>```

### getTypeString 

>```js
> const { getTypeString } = require('sussy-util');
> getTypeString(213); // output: number
> getTypeString("sad"); // output: string
> getTypeString(class sus { constructor(){} }); // output: class
> getTypeString(() => {}); // output: function
> ```

### hasProperty

>```js
> const { hasProperty } = require('sussy-util');
> hasProperty({ sus:true }, "sus"); // output: true
> ```

### hasValue

>```js
> const { hasValue } = require('sussy-util');
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

### measureTime

> ```js
> const { measureTime } = require('sussy-util');
> measureTime(label, function, params); // logs the time it takes to run the function
> ```

### merge

>```js
> const { merge } = require('sussy-util');
> console.log(merge({ a:12, b:34 }, { m:34 })); // output: { a:12, b:34, m:34 }
>```

### objectToString

>```js
> const { objectToString } = require('sussy-util');
> objectToString({}); // output: [object Object]
>```

### removeFirstDigit 

>```js
> const { removeFirstDigit } = require('sussy-util');
> console.log(removeFirstDigit(123); // output: 23
> ```

### removeLastDigit

>```js
> const { removeLastDigit } = require('sussy-util');
> console.log(removeLastDigit(123)); // output: 12
> ```

### removeProperty

>```js
> const { removeProperty } = require('sussy-util');
> removeProperty({ sus:true, imposter:true }, "imposter"); // output: { sus:true }
>```

### removeXDigits

>```js
> const { removeXDigits } = require('sussy-util');
> console.log(removeXDigits(7213, 3); // removes x amount of digits from behind | output: 7
> ```

### strickJSONParse

>```js
> const { strickJSONParse } = require('sussy-util');
> strickJSONParse("{ sus:true }"); // output: { sus:true }
>```

## Types and Interfaces
  - [MapEntry](#mapentry)
  - [MutableObject](#mutableobject)
  - [PromiseOr](#promiseor)

### MapEntry

>```ts
> const { MapEntry } = require('sussy-util');
> const keyValue = {} as MapEntry;
> console.log(keyValue); // output: { key: undefined, value: undefined };
>```

### MutableObject

>```ts
> const { MutableObject } = require('sussy-util');
> const sussy = { sus:true, imposter:true, mine:"no" } as MutableObject<any>;
> sussy["temp"] = 3; // allowed
>```

### PromiseOr

>```ts
> const { PromiseOr } = require('sussy-util');
> function dummy():PromiseOr<string> {}; // returns promise<string> | string
> ```

## Updating

### Going from 1.0.X to 1.1.X
renamed Class impArray to improvedArray

>```js
>// old
>const { impArray } = require('sussy-util');
>const array = new impArray();
>
>// new
>const { improvedArray } = require('sussy-util');
>const array = new improvedArray();
>```

### Going from 1.1.X to 1.2.X
renamed Class improvedArray to ImprovedArray

>```js
>// old
>const { improvedArray } = require('sussy-util');
>const array = new improvedArray();
>
>// new
>const { ImprovedArray } = require('sussy-util');
>const a = new ImprovedArray();
>```

### Going from 1.4.X to 1.5.X
Made all the non static String Functions static

>```js
>// old
>const { StringUtil } = require('sussy-util');
>const util = new StringUtil();
>util.generatePassword(length);
>
> // new
>const { StringUtil } = require('sussy-util');
>StringUtil.generatePassword(length, charset?);
>```

### Going from 1.5.X to 1.6.X
Brought all isSomething functions into the IsSomething class as static functions

>```js
> // old
> const { isFunction } = require('sussy-util');
> isFunction(() => { return true }) // output: true
>
> // new
> const { IsSomething } = require('sussy-util');
> IsSomething.isFunction(() => {}); // output: true
>```

### Going from 1.6.X to 1.7.X

>```js
> // old	
> const { getNumberInRange } = require('sussy-util');
> getNumberInRange(1,4);
> 
> // new
> const { Random } = require('sussy-util');
> Random.randomInt(1,4);
> ```

## Change Log

### v1.5.0

`Changes`

changed StringUtil.prototype.generatePassword to StringUtil.generatePassword <br>
added new param to StringUtil.generatePassword <br>
<br>
changed StringUtil.prototype.generateString to StringUtil.generatePassword <br>
added new param to StringUtil.generateString <br>
<br>
changed StringUtil.prototype.generateCharacter to StringUtil.generateCharacter <br>
added new param to StringUtil.generateCharacter <br>
<br>
changed merge to accept MutableObject instead of Object <br>

`New`

added callIfFunction function<br>
added attributesToArray function<br>
added addProperty function<br>
added hasProperty function<br>
added isObject function<br>
added removeProperty function<br>
added DateUtil.getMonthFirstDay<br>
added DateUtil.getMonthLastDay<br>
added ImprovedArray.prototype.flatten<br>
added StringUtil.contains<br>
added StringUtil.getRatingString<br>
added StringUtil.normalizeLineBreaks<br>
added	StringUtil.wordCount<br>
added MutableObject interface<br>

### v1.6.0-alpha

`New`

added IsSomething class<br>
added IsSomething.isArray function<br>
added IsSomething.isBoolean function <br>
added IsSomething.isClass function<br>
added IsSomething.isDate function<br>
added IsSomething.isError function<br>
added IsSomething.isEven function<br>
added IsSomething.isFunction function<br>
added IsSomething.isNullorUndefined function<br>
added IsSomething.isNumber function<br>
added IsSomething.isObject function<br>
added IsSomething.isOdd function<br>
added IsSomething.isPrime function<br>
added IsSomething.isRegExp function<br>
added IsSomething.isString function<br>
added IsSomething.isSymbol function<br>

### v1.6.0-beta

`New`

added objectToMutableObject function<br>
added IsSomething.isDefined function<br>
added IsSomething.isEmpty function<br>
added IsSomething.isInfinite function<br>
added IsSomething.isPrimitive function<br>
added IsSomething.isType function<br>
added IsSomething.isInstanceOf function<br>

### v1.6.0

`Change`

deprecated isArray function<br>
deprecated isBoolean function <br>
deprecated isClass function<br>
deprecated isDate function<br>
deprecated isError function<br>
deprecated isEven function<br>
deprecated isFunction function<br>
deprecated isNullorUndefined function<br>
deprecated isNumber function<br>
deprecated isObject function<br>
deprecated isOdd function<br>
deprecated isPrime function<br>
deprecated isRegExp function<br>
deprecated isString function<br>
deprecated isSymbol function<br>

### v1.7.0-alpha

`Change`

renamed function StringUtil.isNumber to StringUtil.isInteger<br>

`Added`

added StringUtil.splice function<br>
added StringUtil.isFloat function<br>
added StringUtil.ltrim function<br>
added StringUtil.rtrim function<br>

`Remove`

removed isArray function<br>
removed isBoolean function <br>
removed isClass function<br>
removed isDate function<br>
removed isError function<br>
removed isEven function<br>
removed isFunction function<br>
removed isNullorUndefined function<br>
removed isNumber function<br>
removed isObject function<br>
removed isOdd function<br>
removed isPrime function<br>
removed isRegExp function<br>
removed isString function<br>
removed isSymbol function<br>

### v1.7.0-beta

`Change`

deprecated getNumberInRange function<br>

`Added`

added Random class<br>
added Random.prototype.randomInt function<br>
added Random.prototype.randomDouble function<br>
added Random.prototype.randomChar function<br>
added Random.prototype.randomString function<br>
added primefactors function<br>

### v1.7.0

`Change`

deprecated objectToMutableObject function<br>
changed Random.prototype.randomInt to Random.randomInt <br>
changed Random.prototype.randomDouble to Random.randomDouble <br>
changed Random.prototype.randomString to Random.randomString <br>
changed Random.prototype.randomChar to Random.randomChar <br>

`Added`

added Collection.prototype.count function<br>
added Collection.prototype.put function<br>
added Collection.prototype.has function<br>
added Collection.prototype.missing function<br>
added Collection.prototype.toJSONString function<br>
added StringUtil.uncapitalize function<br>
added ImprovedArray.prototype.toJSONString function<br>
added Set.prototype.toJSONString function<br>
added Stack.prototype.toJSONString function<br>
added type PromiseOr<br>
added getObjectKeys function<br>
added getProjectRoot function<br>

### v1.7.1

`Change`<br>
bugfix in primefactors<br>
updated hasValue function<br>
bugfix in hasValue<br>
updated hasProperty<br>

`Added`<br>
added Random.randomElement<br>

### v1.8.0

`Added`

added AbstractClass class<br>
added BetterMath class<br>
added AbstractClassInstanceCallError error-class<br>
added stringToB64 function<br>
added b64ToString function<br>
added ImprovedArray.prototype.shuffle function<br>
added BetterMath.round function <br>
added BetterMath.random function <br>
added BetterMath.distance function <br>
added BetterMath.square function <br>
added IsSomething.isDateValid function<br>
added Random.randomElementInRange function<br>
added StringUtil.camelToKebab function<br>
added Point Interface<br>

`Change`

made DateUtil an AbstractClass<br>
made Random as AbstractClass<br>
made IsSomething an AbstractClass<br>
made StringUtil as AbstractClass<br>
added new parameter to stack constructor<br>
deprecated betterRound function<br>

`Remove`

removed objectToMutableobject function<br>
removed getRandomNumberInRange function<br>
