import { MutableObject, PromiseOr } from "../Types";
import IsSomething from "./IsSomething";

type AsyncFunction<R> = () => PromiseOr<R>;
type options = { callBackPosition: Position, errorPosition: ErrorCallPosition };
type ErrorCallPosition = "first" | "replace" | "last";
type Position = "front" | "back";

class PromiseUtil {
    private static instance: PromiseUtil = new PromiseUtil();
    private constructor() { };
    private readonly resFirst = <R, E>(resolve: Function, reject: Function, result: R, error: E | null) => {
        if (error) {
            return reject(error);
        }
        resolve(result);
    }
    private readonly resReplace = <R, E>(resolve: Function, reject: Function, result: R | E) => {
        if (result instanceof Error) {
            return reject(result);
        }
        resolve(result);
    }
    private readonly resLast = <R, E>(resolve: Function, reject: Function, error: E | null, result: R) => {
        if (error) {
            return reject(error);
        }
        resolve(result);
    }

    private readonly MAPPINGS: MutableObject<{ args: (args: any[], callback: Function) => any[], function1: Function }> = {
        "front-first": {
            args: (args, callback) => [callback, args],
            function1: this.resLast
        },
        "front-replace": {
            args: (args, callback) => [callback, args],
            function1: this.resReplace
        },
        "front-last": {
            args: (args, callback) => [callback, args],
            function1: this.resFirst
        },
        "back-first": {
            args: (args, callback) => [args, callback],
            function1: this.resLast
        },
        "back-replace": {
            args: (args, callback) => [args, callback],
            function1: this.resReplace
        },
        "back-last": {
            args: (args, callback) => [args, callback],
            function1: this.resFirst
        }
    }

    public async executeSequentially<T>(promises: PromiseOr<T>[]): Promise<[Array<T | null>, Error[]]> {
        const errors: Error[] = [];
        const results: Array<T | null> = await promises.reduce(async (chain, promise) => {
            const results = await chain;
            const [result, error] = await this.handler<T, Error>(promise);
            results.push(result);
            if (error) {
                errors.push(error);
            }
            return results;
        }, Promise.resolve([] as Array<T | null>));
        return [results, errors];
    }

    public async handler<R, E extends Error>(promise: PromiseOr<R> | AsyncFunction<R>): Promise<[R | null, E | null]> {
        try {
            if (IsSomething.isFunction(promise)) {
                promise = (promise as AsyncFunction<R>)();
            }
            const data = await (promise as PromiseOr<R>);
            return [data, null];
        } catch (e) {
            return [null, e as E];
        }
    }

    public async retry<T>(func: () => PromiseOr<T>, maxRetries: number = 3): Promise<[T | null, Error[]]> {
        const errors: Error[] = [];
        let result: null | T = null;
        for (let i = 0; i <= maxRetries; i++) {
            try {
                result = await func();
                break;
            } catch (error) {
                errors.push(error as Error);
            }
        }
        return [result, errors];
    }

    public async delay(milliseconds: number): Promise<void> {
        return new Promise<void>((resolve) => setTimeout(resolve, milliseconds));
    }

    public async filter<T>(values: T[], asyncFilterFunc: (value: T) => PromiseOr<boolean>): Promise<T[]> {
        const results = await Promise.all(
            values.map(async (value) => ({
                value,
                shouldKeep: await asyncFilterFunc(value),
            }))
        );
        return results.filter((result) => result.shouldKeep).map((result) => result.value);
    }

    public async timeout<T>(promise: PromiseOr<T>, milliseconds: number): Promise<T> {
        return Promise.race([
            promise,
            new Promise<T>((_, reject) =>
                setTimeout(() => reject(new Error("Timeout exceeded")), milliseconds)
            ),
        ]);
    }

    public async batchPromises<T, R>(values: T[], batchSize: number, asyncFunc: (value: T) => PromiseOr<R>): Promise<R[]> {
        const results: R[] = [];
        for (let i = 0; i < values.length; i += batchSize) {
            const batch = values.slice(i, i + batchSize);
            const batchResults = await Promise.all(batch.map(asyncFunc));
            results.push(...batchResults);
        }
        return results;
    }

    public promisify<T, R>(func: Function, { callBackPosition = "back", errorPosition = "last" }: options = { callBackPosition: "back", errorPosition: "last" }): (...args: T[]) => Promise<R> {
        return (...args: T[]) => new Promise((resolve, reject) => {
            const current = this.MAPPINGS[`${callBackPosition}-${errorPosition}`];
            if (!current) throw new Error('ERR: Invalid callBackPosition or errorPosition');
            func(...current.args(args, current.function1.bind(resolve, reject)));
        });
    }

    public static getInstance(): PromiseUtil {
        return this.instance;
    }
}

export default PromiseUtil.getInstance();