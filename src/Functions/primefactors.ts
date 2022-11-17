export default (numb:number):number[] => {
    numb = numb || 10;
    const primefactors = [];
    if(numb < 2) return [];
    for(let i = 2; numb > 1; i++){
        if(numb % i == 0){
            for(let j = 0; numb % i == 0; j++){
                primefactors.push(i);
                numb /= i;
            }
        }
    }
    return primefactors;
}