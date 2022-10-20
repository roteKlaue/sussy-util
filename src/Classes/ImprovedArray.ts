import IndexOutOfBoundsError from "../Error/IndexOutOfBoundsError";

export default class impArray<T> extends Array<T> {
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

    clone():impArray<T> {
        return new impArray<T>(...this);
    }

    isEmpty():boolean {
        return this.length === 0;
    }
}