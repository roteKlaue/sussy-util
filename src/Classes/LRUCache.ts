import ObjectPool from "./ObjectPool";
import Optional from "./Optional";

/**
 * A Least Recently Used (LRU) Cache implementation with a fixed capacity.
 *
 * @template Key - The type of keys stored in the cache.
 * @template Value - The type of values stored in the cache.
 */
export default class LRUCache<Key, Value> {
    private readonly capacity: number;
    private cache: Map<Key, Value>;
    private usageOrder: DoublyLinkedList<Key>;
    private objectPool: ObjectPool<DoublyLinkedListNode<Key>>;
    private evictionCallback: (key: Key, value: Value) => void = (key, value) => void 0;

    /**
     * Create an LRUCache instance with a specified capacity.
     *
     * @param {number} capacity - The maximum number of entries the cache can hold.
     */
    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = new Map();
        this.usageOrder = new DoublyLinkedList<Key>();
        this.objectPool = new ObjectPool(() => new DoublyLinkedListNode<Key>());
    }

    /**
     * Retrieve a value from the cache based on the provided key.
     * Moves the accessed item to the front of the usage order.
     *
     * @param {Key} key - The key for the desired value.
     * @returns {Value | undefined} - The value associated with the key, or undefined if not found.
     */
    get(key: Key): Optional<Value> {
        if (this.cache.has(key)) {
            const value = this.cache.get(key)!;
            this.usageOrder.moveToFront(key);
            return Optional.of(value);
        }
        return Optional.empty();
    }

    /**
     * Add a key-value pair to the cache. If the cache exceeds capacity, the least recently used item is evicted.
     * Moves the added or accessed item to the front of the usage order.
     *
     * @param {Key} key - The key for the new item.
     * @param {Value} value - The value associated with the key.
     */
    put(key: Key, value: Value) {
        if (this.cache.size >= this.capacity) {
            const evictedKey = this.usageOrder.removeLast();
            if (!!evictedKey) {
                this.evictionCallback(evictedKey, this.cache.get(evictedKey)!!);
                this.cache.delete(evictedKey);
                this.objectPool.release(this.usageOrder.find(evictedKey)!!);
                this.usageOrder.remove(evictedKey);
            }
        }

        if (this.cache.has(key)) {
            this.cache.set(key, value);
            this.usageOrder.moveToFront(key);
        } else {
            const newNode = this.objectPool.acquire();
            newNode.value = key;
            this.usageOrder.addToFront(newNode);
            this.cache.set(key, value);
        }
    }

    /**
     * Add multiple key-value pairs to the cache. If the cache exceeds capacity, the least recently used items are evicted.
     * Moves the added or accessed items to the front of the usage order.
     *
     * @param {[Key, Value][]} entries - An array of key-value pairs to add to the cache.
     */
    putAll(entries: [Key, Value][]) {
        for (const [key, value] of entries) {
            this.put(key, value);
        }
    }

    /**
     * Clear all entries from the cache.
     */
    clear() {
        this.cache.clear();
        this.usageOrder.clear();
    }

    /**
     * Get an array of all keys currently in the cache.
     *
     * @returns {Key[]} - An array of keys in the cache.
     */
    getAllKeys(): Key[] {
        return Array.from(this.cache.keys());
    }

    /**
     * Get an array of all values currently in the cache.
     *
     * @returns {Value[]} - An array of values in the cache.
     */
    getAllValues(): Value[] {
        return Array.from(this.cache.values());
    }

    /**
     * Get a generator yielding all entries (key-value pairs) in the cache.
     *
     * @yields {[Key, Value]} - A key-value pair from the cache.
     */
    *entries(): Generator<[Key, Value]> {
        for (const [key, value] of this.cache.entries()) {
            yield [key, value];
        }
    }

    /**
     * Set a callback function to be called when an item is evicted from the cache.
     *
     * @param {(key: Key, value: Value) => void} callback - The callback function.
     */
    setEvictionCallback(callback: (key: Key, value: Value) => void) {
        this.evictionCallback = callback;
    }

    /**
     * Remove an item from the cache based on the provided key.
     *
     * @param {Key} key - The key of the item to remove.
     * @returns {boolean} - True if the item was removed, false if the key was not found.
     */
    remove(key: Key): boolean {
        if (this.cache.has(key)) {
            this.cache.delete(key);
            this.objectPool.release(this.usageOrder.find(key)!!);
            this.usageOrder.remove(key);
            return true;
        }
        return false;
    }
}

/**
 * A node in a doubly linked list.
 *
 * @template T - The type of value stored in the node.
 */
class DoublyLinkedListNode<T> {
    value: T | null = null;
    next: DoublyLinkedListNode<T> | null = null;
    prev: DoublyLinkedListNode<T> | null = null;
}

/**
 * A doubly linked list data structure.
 *
 * @template T - The type of values stored in the list.
 */
class DoublyLinkedList<T> {
    private head: DoublyLinkedListNode<T> | null = null;
    private tail: DoublyLinkedListNode<T> | null = null;

    /**
     * Add a node to the front of the linked list.
     *
     * @param {DoublyLinkedListNode<T>} node - The node to add.
     */
    addToFront(node: DoublyLinkedListNode<T>) {
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
    }

    /**
     * Remove the last node from the linked list and return its value.
     *
     * @returns {T | null} - The value of the removed node, or null if the list is empty.
     */
    removeLast(): T | null {
        if (this.tail === null) {
            return null;
        }
        const lastNode = this.tail;
        if (lastNode.prev) {
            lastNode.prev.next = null;
            this.tail = lastNode.prev;
        } else {
            this.head = null;
            this.tail = null;
        }
        return lastNode.value;
    }

    /**
    * Remove a node with a specific value from the linked list.
    *
    * @param {T} value - The value of the node to remove.
    * @returns {boolean} - True if the node was found and removed, false otherwise.
    */
    remove(value: T): boolean {
        let currentNode = this.head;
        while (currentNode !== null && currentNode.value !== value) {
            currentNode = currentNode.next;
        }
        if (currentNode !== null) {
            if (currentNode.prev) {
                currentNode.prev.next = currentNode.next;
            } else {
                this.head = currentNode.next;
            }
            if (currentNode.next) {
                currentNode.next.prev = currentNode.prev;
            } else {
                this.tail = currentNode.prev;
            }
            return true;
        }
        return false;
    }

    /**
     * Move a node with a specific value to the front of the linked list.
     *
     * @param {T} value - The value of the node to move to the front.
     */
    moveToFront(value: T) {
        let currentNode = this.head;
        while (currentNode !== null && currentNode.value !== value) {
            currentNode = currentNode.next;
        }
        if (currentNode !== null) {
            if (currentNode.prev) {
                currentNode.prev.next = currentNode.next;
                if (currentNode === this.tail) {
                    this.tail = currentNode.prev;
                }
            }
            currentNode.next = this.head;
            currentNode.prev = null;
            this.head!.prev = currentNode;
            this.head = currentNode;
        }
    }

    /**
     * Find a node with a specific value in the linked list.
     *
     * @param {T} value - The value to search for.
     * @returns {DoublyLinkedListNode<T> | null} - The node with the specified value, or null if not found.
     */
    find(value: T): DoublyLinkedListNode<T> | null {
        let currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

    /**
     * Clear the linked list, removing all nodes.
     */
    clear() {
        this.head = null;
        this.tail = null;
    }
}
