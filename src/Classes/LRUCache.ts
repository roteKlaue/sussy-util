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

    add(key: string, value: T) {
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

    get(key: string): T | undefined {
        const entry = this.cache.get(key);
        if (!entry) {
            return undefined;
        }
        entry.timestamp = Date.now();
        return entry.value;
    }

    removeLRU() {
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