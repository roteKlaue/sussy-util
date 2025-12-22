import Queue from "../src/Classes/Queue";

describe("Queue<T>", () => {
    test("initializes with given elements", () => {
        const q = new Queue<number>([1, 2, 3]);

        expect(q.toArray()).toEqual([1, 2, 3]);
    });

    test("push() adds elements", () => {
        const q = new Queue<number>([1]);

        q.push(2, 3);

        expect(q.toArray()).toEqual([1, 2, 3]);
    });

    test("peek() returns the first element wrapped in Optional", () => {
        const q = new Queue<string>(["a", "b"]);
        const result = q.peek();

        expect(result.isPresent()).toBe(true);
        expect(result.get()).toBe("a");
    });

    test("peek() on empty queue returns empty Optional", () => {
        const q = new Queue<number>([]);
        const result = q.peek();

        expect(result.isPresent()).toBe(false);
    });

    test("shift() removes and returns the first element", () => {
        const q = new Queue<number>([10, 20]);
        const result = q.shift();

        expect(result.get()).toBe(10);
        expect(q.toArray()).toEqual([20]);
    });

    test("shift() on empty queue yields empty Optional", () => {
        const q = new Queue<number>([]);
        const result = q.shift();

        expect(result.isPresent()).toBe(false);
    });

    test("empty() reports correctly", () => {
        const q = new Queue<number>([]);

        expect(q.empty()).toBe(true);

        q.push(1);

        expect(q.empty()).toBe(false);
    });

    test("toString() prints queue contents", () => {
        const q = new Queue<number>([5, 6]);

        expect(q.toString()).toBe("Queue: 5,6");
    });

    test("toJSONString() outputs valid JSON", () => {
        const q = new Queue<number>([1, 2, 3]);

        expect(q.toJSONString()).toBe("[1,2,3]");
    });

    test("iterator yields elements in order", () => {
        const q = new Queue<string>(["x", "y", "z"]);
        const result: string[] = [];

        for (const item of q) result.push(item);

        expect(result).toEqual(["x", "y", "z"]);
    });
});
