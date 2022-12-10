import { AbstractClass, ImprovedArray, PrimeNumbers } from "../allClasses";
import { Point } from "../allInterfaces";

export default abstract class BetterMath extends AbstractClass {
    static primes = new PrimeNumbers();

    constructor() {
        super(BetterMath);
    }

    static round(value: number, digit: number):number {
        digit = Math.floor(digit);
        if(digit < 0) digit = 0;
        if (digit === 0) {
            return Math.round(value);
        }
        return Math.round(value * Math.pow(10, digit)) / Math.pow(10, digit);
    }

    static random():number {
        return Math.random();
    }

    static square(num:number):number {
        return num * num;
    }
    static distance = (path: Point[], index:number = 0):number => 
        path.length === index? 
            0: 
            Math.sqrt(this.square(path[index].x - path[index + 1].x) + this.square(path[index].y - path[index + 1].y)) + this.distance(path, ++index);

    static greatestCommonDivisor(a:number, b:number):number {
        const primes = this.primes.addPrimes(a<b?a:b);
        const factors = new ImprovedArray<number>(0);

        for (let i = 0; i < primes.length; i++) {
            const prime = primes[i];
            while (a%prime === 0 && b%prime === 0) {
                a/=prime;
                b/=prime;
                factors.push(prime);
            }
        }

        return factors.reduce(((t,c) => t * c));
    }

    static gcd(a:number, b:number):number {
        return this.greatestCommonDivisor(a,b);
    }

    static lowestCommonDenominator(a:number, b:number):number {
        if (a === 0 || b === 0) {
            return 0;
        }
        const abs = {a:Math.abs(a), b:Math.abs(b)};
        const absHigherNumber = Math.max(abs.a, abs.b);
        const absLowerNumber = Math.min(abs.a, abs.b);
        let lcm = absHigherNumber;
        while (lcm % absLowerNumber !== 0) {
            lcm += absHigherNumber;
        }
        return lcm;
    }

    static lcm(a:number, b:number):number {
        return this.lowestCommonDenominator(a,b);
    }
}