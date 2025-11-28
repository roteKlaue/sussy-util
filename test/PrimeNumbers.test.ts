import PrimeNumbers from "../src/Classes/PrimeNumbers";

describe('PrimeNumbers', () => {
    let primeGen: PrimeNumbers;

    beforeEach(() => {
        primeGen = new PrimeNumbers();
    });

    describe('getTill', () => {
        it('returns prime numbers up to a limit', () => {
            const result = primeGen.getTill(20);

            const expected = [2, 3, 5, 7, 11, 13, 17, 19];

            expect(result).toEqual(expected);
        });

        it('returns cached primes when requesting a smaller number', () => {
            primeGen.getTill(30);
            const smaller = primeGen.getTill(10);

            expect(smaller).toEqual([2, 3, 5, 7]);
        });

        it('extends the prime list only for new numbers', () => {
            const first = primeGen.getTill(10);
            const second = primeGen.getTill(20);

            expect(first).toEqual([2, 3, 5, 7]);
            expect(second).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
        });
    });

    describe('addPrimes', () => {
        it('adds the first 5 primes into its internal list', () => {
            const res = primeGen.addPrimes(5);

            expect(res).toEqual([2, 3, 5, 7, 11, 13]);
        });

        it('continues adding primes where it left off', () => {
            primeGen.addPrimes(3);
            const res = primeGen.addPrimes(2);

            expect(res).toEqual([2, 3, 5, 7, 11, 13]);
        });
    });

    describe('reset', () => {
        it('resets internal state and starts over', () => {
            primeGen.addPrimes(4);
            primeGen.reset();

            const res = primeGen.addPrimes(1);

            expect(res).toEqual([2, 3]);
        });
    });
});
