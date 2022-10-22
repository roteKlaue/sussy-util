<h3 align="center">SussyUtilByRaphael</h3>
<p align="center">
    Just a few Functions and Classes made by ME
    <br>
</p>

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
  - [isPrime](#isprime)
  - [getRandomNumberInRange](#getrandomnumberinrange)
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
> StringUtil.reverse("Sussy"); // reverses the string output: yssus
> StringUtil.isDiscordUsername("Sussy#1234"); // checks if string is a discord username output: true
>
> //usage example
> stringUtil.randomCharacter(); // returns a random character based on the current charset
> stringUtil.randomString(length); // returns a random string with the length given
> stringUtil.randomDiscordUsername(withSufix:boolean); // returns a random string with length 4 - 32 if withSufix is true then # and 4 random numbers will be added
>```

## Functions

  - [asyncHandler](#asynchandler)
  - [bytesToSize](#bytestosize)
  - [isEven](#iseven)
  - [isPrime](#isprime)
  - [getRandomNumberInRange](#getrandomnumberinrange)

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

## Going from 1.0.X to 1.1.X
renamed Class impArray to improvedArray

```js
//old
const { impArray } = require('sussyutilbyraphaelbader');
const array = new impArray();

//new
const { improvedArray } = require('sussyutilbyraphaelbader');
const array = new improvedArray();
```

## Going from 1.1.X to 1.2.X

renamed Class improvedArray to ImprovedArray

```js
//old
const { improvedArray } = require('sussyutilbyraphaelbader');
const array = new improvedArray();

//new
const { ImprovedArray } = require('sussyutilbyraphaelbader');
const a = new ImprovedArray();
```