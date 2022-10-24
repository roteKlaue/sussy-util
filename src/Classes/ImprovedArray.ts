import IndexOutOfBoundsError from "../Error/IndexOutOfBoundsError";
import Set from "./Set";

export default class ImprovedArray<T> extends Array<T> {
    constructor(... _elements:T[]) {
        super(_elements.length);
        _elements.forEach((_e,i)=> this[i] = _e);
    }

    getRandomIndex():number {
        return Math.floor(Math.random() * this.length);
    }

    getRandomElement():T {
        return this[this.getRandomIndex()];
    }

    remove(index:number) :void {
        if(index >= this.length || index < 0) throw new IndexOutOfBoundsError(`${index} is out of bounds for length: ${this.length}`);
        this.splice(Math.floor(index), 1);
    }

    insertAt(index:number, ...items:T[]):void {
        if(index >= this.length || index < 0) throw new IndexOutOfBoundsError(`${index} is out of bounds for length: ${this.length}`);
        this.push(...items, ...this.splice(index, this.length - index - 1));
    }

    clear():void {
        this.splice(0, this.length);
    }

    clone():ImprovedArray<T> {
        return new ImprovedArray<T>(...this);
    }

    isEmpty():boolean {
        return this.length === 0;
    }

    none (predicate:Function):boolean {
        return this.reduce((acc, value) => !acc && !predicate(value), false);
    }

    rejected(predicate:Function):ImprovedArray<T> {
        return new ImprovedArray<T>(...this.filter((val,ind,arr) => !predicate(val,ind,arr)));
    }

    sum():T|string {
        return this.reduce(function (acc:any, value):any {
            return acc + value;
        });
    }

    removeDuplicates():void {
        const newArray = new Set<T>(...this).toArray();
        this.clear();
        this.push(...newArray);
    }
}