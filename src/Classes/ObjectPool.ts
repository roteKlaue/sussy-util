export default class ObjectPool<T> {
	private readonly createObjectCallback: () => T;
	private pool: T[] = [];

	/**
     * Creates an object pool.
     * @param {() => T} createObjectCallback A function that creates new objects for the pool.
     * @param {number} [initialPoolSize=0] The initial size of the object pool.
     */
	public constructor(createObjectCallback: () => T, initialPoolSize: number = 0) {
		this.createObjectCallback = createObjectCallback;
		this.populatePool(initialPoolSize);
	}

	/**
     * Populates the object pool with a specified number of objects.
     * @private
     * @param {number} count The number of objects to populate.
     */
	private populatePool(count: number) {
		for (let i = 0; i < count; i++) {
			this.pool.push(this.createObjectCallback());
		}
	}

	/**
     * Acquires an object from the pool. If the pool is empty, a new object is created.
     * @returns {T} An object from the pool or a newly created object.
     */
	public acquire(): T {
		if (this.pool.length > 0) {
			return this.pool.shift()!;
		}
		return this.createObjectCallback();
	}

	/**
     * Releases an object back to the pool for reuse.
     * @param {T} item The object to be released.
     */
	public release(item: T) {
		this.pool.push(item);
	}

	/**
     * Clears the object pool, removing all objects.
     */
	public clear() {
		this.pool.length = 0;
	}
}
