import IsSomething from "./IsSomething";

export default class PrimeNumbers {
    private current:number = 0;
    private primes:number[] = [];

    constructor() {}

    public getTill(num:number):number[] {
        if(num > this.current) {
            for(let i = this.current; i <= num; i++) {
                if(i % 2 === 0  || !IsSomething.isPrime(num)) continue;
                this.primes.push(i);
            }
            this.current = num;
            return this.primes;
        }
        return this.primes.filter(e => e <= num);
    }
    
    public addPrimes(num:number):number[] {
        while(num > 0) {
            this.current++;
            if(IsSomething.isPrime(this.current)) {
                this.primes.push(this.current);
                num--;
            }
        }

        return this.primes;
    }
}