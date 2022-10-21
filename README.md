<h3 align="center">SussyUtilMadeByRaphael</h3>
<p align="center">
    Just a few Functions and Classes made by ME
    <br>
</p>

- [Classes](#classes)
  - [Collection](#collection)
  - [improvedArray](#improvedarray)
  - [Stack](#stack)
- [Functions](#functions)
  - [asyncHandler](#asynchandler)
  - [bytesToSize](#bytestosize)
  - [isEven](#iseven)
  - [isPrime](#isprime)
- [Going from 1.0.1 to 1.1.0](#going-from-101-to-110)

## Classes

### Collection
>```js
> // create a collection
> const { Collection } = require('SussyUtilMadeByRaphael');
> const collection = new Collection();
>
> //usage example
> collection.add({ key: /* your key */ , value: /* your value */ });
> const value = collection.get(key);
> collection.remove(key);
>```

### improvedArray

>```js
> // create a improvedArray
> const { improvedArray } = require('SussyUtilMadeByRaphael');
> const array = new improvedArray(/* put initial items here */);
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
>```

### Stack

>```js
> // create a Stack
> const { Stack } = require('SussyUtilMadeByRaphael');
> const stack = new Stack();
>
> //usage example
> stack.push(...elm); // put elm on top of stack
> const value = stack.pop(); // returns value on top of stack and removes it
> const value = stack.peek(); // returns value on top of stack without removing it
> stack.empty(); // returns if stack is empty
>```

## Functions

* [asyncHandler](#asyncHandler)
* [bytesToSize](#bytesToSize)
* [isEven](#isEven)
* [isPrime](#isPrime)

### asyncHandler

>```js
> const { asyncHandler } = require('SussyUtilMadeByRaphael');
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
> const { bytesToSize } = require('SussyUtilMadeByRaphael');
> const bytesString = bytesToSize(12300);
> console.log(bytesString); // output: 12.0 KB
>```

### isEven

>```js
> const { isEven } = require('SussyUtilMadeByRaphael');
> console.log(isEven(22)); // output: true
>```

### isPrime

>```js
> const { isPrime } = require('SussyUtilMadeByRaphael');
> console.log(isEven(7)); // output: true
> console.log(isEven(22)); // output: false
>```

## Going from 1.0.1 to 1.1.0
renamed Class impArray to improvedArray

```js
//old
const { impArray } = require('SussyUtilMadeByRaphael');
const array = new impArray();

//new
const { improvedArray } = require('SussyUtilMadeByRaphael');
const array = new improvedArray();
```