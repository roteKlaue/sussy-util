import { PromiseOr, AnyFunction } from '../Types';
import IsSomething from './IsSomething';

declare type resolver = (value: unknown) => unknown;
declare type ErrorHandlingStrategy = 'first' | 'replace' | 'last';
declare type AsyncFunction<R> = () => PromiseOr<R>;
declare type CallbackPosition = 'front' | 'back';

type ResolverFn = (value?: unknown) => void;
type MappingKey = `${CallbackPosition}-${ErrorHandlingStrategy}`;

type ResFirst = <R, E extends Error>(
  resolve: ResolverFn,
  reject: ResolverFn,
  result: R,
  error: E | null,
) => void;

type ResReplace = <R, E extends Error>(
  resolve: ResolverFn,
  reject: ResolverFn,
  result: R | E,
) => void;

type ResLast = <R, E extends Error>(
  resolve: ResolverFn,
  reject: ResolverFn,
  error: E | null,
  result: R,
) => void;

type MappingTable = {
  'front-first': {
    args: (args: unknown[], callback: AnyFunction) => unknown[];
    function1: ResLast;
  };
  'front-replace': {
    args: (args: unknown[], callback: AnyFunction) => unknown[];
    function1: ResReplace;
  };
  'front-last': {
    args: (args: unknown[], callback: AnyFunction) => unknown[];
    function1: ResFirst;
  };
  'back-first': {
    args: (args: unknown[], callback: AnyFunction) => unknown[];
    function1: ResLast;
  };
  'back-replace': {
    args: (args: unknown[], callback: AnyFunction) => unknown[];
    function1: ResReplace;
  };
  'back-last': {
    args: (args: unknown[], callback: AnyFunction) => unknown[];
    function1: ResFirst;
  };
};

interface PromisifyOptions {
  callBackPosition?: CallbackPosition;
  errorPosition?: ErrorHandlingStrategy;
}

class PromiseUtil {
  /**
   * Singleton instance of the PromiseUtil class.
   * @private
   * @static
   */
  private static readonly instance: PromiseUtil = new PromiseUtil();
  private constructor() {}

  /**
   * Resolves or rejects a promise based on the provided result and error.
   *
   * @template R - Type of the promise result.
   * @template E - Type of the error.
   * @param {Function} resolve - The resolve function of a promise.
   * @param {Function} reject - The reject function of a promise.
   * @param {R} result - The result value of the promise.
   * @param {E | null} error - The error value of the promise (or null if there is no error).
   * @private
   */
  readonly #resFirst = <R, E extends Error>(
    resolve: resolver,
    reject: resolver,
    result: R,
    error: E | null,
  ) => {
    if (error) {
      return reject(error);
    }
    resolve(result);
  };

  /**
   * Resolves or rejects a promise based on the provided result, which can be a result value or an error.
   *
   * @template R - Type of the promise result.
   * @template E - Type of the error.
   * @param {Function} resolve - The resolve function of a promise.
   * @param {Function} reject - The reject function of a promise.
   * @param {R | E} result - The result value of the promise (or an error).
   * @private
   */
  readonly #resReplace = <R, E extends Error>(
    resolve: resolver,
    reject: resolver,
    result: R | E,
  ) => {
    if (result instanceof Error) {
      return reject(result);
    }
    resolve(result);
  };

  /**
   * Resolves or rejects a promise based on the provided error and result.
   *
   * @template R - Type of the promise result.
   * @template E - Type of the error.
   * @param {Function} resolve - The resolve function of a promise.
   * @param {Function} reject - The reject function of a promise.
   * @param {E | null} error - The error value of the promise (or null if there is no error).
   * @param {R} result - The result value of the promise.
   * @private
   */
  readonly #resLast = <R, E extends Error>(
    resolve: resolver,
    reject: resolver,
    error: E | null,
    result: R,
  ) => {
    if (error) {
      return reject(error);
    }
    resolve(result);
  };

  /**
   * Mapping of callback positions and error handling functions.
   * @private
   */
  readonly #MAPPINGS: MappingTable = {
    'front-first': {
      args: (args: unknown[], callback: AnyFunction) => [callback, args],
      function1: this.#resLast,
    },
    'front-replace': {
      args: (args: unknown[], callback: AnyFunction) => [callback, args],
      function1: this.#resReplace,
    },
    'front-last': {
      args: (args: unknown[], callback: AnyFunction) => [callback, args],
      function1: this.#resFirst,
    },
    'back-first': {
      args: (args: unknown[], callback: AnyFunction) => [args, callback],
      function1: this.#resLast,
    },
    'back-replace': {
      args: (args: unknown[], callback: AnyFunction) => [args, callback],
      function1: this.#resReplace,
    },
    'back-last': {
      args: (args: unknown[], callback: AnyFunction) => [args, callback],
      function1: this.#resFirst,
    },
  };

  /**
   * Execute an array of promises sequentially and collect results and errors.
   *
   * @template T - Type of the promise results.
   * @param {PromiseOr<T>[]} promises - Array of promises to execute.
   * @returns {Promise<[Array<T | null>, Error[]]>} - A promise that resolves to an array of results and errors.
   */
  public async executeSequentially<T>(
    promises: PromiseOr<T>[],
  ): Promise<[Array<T | null>, Error[]]> {
    const errors: Error[] = [];
    const results: Array<T | null> = await promises.reduce(
      async (chain, promise) => {
        const results = await chain;
        const [result, error] = await this.handler<T, Error>(promise);
        results.push(result);
        if (error) {
          errors.push(error);
        }
        return results;
      },
      Promise.resolve([] as Array<T | null>),
    );
    return [results, errors];
  }

  /**
   * Handle a promise, including error handling.
   *
   * @template R - Type of the promise result.
   * @template E - Type of the error.
   * @param {PromiseOr<R> | AsyncFunction<R>} promise - The promise to handle.
   * @returns {Promise<[R | null, E | null]>} - A promise that resolves to a tuple of result and error.
   */
  public async handler<R, E extends Error>(
    promise: PromiseOr<R> | AsyncFunction<R>,
  ): Promise<[R | null, E | null]> {
    try {
      if (IsSomething.isFunction(promise)) promise = promise();
      const data = await promise;
      return [data, null];
    } catch (e) {
      return [null, e as E];
    }
  }

  /**
   * Retry executing a function with a specified number of retries.
   *
   * @template T - Type of the function result.
   * @param {() => PromiseOr<T>} func - The function to retry.
   * @param {number} [maxRetries=3] - The maximum number of retries.
   * @returns {Promise} A promise that resolves to the result and an array of errors.
   */
  public async retry<T>(
    func: () => PromiseOr<T>,
    maxRetries: number = 3,
  ): Promise<[T | null, Error[]]> {
    const errors: Error[] = [];
    let result: null | T = null;
    for (let i = 0; i <= maxRetries; i++) {
      try {
        result = await func();
        break;
      } catch (error: unknown) {
        errors.push(error as Error);
      }
    }
    return [result, errors];
  }

  /**
   * Delay execution for a specified number of milliseconds.
   *
   * @param {number} milliseconds - The delay duration in milliseconds.
   * @returns {Promise<void>} A promise that resolves after the delay.
   */
  public async delay(milliseconds: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  }

  /**
   * Filter an array of values using an asynchronous filter function.
   *
   * @template T - Type of the values.
   * @param {T[]} values - The array of values to filter.
   * @param {(value: T) => PromiseOr<boolean>} asyncFilterFunc - The asynchronous filter function.
   * @returns {Promise<T[]>} A promise that resolves to the filtered array.
   */
  public async filter<T>(
    values: T[],
    asyncFilterFunc: (value: T) => PromiseOr<boolean>,
  ): Promise<T[]> {
    const results = await Promise.all(
      values.map(async (value) => ({
        value,
        shouldKeep: await asyncFilterFunc(value),
      })),
    );
    return results.filter((result) => result.shouldKeep).map((result) => result.value);
  }

  /**
   * Timeout a promise after a specified duration.
   *
   * @template T - Type of the promise result.
   * @param {PromiseOr<T>} promise - The promise to add a timeout to.
   * @param {number} milliseconds - The timeout duration in milliseconds.
   * @returns {Promise<T>} A promise that resolves with the result or rejects with a timeout error.
   */
  public async timeout<T>(promise: PromiseOr<T>, milliseconds: number): Promise<T> {
    return Promise.race([
      promise,
      new Promise<T>((_, reject) =>
        setTimeout(() => reject(new Error('Timeout exceeded')), milliseconds),
      ),
    ]);
  }

  /**
   * Execute promises in batches and collect results.
   *
   * @template T - Type of input values.
   * @template R - Type of promise results.
   * @param {T[]} values - Array of input values.
   * @param {number} batchSize - Size of each batch.
   * @param {(value: T) => PromiseOr<R>} asyncFunc - Asynchronous function to apply to each value.
   * @returns {Promise<R[]>} - A promise that resolves to an array of results.
   */
  public async batchPromises<T, R>(
    values: T[],
    batchSize: number,
    asyncFunc: (value: T) => PromiseOr<R>,
  ): Promise<R[]> {
    const results: R[] = [];
    for (let i = 0; i < values.length; i += batchSize) {
      const batch = values.slice(i, i + batchSize);
      const batchResults = await Promise.all(batch.map(asyncFunc));
      results.push(...batchResults);
    }
    return results;
  }

  /**
   * Promisify a function, allowing customization of callback and error positions.
   *
   * @template T - Type of arguments to the function.
   * @template R - Type of the promise result.
   * @param {Function} func - The function to promisify.
   * @param {options} [options={ callBackPosition: "back", errorPosition: "last" }] - Options for customization.
   * @returns {Function} A promisified function.
   */
  public promisify<T extends unknown[], R>(
    func: AnyFunction,
    { callBackPosition = 'back', errorPosition = 'last' }: PromisifyOptions = {
      callBackPosition: 'back',
      errorPosition: 'last',
    },
  ): (...args: T) => Promise<R> {
    return (...args: T) =>
      new Promise((resolve, reject) => {
        const key = `${callBackPosition}-${errorPosition}` as MappingKey;
        const current = this.#MAPPINGS[key];
        if (!current) throw new Error('ERR: Invalid callBackPosition or errorPosition');
        // @ts-expect-error - Dynamic function call
        func(...current.args(args, current.function1.bind(this, resolve, reject)));
      });
  }

  /**
   * Map an array of values to an array of promises and await their results.
   * @param values Array of values to map to promises.
   * @param asyncMapFunc Function to map values to promises.
   * @returns Array of results.
   */
  public async mapPromises<T, R>(
    values: T[],
    asyncMapFunc: (value: T) => PromiseOr<R>,
  ): Promise<R[]> {
    return await Promise.all(values.map(asyncMapFunc));
  }

  /**
   * Concurrently map an array of values to promises with a specified concurrency limit.
   * @param values Array of values to map to promises.
   * @param asyncMapFunc Function to map values to promises.
   * @param concurrency Maximum number of promises to run concurrently.
   * @returns Array of results.
   */
  public async concurrentMap<T, R>(
    values: T[],
    asyncMapFunc: (value: T) => PromiseOr<R>,
    concurrency: number,
  ): Promise<R[]> {
    const results: R[] = [];
    let index = 0;

    async function processNext() {
      while (index < values.length) {
        const value = values[index++];
        const result = await asyncMapFunc(value);
        results.push(result);
      }
    }

    const concurrencyPromises: Promise<void>[] = [];
    for (let i = 0; i < concurrency; i++) {
      concurrencyPromises.push(processNext());
    }

    await Promise.all(concurrencyPromises);
    return results;
  }

  /**
   * Execute an array of promises concurrently with a specified concurrency limit.
   *
   * @template T - Type of the promise results.
   * @param {PromiseOr<T>[]} promises - Array of promises to execute.
   * @param {number} concurrency - Maximum number of promises to run concurrently.
   * @returns {Promise<[Array<T | null>, Error[]]>} - A promise that resolves to an array of results and errors.
   */
  public async executeConcurrently<T>(
    promises: PromiseOr<T>[],
    concurrency: number,
  ): Promise<[Array<T | null>, Error[]]> {
    const errors: Error[] = [];
    const results: Array<T | null> = await this.concurrentMap(
      promises,
      async (promise) => {
        const [result, error] = await this.handler<T, Error>(promise);
        if (error) {
          errors.push(error);
        }
        return result;
      },
      concurrency,
    );
    return [results, errors];
  }

  public static getInstance(): PromiseUtil {
    return this.instance;
  }
}

export default PromiseUtil.getInstance();
