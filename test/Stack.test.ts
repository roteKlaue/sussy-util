import IndexOutOfBoundsError from "../src/Error/IndexOutOfBoundsError";
import Stack from "../src/Classes/Stack";


describe("Stack<T>", () => {
    test("initializes with given elements", () => {
        const s = new Stack<number>([1, 2, 3]);

        expect(s.toArray()).toEqual([1, 2, 3]);
    });

    test("push() adds elements", () => {
        const s = new Stack<number>([1]);

        s.push(2, 3);

        expect(s.toArray()).toEqual([1, 2, 3]);
    });

    test("peek() returns the last element", () => {
        const s = new Stack<string>(["a", "b"]);

        expect(s.peek()).toBe("b");
    });

    test("peek() throws when empty", () => {
        const s = new Stack<number>([]);

        expect(() => s.peek()).toThrow(IndexOutOfBoundsError);
    });

    test("pop() removes and returns last element", () => {
        const s = new Stack<number>([5, 6]);

        const result = s.pop();

        expect(result).toBe(6);
        expect(s.toArray()).toEqual([5]);
    });

    test("pop() throws when empty", () => {
        const s = new Stack<number>([]);

        expect(() => s.pop()).toThrow(IndexOutOfBoundsError);
    });

    test("empty() reports correct status", () => {
        const s = new Stack<number>([]);

        expect(s.empty()).toBe(true);

        s.push(1);

        expect(s.empty()).toBe(false);
    });

    test("size() returns current stack size", () => {
        const s = new Stack<number>([1, 2, 3]);

        expect(s.size()).toBe(3);

        s.push(4);

        expect(s.size()).toBe(4);
    });

    test("toString() prints stack contents", () => {
        const s = new Stack<number>([1, 2]);

        expect(s.toString()).toBe("Stack: 1,2");
    });

    test("toJSONString() outputs JSON", () => {
        const s = new Stack<number>([1, 2, 3]);

        expect(s.toJSONString()).toBe("[1,2,3]");
    });

    test("clone() returns a new, equal stack", () => {
        const s = new Stack<number>([1, 2, 3]);
        const c = s.clone();

        expect(c.toArray()).toEqual([1, 2, 3]);
        expect(c).not.toBe(s); // must be a new instance
    });

    test("clear() empties the stack", () => {
        const s = new Stack<number>([1, 2, 3]);

        s.clear();

        expect(s.empty()).toBe(true);
        expect(s.size()).toBe(0);
    });

    test("reverse() returns a new reversed stack", () => {
        const s = new Stack<number>([1, 2, 3]);

        const r = s.reverse();

        expect(r.toArray()).toEqual([3, 2, 1]);
        expect(r).not.toBe(s);
    });

    test("removeAll() removes all occurrences and returns count", () => {
        const s = new Stack<number>([1, 2, 3, 2, 4]);

        const count = s.removeAll(2);

        expect(count).toBe(2);
        expect(s.toArray()).toEqual([1, 3, 4]);
    });

    test("distinct() returns a new stack with unique elements", () => {
        const s = new Stack<number>([1, 2, 2, 3, 1]);

        const u = s.distinct();

        expect(u.toArray().sort()).toEqual([1, 2, 3]);
        expect(u).not.toBe(s);
    });

    test("iterator yields elements from top to bottom", () => {
        const s = new Stack<string>(["a", "b", "c"]);

        const result: string[] = [];
        for (const el of s) result.push(el);

        expect(result).toEqual(["c", "b", "a"]);
    });
});
