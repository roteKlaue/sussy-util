export default class LRUCache<T> {
    private cache: Map<string, { value: T, timestamp: number }> = new Map();
    private maxSize: number;
    private currentSize: number = 0;

    constructor(maxSize: number) {
        if (maxSize <= 0) {
            throw new Error("Max size must be greater than 0.");
        }
        this.maxSize = maxSize;
    }

     /**
     * If the key exists, update the timestamp and value, otherwise, if the cache is full, remove the
     * least recently used item, otherwise, add the key, value, and timestamp to the cache.
     * @param {string} key - string - The key to store the value under
     * @param {T} value - The value to be stored in the cache
     * @returns The value of the key.
     */   
    public add(key: string, value: T) {
        if (this.cache.has(key)) {
            const gettet = this.cache.get(key);
            if (gettet) {
                gettet.timestamp = Date.now();
                gettet.value = value;
                return;
            }
        }
        if (this.currentSize === this.maxSize) {
            this.removeLRU();
        }
        this.cache.set(key, { value, timestamp: Date.now() });
        this.currentSize++;
    }

    /**
     * If the key exists in the cache, update the timestamp and return the value.
     * @param {string} key - string - The key to retrieve the value for.
     * @returns The value of the entry.value property.
     */
    public get(key: string): T | undefined {
        const entry = this.cache.get(key);
        if (!entry) {
            return void 0;
        }
        entry.timestamp = Date.now();
        return entry.value;
    }

    /**
     * We iterate through the cache, and find the key with the lowest timestamp, and then delete that
     * key from the cache.
     */
    public removeLRU() {
        let lruKey = undefined;
        let lruTimestamp = Number.MAX_SAFE_INTEGER;

        this.cache.forEach((value, key) => {
            if (value.timestamp < lruTimestamp) {
                lruTimestamp = value.timestamp;
                lruKey = key;
            }
        });

        this.cache.delete(lruKey + "");
        this.currentSize--;
    }
}