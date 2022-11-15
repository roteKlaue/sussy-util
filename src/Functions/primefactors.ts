import { IsSomething } from "../allClasses";

const prime = (numb:number):number[] => {
    const primefactors = [];
        if(numb < 2) return [];
        for(let i = 2; numb > 1; i++){
            if(numb % i == 0){
                if(!IsSomething.isPrime(i)) {
                    primefactors.push(...prime(i));
                } else {
                    primefactors.push(i);
                }
                numb /= i;
            }
        }
        return primefactors;
}

export default prime;