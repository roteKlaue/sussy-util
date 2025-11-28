import PromiseUtil from '../src/Classes/PromiseUtil';

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

describe('PromiseUtil', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    describe('handler', () => {
        it('resolves a direct value', async () => {
            const [result, error] = await PromiseUtil.handler(Promise.resolve(42));
            expect(result).toBe(42);
            expect(error).toBeNull();
        });

        it('resolves a function returning a value', async () => {
            const fn = () => 99;

            const [result, error] = await PromiseUtil.handler(fn);

            expect(result).toBe(99);
            expect(error).toBeNull();
        });

        it('catches errors', async () => {
            const boom = new Error('fail');
            const [result, error] = await PromiseUtil.handler(Promise.reject(boom));

            expect(result).toBeNull();
            expect(error).toBe(boom);
        });
    });

    describe('executeSequentially', () => {
        it('executes in order and collects results/errors', async () => {
            const promises = [
                Promise.resolve(1),
                Promise.reject(new Error('x')),
                Promise.resolve(3),
            ];

            const [results, errors] = await PromiseUtil.executeSequentially(promises);

            expect(results).toEqual([1, null, 3]);
            expect(errors.length).toBe(1);
            expect(errors[0].message).toBe('x');
        });
    });

    describe('retry', () => {
        it('retries until success', async () => {
            let count = 0;
            const fn = jest.fn(() => {
                if (count++ < 2) throw new Error('nope');
                return 7;
            });

            const [result, errors] = await PromiseUtil.retry(fn, 5);

            expect(result).toBe(7);
            expect(errors.length).toBe(2);
        });

        it('gives up after max retries', async () => {
            const fn = jest.fn(() => {
                throw new Error('f');
            });

            const [result, errors] = await PromiseUtil.retry(fn, 2);

            expect(result).toBeNull();
            expect(errors.length).toBe(3);
        });
    });

    describe('delay', () => {
        it('waits at least the specified time', async () => {
            const start = Date.now();
            await PromiseUtil.delay(50);
            expect(Date.now() - start).toBeGreaterThanOrEqual(50);
        });
    });

    describe('filter', () => {
        it('filters values using async predicate', async () => {
            const result = await PromiseUtil.filter([1, 2, 3, 4], async (v) => v % 2 === 0);
            expect(result).toEqual([2, 4]);
        });
    });

    describe('timeout', () => {
        it('resolves before timeout', async () => {
            const result = await PromiseUtil.timeout(delay(20).then(() => 123), 50);
            expect(result).toBe(123);
        });

        it('rejects on timeout', async () => {
            await expect(PromiseUtil.timeout(delay(50), 10)).rejects.toThrow('Timeout exceeded');
        });
    });

    describe('batchPromises', () => {
        it('processes batches correctly', async () => {
            const fn = async (x: number) => x * 2;

            const result = await PromiseUtil.batchPromises([1, 2, 3, 4], 2, fn);

            expect(result).toEqual([2, 4, 6, 8]);
        });
    });

    describe('mapPromises', () => {
        it('maps values to promises', async () => {
            const res = await PromiseUtil.mapPromises([1, 2, 3], async (v) => v + 1);
            expect(res).toEqual([2, 3, 4]);
        });
    });

    describe('concurrentMap', () => {
        it('runs with concurrency limit', async () => {
            const fn = jest.fn(async (v: number) => {
                await delay(10);
                return v * 2;
            });

            const result = await PromiseUtil.concurrentMap([1, 2, 3], fn, 2);

            expect(result).toEqual([2, 4, 6]);
            expect(fn).toHaveBeenCalledTimes(3);
        });
    });

    describe('executeConcurrently', () => {
        it('collects results and errors', async () => {
            const promises = [
                Promise.resolve(1),
                Promise.reject(new Error('bad')),
                Promise.resolve(3),
            ];

            const [results, errors] = await PromiseUtil.executeConcurrently(promises, 2);

            expect(results).toEqual([1, null, 3]);
            expect(errors.length).toBe(1);
            expect(errors[0].message).toBe('bad');
        });
    });

    describe('promisify', () => {
        const fn = jest.fn();

        it('wraps callback-style function (default: back-last)', async () => {
            fn.mockImplementation((a: number, b: number, cb: (e: number, r: null) => void) => {
                cb(a + b, null);
            });

            const p = PromiseUtil.promisify(fn);

            expect(await p(5, 7)).toBe(12);
        });

        it('supports front-first position', async () => {
            fn.mockImplementation((cb: (e: null, r: number) => void, arg: number) => {
                cb(null, arg * 3);
            });

            const p = PromiseUtil.promisify(fn, {
                callBackPosition: 'front',
                errorPosition: 'first',
            });

            expect(await p(4)).toBe(12);
        });
    });
});
