<p align="center" style="height: 200px;"><img src="./logo.png"></p>
<h3 align="center">Sussy Util</h3>
<p align="center">
    Just a few Functions and Classes made by me
    <br>
    <strong>Version 10 Beta</strong>
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
    - [DataConverter](#dataconverter)
    - [DateUtil](#dateutil)
    - [ImprovedArray](#improvedarray)
    - [IsSomething](#issomething)
    - [LRUCache](#lrucache)
    - [Point](#point)
    - [PrimeNumbers](#primenumbers)
    - [Queue](#queue)
    - [Random](#random)
    - [Set](#set)
    - [Stack](#stack)
    - [StopWatch](#stopwatch)
    - [StringUtil](#stringutil)
    - [UnitConverter](#unitconverter)
  - [Functions](#functions)
    - [addProperty](#addproperty)
    - [asyncHandler](#asynchandler)
    - [asyncTimeout](#asynctimeout)
    - [attributesToArray](#attributestoarray)
    - [betterRound](#betterround)
    - [bytesToSize](#bytestosize)
    - [callbackify](#callbackify)
    - [callIfFunction](#calliffunction)
    - [deepClone](#deepclone)
    - [getObjectKeys](#getobjectkeys)
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
    - [syncTimeout](#synctimeout)
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
    - [Going from 1.8.X to 1.9.X](#going-from-18x-to-19x)

## Classes

  - [AbstractClass](#abstractclass)
  - [BetterMath](#bettermath)
  - [Collection](#collection)
  - [DataConverter](#dataconverter)
  - [DateUtil](#dateutil)
  - [ImprovedArray](#improvedarray)
  - [IsSomething](#issomething)
  - [LRUCache](#lrucache)
  - [Point](#point)
  - [PrimeNumbers](#primenumbers)
  - [Queue](#queue)
  - [Random](#random)
  - [Set](#set)
  - [Stack](#stack)
  - [StopWatch](#stopwatch)
  - [StringUtil](#stringutil)
  - [UnitConverter](#unitconverter)

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
> BetterMath.distance(...Point); // calculates the total distance between a list of Point objects, starting at the given index.
> BetterMath.round(number, digit); // rounds a number to a specified number of digits.
> BetterMath.square(number); // returns the square of a given number.
> BetterMath.greatestCommonDivisor(a, b); // returns the greatest common divisor of two numbers.
> BetterMath.gcd(a, b); // an alias for the `greatestCommonDivisor` method
> BetterMath.lowestCommonDenominator(a,b); // returns the lowest common multiple of two numbers.
> BetterMath.lcm(a, b); // an alias for the `lowestCommonDenominator` method.
> BetterMath.average([13, 12, 11]); // returns the average of a list of numbers
> BetterMath.avg(); // an alias for the `average` method
> BetterMath.median([12, 12, 11]); // returns the median of a list of numbers
> BetterMath.factorial(number); // returns the factorial of a given number
>```

### Collection
>```js
> // create a collection
> const { Collection } = require('sussy-util');
> const collection = new Collection();
>
> //usage example
> collection.add({ key: /* your key */ , value: /* your value */ }); // this method takes in an object that has a key and a value and sets it in the map, if the key already exists in the map it updates the value, and returns the object that was set.
> const value = collection.get(key); // this method takes in a key of type "K" and returns the value of type "V" associated with that key if it exists in the map, otherwise it returns undefined.
> collection.remove(key); // this method takes in a key of type "K" and removes the key-value pair associated with that key if it exists in the map, it returns the removed object if it exists, otherwise it returns undefined.
> collection.toArray(); // this method returns the map as an array of key-value pairs.
> collection.has(key); // this method takes in a key of type "K" and returns true if the key exists in the map, otherwise it returns false.
> collection.missing(key); // this method takes in a key of type "K" and returns true if the key does not exist in the map, otherwise it returns false.
> collection.toString(); // this method returns the string representation of the map.
> collection.toJSONString(); // this method returns the JSON string representation of the map.
> collection.count(); // this method returns the count of items in the map.
> collection.clearMap(); // this method empties the map.
>```

### DataConverter

>```js
> const { DataConverter } = require('sussy-util');
>
> DataConverter.csvToJson(); // The csvToJson method takes a string argument, which is expected to be in CSV format, and converts it to an array of objects. It does this by splitting the input string on newline characters to get an array of lines, then splitting each line on comma characters to get an array of values. The first line is assumed to be the header row, and is used to create property names for the JSON objects. The resulting JSON array is returned
> DataConverter.jsonToCsv(); // The jsonToCsv takes an array of objects as input and returning a CSV formatted string. It does this by extracting the property names from the first object in the input array, using these property names to create a header row, then mapping over the input array to create an array of row strings, where each row is formed by extracting the values of the properties for each object in the input array and joining them with commas. Finally, it join all the rows with newline characters and return the final CSV string.
>```

### DateUtil

>```js
> // get DateUtil class
> const { DateUtil } = require('sussy-util');
>
> //static functions
> DateUtil.getCurrentDate(); // returns the current date
> DateUtil.today(); // Returns the current date with the time set to 00:00:00 (midnight).
> DateUtil.tomorrow(); // Returns the date for tomorrow with the time set to 00:00:00 (midnight).
> DateUtil.yesterday(); // Returns the date for yesterday with the time set to 00:00:00 (midnight).
> DateUtil.conpareDates(date1,date2); // `compareDates(dt1: T | number | Date, dt2: T | number | Date):` Compares two dates and returns the difference in milliseconds. If the first date is greater than the second date, a positive number will be returned. If the first date is less than the second date, a negative number will be returned. If the dates are equal, 0 will be returned.
> DateUtil.equals(date1, date2); // `equals(dt1: T | number | Date, dt2: T | number | Date):` Compares two dates and returns true if the dates are equal, false otherwise.
> DateUtil.getMonthAbbr(month); // Returns the abbreviation of the month for the given number (0-11).
> DateUtil.getMonthFullName(month); // Returns the full name of the month for the given number (0-11).
> DateUtil.getDayAbbr(day); // Returns the abbreviation of the day for the given number (0-6).
> DateUtil.getDayFullName(day); // Returns the full name of the day for the given number (0-6).
> DateUtil.isLeapYear(year); //  Returns true if the given year is a leap year, false otherwise.
> DateUtil.weekFirstDay(); // Returns the date for the first day of the current week with the time set to 00:00:00 (midnight).
> DateUtil.weekLastDay(); // Returns the date for the last day of the current week with the time set to 00:00:00 (midnight).
> DateUtil.leapYearsInRange(12, 2020); // Returns an array of all leap years within the given range (inclusive).
> DateUtil.getMonthFirstDay(); // returns the first day of the current month
> DateUtil.getMonthLastDay(); // returns the last day of the current month
> DateUtil.toDate(); // Returns a date object for the given date, number or date-like object.
> DateUtil.isAfter(date1, date2); // returns boolean based on if the second date is after the first one
> DateUtil.isBefore(date1, date2); // returns boolean based on if the second date is before the first one
> DateUtil.yearsToMonths(number); // returns the amount of months in total based on years
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
> array.insertAt(index, ...values); // nserts the given items at the given index in the array. Throws an error if the index is out of bounds.
> array.remove(index); // Removes an element from the array at the given index and returns the removed element. Throws an error if the index is out of bounds.
> const index = array.getRandomIndex(); // returns random index of array
> const element = array.getRandomElement(); // returns element at random index
> array.clear(); // Removes all elements from the array.
> array.clone(); // Returns a new ImprovedArray with the same elements as the original array.
> const empty = array.isEmpty(); // Returns true if the array is empty, false otherwise.
> array.none(function); // Returns true if none of the elements in the array pass the given predicate, false otherwise.
> array.rejected(function); // Returns a new ImprovedArray with all elements from the original array that fail the given predicate.
> array.sum(); // returns the sum of all elements of the array
> array.removeDuplicates(); // Removes all duplicate elements from the array.
> array.scramble(); // Shuffles the elements of the array in a random order. Deprecated in favor of `shuffle()` method
> array.countOccurrences(value); // Returns the number of times the given value appears in the array.
> array.flatten(); // Flattens the array, removing all nested arrays.
> array.toJSONString(); // Returns a JSON string representation of the array.
> array.shuffle(); // Shuffles the elements of the array in a random order.
> array.findCommonElements(array); // returns new array with elements wich are in both arrays
> array.each((e,i,array) => {}); // An alias for the forEach method.
> array.findCommonElements(array); // `findCommonElements<X extends Array<any>>(arr: X | any[]):` Returns a new ImprovedArray with all the common elements between the current array and the passed array.
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
> IsSomething.isType(variable, type); // returns true if the given variable is of type type 
> IsSomething.isInstanceOf(object, classConstructor); // returns true if given object is an instance on said class
> IsSomething.isDateValid(date); // checks if given date is valid
> ```

### LRUCache

>```js
> const { LRUCache } = require('sussy-util');
>
> const cache = new LRUCache(5); // LRUCache constructor takes a number for setting the maximum number of entries in the cache
> cache.add("daysiwanttolive", 12); // Adds a new key-value pair to the cache. If the key already exists in the cache, the existing value is updated with the new value and the timestamp is updated to the current time. If the cache is at its maximum capacity, the least recently used key-value pair is removed from the cache to make room for the new one.
> cache.get("daysiwanttolive"); // Returns the value associated with the given key. If the key does not exist in the cache, it returns undefined. If the key does exist, the timestamp associated with the key is updated to the current time.
> cache.removeLRU(); // Removes the least recently used key-value pair from the cache. It iterates over the keys in the cache, checking the timestamps associated with each key. The key with the oldest timestamp is removed from the cache, and the currentSize is decremented.
>```

### Point

>```js
> const { Point } = require('sussy-util');
> const point = new Point(x, y); // Initializes a new Point object with the given x and y coordinates.
> point.distanceTo(new Point(x2, y2)); // Calculates the distance between the current point and the point passed as an argument. It returns the value of the distance in a number.
> point.slopeTo(new Point(x3, y3)); // Calculates the slope between the current point and the point passed as an argument. It returns the value of the slope in a number.
>```

### PrimeNumbers
Get prime numbers and save them in an array for later use

>```js
> const { PrimeNumbers } = require('sussy-util');
> const primes = new PrimeNumbers();
> primes.getTill(highedsNumber); // function takes in a number and returns an array of prime numbers that are less than or equal to that number. It first checks if the input number is greater than the current property. If it is, it uses a for loop to iterate through the numbers from the current property to the input number. Within the loop, it checks if the current number is even or not prime, if it is then it continues to the next number, otherwise it pushes the number to the primes array and updates the current property to the input number. If the input number is less than or equal to the current property, it filters the primes array to return only numbers less than or equal to the input number.
> primes.addPrimes(amount); // function takes in a number and adds that many prime numbers to the primes array. It uses a while loop to iterate until the input number is greater than 0. Within the loop, it increments the current property by 1, then checks if the current property is prime using the isPrime helper function. If it is, it pushes the current property to the primes array and decrements the input number by 1. Finally, it returns the primes array.
>```

### Queue

>```js
> const { Queue } = require('sussy-util');
>
> const queue = new Queue(); // takes in an array and it pushes that array to the items property.
> queue.push(...elements); // function takes in any number of elements of type T and pushes them to the items array.
> queue.peek(); // function returns the first element of the items array or undefined if the array is empty
> queue.shift(); // function removes the first element of the items array and returns it or undefined if the array is empty
> queue.empty(); // function returns a boolean indicating whether the items array is empty or not
> ```

### Random

>```js
>const { Random } = require('sussy-util');
>
>Random.randomInt(upper, lower); // function generates a random integer between the lower and upper bounds provided. If no bounds are provided, it defaults to 0 and 10. It uses Math.floor and Math.ceil to ensure that the returned number is an integer.
>Random.randomDouble(upper, lower); // function generates a random double between the lower and upper bounds provided. If no bounds are provided, it defaults to 0 and 10. It calls the randomInt method to get a random integer and then adds a random decimal value to it.
>Random.randomString(length, charset?); // function generates a random string of a given length, with characters chosen from a given character set or from a default set of "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789". It uses recursion to repeatedly call the randomChar method to generate a new character until the desired length is reached.
>Random.randomChar(charset?); // function generates a random character from a given character set or from a default set of "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789". It uses the randomInt method to get a random index from the character set, and then uses the charAt method to get the character at that index.
>Random.randomElement(array?); // function generates a random element from a given array
>Random.randomElementInRange(array?); // function generates a random element from a given range of an array.
>```

### Set

>```js
> // create a Set
> const { Set } = require('sussy-util');
> const set = new Set();
>
> //usage example
> set.push(elm); // function takes in an element of type T and pushes it to the items array after checking that it is not already in the array.
> set.delete(elm); // function takes in an element of type T and removes it from the items array.
> set.isEmpty(); // function returns a boolean indicating whether the items array is empty or not
> const elm = set.get(index); // function takes in an index and returns the element of the items array at that index. If the index is out of bounds, it throws an exception.
> const length = set.length(); //  function returns the length of the items array
> set.remove(number); // function takes in an index and removes the element of the items array at that index. If the index is out of bounds, it throws an exception.
> set.changeCheckFunction(() => {}); // function allows the user to change the checkFunction property.
> set.clear(); // function empties the items array
> set.clone(); // function creates a new Set<T> object and copies all the elements of the current set to it.
> set.toString(); // function returns a string representation of the set and its items
> set.toJSONString(); // function returns a JSON string representation of the items array.
> set.toArray(); // function returns the items array
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

### StopWatch

>```js
> const { StopWatch } = require('sussy-util');
> const stopwatch = new StopWatch(); // stopwatch start at objet creation
>
> stopwatch.pause(); // pauses the stopwatch
> stopwatch.resume(); // resumes the stopwatch
> stopwatch.reset(); // resets the stopwatch
> stopwatch.time(); // returns the current time in milliseconds
> stopwatch.round(); // This method saves the current time as a round. It first calls the fixPausedTime method to correct the time if the stopwatch was paused. Then it calculates the time of the round by subtracting the total time passed (including pauses) from the start time. Finally, it adds the round time to the rounds array using the push method.
> 
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
> StringUtil.rtrim("    sususu   "); // return: "    sususu"
> StringUtil.ltrim("    sususu   "); // return: "sususu   "
> StringUtil.camelToKebab();
> StringUtil.isPalindrome("")
>```

## Functions
  - [addProperty](#addproperty)
  - [asyncHandler](#asynchandler)
  - [asyncTimeout](#asynctimeout)
  - [attributesToArray](#attributestoarray)
  - [betterRound](#betterround)
  - [bytesToSize](#bytestosize)
  - [callbackify](#callbackify)
  - [callIfFunction](#calliffunction)
  - [deepClone](#deepclone)
  - [getObjectKeys](#getobjectkeys)
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
  - [syncTimeout](#synctimeout)

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

### asyncTimeout

>```js
> const { asyncTimeout } = require('sussy-util');
> await asyncTimeout(time_in_milliseconds);
>```

### attributesToArray

>```js
> const { attributesToArray } = require('sussy-util');
> attributesToArray({ sus:true, imposter:true }, true); // output: [true, true];
>```

### betterRound

Deprecated

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

### getObjectKeys

>```js
> const { getObjectKeys } = require('sussy-util');
> getObjectKeys({ sus_:true, nein:false }); // output: ["sus_", "nein"]
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

### syncTimeout

>```js
> const { syncTimeout } = require('sussy-util');
> syncTimeout(time_to_wait);
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

### Going from 1.8.X to 1.9.X

>```js
> // old
> const { betterRound } = require('sussy-util');
> betterRount(12.34, 1);
>
> // new
> const { BetterMath } = require('sussy-util');
> BetterMath.round(12.34, 1);
>```