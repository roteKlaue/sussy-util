[sussy-util](../README.md) / [classes](./README.md) / LRUCache

# Class: LRUCache

A Least Recently Used (LRU) Cache implementation with a fixed capacity.

## Type Parameters

- `Key`: The type of keys stored in the cache.
- `Value`: The type of values stored in the cache.

## Constructors

### constructor

Create an LRUCache instance with a specified capacity.

**Parameters:**

- `capacity` (`number`): The maximum number of entries the cache can hold.

## Methods

### get

Retrieve a value from the cache based on the provided key. Moves the accessed item to the front of the usage order.

**Parameters:**

- `key` (`Key`): The key for the desired value.

**Returns:**

- `Value | undefined`: The value associated with the key, or undefined if not found.

### put

Add a key-value pair to the cache. If the cache exceeds capacity, the least recently used item is evicted. Moves the added or accessed item to the front of the usage order.

**Parameters:**

- `key` (`Key`): The key for the new item.
- `value` (`Value`): The value associated with the key.

### putAll

Add multiple key-value pairs to the cache. If the cache exceeds capacity, the least recently used items are evicted. Moves the added or accessed items to the front of the usage order.

**Parameters:**

- `entries` (`[Key, Value][]`): An array of key-value pairs to add to the cache.

### clear

Clear all entries from the cache.

### getAllKeys

Get an array of all keys currently in the cache.

**Returns:**

- `Key[]`: An array of keys in the cache.

### getAllValues

Get an array of all values currently in the cache.

**Returns:**

- `Value[]`: An array of values in the cache.

### entries

Get a generator yielding all entries (key-value pairs) in the cache.

**Yields:**

- `[Key, Value]`: A key-value pair from the cache.

### setEvictionCallback

Set a callback function to be called when an item is evicted from the cache.

**Parameters:**

- `callback` (`(key: Key, value: Value) => void`): The callback function.

### remove

Remove an item from the cache based on the provided key.

**Parameters:**

- `key` (`Key`): The key of the item to remove.

**Returns:**

- `boolean`: True if the item was removed, false if the key was not found.
