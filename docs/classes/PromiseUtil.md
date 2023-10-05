[sussy-util](../README.md) / [classes](./README.md) / PromiseUtil

# PromiseUtil Class

A utility class for working with promises, including error handling, retries, timeouts, and more.

## Methods

 - `handler<R, E extends Error>(promise: PromiseOr<R> | AsyncFunction<R>)`: Promise<[R | null, E | null]>
    Handle a promise, including error handling.

 - `retry<T>(func: () => PromiseOr<T>, maxRetries: number = 3)`: Promise<[T | null, Error[]]>
    Retry executing a function with a specified number of retries.

 - `delay(milliseconds: number)`: Promise<void\>
    Delay execution for a specified number of milliseconds.

 - `filter<T>(values: T[], asyncFilterFunc: (value: T) => PromiseOr<boolean>)`: Promise<T[]\>
    Filter an array of values using an asynchronous filter function.

 - `timeout<T>(promise: PromiseOr<T>, milliseconds: number)`: Promise<T>
    Timeout a promise after a specified duration.

 - `executeSequentially<T>(promises: PromiseOr<T>[])`: Promise<[Array<T | null>, Error[]]>
    Execute an array of promises sequentially and collect results.

 - `mapPromises<T, R>(values: T[], asyncMapFunc: (value: T) => PromiseOr<R>)`: Promise<R[]\>
    Map an array of values to an array of promises and await their results.

 - `concurrentMap<T, R>(values: T[], asyncMapFunc: (value: T) => PromiseOr<R>, concurrency: number)`: Promise<R[]\>
    Concurrently map an array of values to promises with a specified concurrency limit.

 - `executeConcurrently<T>(promises: PromiseOr<T>[], concurrency: number)`: Promise<[Array<T | null>, Error[]]>
    Execute an array of promises concurrently with a specified concurrency limit.

 - `promisify<T, R>(func: Function, options?: options): (...args: T[])` => Promise<R\>
    Promisify a function, allowing customization of callback and error positions.
    
## Usage

```ts
import { PromiseUtil } from 'sussy-util';

// Handling a promise
const [result, error] = await PromiseUtil.handler(somePromise);

// Retrying a function
const [result, errors] = await PromiseUtil.retry(someFunction, maxRetries);

// Delaying execution
await PromiseUtil.delay(milliseconds);

// Filtering an array of values asynchronously
const filteredValues = await PromiseUtil.filter(values, asyncFilterFunc);

// Adding a timeout to a promise
const result = await PromiseUtil.timeout(somePromise, milliseconds);

// Executing promises sequentially and collecting results
const [results, errors] = await PromiseUtil.executeSequentially(promises);

// Executing promises concurrently with a specified concurrency limit
const [results, errors] = await PromiseUtil.executeConcurrently(promises, concurrency);

// Mapping an array of values to promises and awaiting their results
const results = await PromiseUtil.mapPromises(values, asyncMapFunc);

// Concurrently mapping an array of values to promises with a concurrency limit
const results = await PromiseUtil.concurrentMap(values, asyncMapFunc, concurrency);

// Promisifying a function with customizable callback and error positions
const promisifiedFunc = PromiseUtil.promisify(someFunction, options);
```

## Explanation

The `PromiseUtil` class is a utility class designed to simplify working with JavaScript promises and asynchronous operations. It provides a wide range of methods to handle common tasks associated with asynchronous programming, including error handling, retries, timeouts, concurrent execution, and more.

### Key Features

### 1. Handling Promises

- Use the `handler` method to handle promises, including error handling. It returns a tuple with the result and any potential error.

### 2. Retry Mechanism

- Retry executing a function with the `retry` method. You can specify the maximum number of retries and receive both the result and any errors encountered during retries.

### 3. Delay Execution

- Delay the execution of a function for a specified duration using the `delay` method. This can be helpful for adding pauses between asynchronous tasks.

### 4. Asynchronous Filtering

- Filter an array of values asynchronously with the `filter` method. It applies an asynchronous filter function to each value and returns a filtered array.

### 5. Timeout Handling

- Add a timeout to a promise with the `timeout` method. It allows you to set a maximum time for a promise to resolve, and it either resolves with the result or rejects with a timeout error.

### 6. Sequential and Concurrent Execution

- Execute an array of promises sequentially and collect results with the `executeSequentially` method. This is useful when you need to maintain order in asynchronous operations.

- Execute an array of promises concurrently with a specified concurrency limit using the `executeConcurrently` method. It returns both results and errors for each promise.

### 7. Mapping and Concurrent Mapping

- Map an array of values to promises and await their results with the `mapPromises` method. It simplifies mapping operations.

- Concurrently map an array of values to promises with a specified concurrency limit using the `concurrentMap` method. It efficiently processes multiple promises concurrently.

### 8. Promisifying Functions

- The `promisify` method allows you to promisify callback-style functions, providing control over callback and error positions. This simplifies working with legacy callback APIs.
