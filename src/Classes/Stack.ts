import IndexOutOfBoundsError from "../Error/IndexOutOfBoundsError";
import impArray from "./ImprovedArray";

export default class Stack<T> {
    #items:impArray<T> = new impArray<T>();

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
        return this.#items.isEmpty();
    }

    toString():string {
        return `Stack: ${this.#items.toString()}`;
    }

    toArray():T[] {
        return this.#items;
    }
}