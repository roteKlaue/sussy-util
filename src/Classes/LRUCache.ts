/**
 * A node in a doubly linked list.
 */
class DoublyLinkedListNode<Key> {
	public key: Key;
	public prev: DoublyLinkedListNode<Key> | null = null;
	public next: DoublyLinkedListNode<Key> | null = null;

	constructor(key: Key) {
		this.key = key;
	}
}

/**
 * A doubly linked list for quick insertion/removal from head/tail.
 */
class DoublyLinkedList<Key> {
	private head: DoublyLinkedListNode<Key> | null = null;
	private tail: DoublyLinkedListNode<Key> | null = null;

	public addToFront = (node: DoublyLinkedListNode<Key>): void => {
		if (!node) return;
		if (!this.head) {
			this.head = node;
			this.tail = node;
			return;
		}

		node.next = this.head;
		this.head.prev = node;
		this.head = node;
	};

	public removeNode = (node: DoublyLinkedListNode<Key>): void => {
		if (!node) return;

		const { prev, next } = node;

		if (prev) prev.next = next;
		if (next) next.prev = prev;
		if (this.head === node) this.head = next;
		if (this.tail === node) this.tail = prev;

		node.prev = null;
		node.next = null;
	};

	public moveToFront = (node: DoublyLinkedListNode<Key>): void => {
		if (!node) return;
		if (this.head === node) return;

		this.removeNode(node);
		this.addToFront(node);
	};

	public removeLast = (): DoublyLinkedListNode<Key> | null => {
		if (!this.tail) return null;

		const last = this.tail;
		this.removeNode(last);
		return last;
	};
}

/**
 * A Least Recently Used (LRU) Cache implementation with a fixed capacity.
 * Provides O(1) lookup, insertion, and removal.
 *
 * @template Key - The type of keys stored in the cache.
 * @template Value - The type of values stored in the cache.
 */
export class LRUCache<Key, Value> {
	private readonly capacity: number;
	private cache: Map<Key, Value>;
	private nodes: Map<Key, DoublyLinkedListNode<Key>>;
	private usageOrder: DoublyLinkedList<Key>;
	private evictionCallback: (key: Key, value: Value) => void;

	/**
     * @param capacity The maximum number of entries the cache can hold.
     */
	constructor(capacity: number) {
		if (capacity <= 0) {
			throw new Error('LRUCache capacity must be greater than 0.');
		}

		this.capacity = capacity;
		this.cache = new Map<Key, Value>();
		this.nodes = new Map<Key, DoublyLinkedListNode<Key>>();
		this.usageOrder = new DoublyLinkedList<Key>();
		this.evictionCallback = () => {};
	}

	/**
     * Retrieve a value from the cache.
     * Moves the accessed item to the front of the usage order.
     *
     * @param key The key to look up.
     * @returns The value associated with the key, or undefined if not found.
     */
	public get = (key: Key): Value | undefined => {
		const value = this.cache.get(key);
		if (value === undefined) return undefined;

		const node = this.nodes.get(key);
		if (!node) return undefined;

		this.usageOrder.moveToFront(node);
		return value;
	};

	/**
     * Add or update a key-value pair.
     * If adding the item causes the cache to exceed capacity, evicts the least recently used item.
     *
     * @param key The key.
     * @param value The value.
     */
	public put = (key: Key, value: Value): void => {
		// If item already in cache, update and move to front
		if (this.cache.has(key)) {
			this.cache.set(key, value);
			const existingNode = this.nodes.get(key);
			if (existingNode) this.usageOrder.moveToFront(existingNode);
			return;
		}

		// If new entry and over capacity, evict LRU
		if (this.cache.size >= this.capacity) {
			const lruNode = this.usageOrder.removeLast();
			if (lruNode) {
				const evictedKey = lruNode.key;
				const evictedValue = this.cache.get(evictedKey);
				if (evictedValue !== undefined) {
					this.evictionCallback(evictedKey, evictedValue);
				}
				this.cache.delete(evictedKey);
				this.nodes.delete(evictedKey);
			}
		}

		// Insert new entry at front
		const newNode = new DoublyLinkedListNode<Key>(key);
		this.usageOrder.addToFront(newNode);
		this.cache.set(key, value);
		this.nodes.set(key, newNode);
	};

	/**
     * Remove an item from the cache.
     *
     * @param key The key of the item to remove.
     * @returns True if the item was removed, false otherwise.
     */
	public remove = (key: Key): boolean => {
		const node = this.nodes.get(key);
		if (!node) return false;

		this.usageOrder.removeNode(node);
		const removed = this.cache.delete(key);
		this.nodes.delete(key);
		return removed;
	};

	/**
     * Clear the cache of all entries.
     */
	public clear = (): void => {
		this.cache.clear();
		this.nodes.clear();
		// Clear the linked list entirely
		while (this.usageOrder.removeLast()) {
			// just clearing
		}
	};

	/**
     * Get all keys currently in the cache (order not guaranteed).
     */
	public getAllKeys = (): Key[] => {
		return Array.from(this.cache.keys());
	};

	/**
     * Get all values currently in the cache (order not guaranteed).
     */
	public getAllValues = (): Value[] => {
		return Array.from(this.cache.values());
	};

	/**
     * Set a callback to be called when an item is evicted.
     *
     * @param callback The callback function.
     */
	public setEvictionCallback = (callback: (key: Key, value: Value) => void): void => {
		if (!callback) return;
		this.evictionCallback = callback;
	};

	/**
     * Get a generator yielding all entries in the cache (order not guaranteed).
     */
	public *entries(): Generator<[Key, Value]> {
		for (const [key, value] of this.cache.entries()) {
			yield [key, value];
		}
	}
}
