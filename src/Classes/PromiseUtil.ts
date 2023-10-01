import IsSomething from "./IsSomething";
import { PromiseOr } from "../Types";

type AsyncFunction<R> = () => PromiseOr<R>;

class PromiseUtil {
    private static instance: PromiseUtil = new PromiseUtil();
    private constructor() { };

    async executeSequentially<T>(promises: PromiseOr<T>[]): Promise<[Array<T | null>, Error[]]> {
        const errors: Error[] = [];
        const results: Array<T | null> = await promises.reduce(async (chain, promise) => {
            const results = await chain;
            const [result, error] = await this.handler(promise);
            results.push(result);
            if (error) {
                errors.push(error);
            }
            return results;
        }, Promise.resolve([] as Array<T | null>));
        return [results, errors];
    }

    async handler<R, E extends Error>(promise: PromiseOr<R> | AsyncFunction<R>): Promise<[R | null, E | null]> {
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

    async retry<T>(func: () => PromiseOr<T>, maxRetries: number = 3): Promise<[T | null, Error[]]> {
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

    async delay(milliseconds: number): Promise<void> {
        return new Promise<void>((resolve) => setTimeout(resolve, milliseconds));
    }

    async filter<T>(values: T[], asyncFilterFunc: (value: T) => PromiseOr<boolean>): Promise<T[]> {
        const results = await Promise.all(
            values.map(async (value) => ({
                value,
                shouldKeep: await asyncFilterFunc(value),
            }))
        );
        return results.filter((result) => result.shouldKeep).map((result) => result.value);
    }

    async timeout<T>(promise: PromiseOr<T>, milliseconds: number): Promise<T> {
        return Promise.race([
            promise,
            new Promise<T>((_, reject) =>
                setTimeout(() => reject(new Error("Timeout exceeded")), milliseconds)
            ),
        ]);
    }

    async batchPromises<T, R>(values: T[], batchSize: number, asyncFunc: (value: T) => PromiseOr<R>): Promise<R[]> {
        const results: R[] = [];
        for (let i = 0; i < values.length; i += batchSize) {
            const batch = values.slice(i, i + batchSize);
            const batchResults = await Promise.all(batch.map(asyncFunc));
            results.push(...batchResults);
        }
        return results;
    }

    public static getInstance(): PromiseUtil {
        return this.instance;
    }
}

export default PromiseUtil.getInstance();