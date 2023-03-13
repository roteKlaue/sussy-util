import { IsSomething } from ".";

export default class PrimeNumbers {
    private current: number = 0;
    private primes: number[] = [];

    constructor() { }

    /**
     * It returns an array of prime numbers up to a given number.
     * @param {number} num - number - The number to get the primes till.
     * @returns The primes array.
     */
    public getTill(num: number): number[] {
        if (num > this.current) {
            for (let i = this.current; i <= num; i++) {
                if (i % 2 === 0 || !IsSomething.isPrime(num)) continue;
                this.primes.push(i);
            }
            this.current = num;
            return this.primes;
        }
        return this.primes.filter(e => e <= num);
    }

    /**
     * adds n amount of prime numbers to the the cache and returns it
     * @param {number} num - number - The number of primes to add to the list.
     * @returns The array of primes.
     */
    public addPrimes(num: number): number[] {
        while (num > 0) {
            this.current++;
            if (IsSomething.isPrime(this.current)) {
                this.primes.push(this.current);
                num--;
            }
        }

        return this.primes;
    }
}