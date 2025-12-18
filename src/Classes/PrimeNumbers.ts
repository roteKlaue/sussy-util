import { IsSomething } from '.';

export class PrimeNumbers {
  private current: number = 1;
  private primes: number[] = [2];

  /**
   * It returns an array of prime numbers up to a given number.
   * @param {number} num - number - The number to get the primes till.
   * @returns The primes array.
   */
  public getTill(num: number): number[] {
    if (num <= this.current) {
      return this.primes.slice(
        0,
        this.primes.findIndex((e) => e >= num),
      );
    }

    for (let i = this.current + 1; i <= num; i++) {
      if (i % 2 !== 0 && IsSomething.isPrime(i)) {
        this.primes.push(i);
      }
    }

    this.current = num;
    return [...this.primes];
  }

  /**
   * adds n amount of prime numbers to the cache and returns it
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

  /**
   * Resets the state of the PrimeNumbers instance.
   */
  public reset(): void {
    this.current = 1;
    this.primes = [2];
  }
}

export default PrimeNumbers;
