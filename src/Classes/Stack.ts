import IndexOutOfBoundsError from "../Error/IndexOutOfBoundsError";

export default class Stack<T> {
    #items:T[] = [];
    
    constructor() {};

    push(...elm:T[]):void {
        this.#items.push(...elm);
    }

    peek():T {
        if(this.#items.length < 0) throw new IndexOutOfBoundsError(); 
        return this.#items[this.#items.length - 1];
    }

    pop():T {
        if(this.#items.length < 0) throw new IndexOutOfBoundsError(); 
        const sus = this.#items.pop();
        if(!sus) throw new IndexOutOfBoundsError();
        return sus;
    }

    empty():boolean {
        return this.#items.length === 0;
    }
}