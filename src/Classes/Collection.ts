import { MapEntry } from '../Types';
import Optional from './Optional';

type Predicate<V, K, C extends Collection<K, V>> = (value: V, key: K, collection: C) => boolean;
type Reducer<V, K, C extends Collection<K, V>, U> = (
  accumulator: U,
  value: V,
  key: K,
  collection: C,
) => U;
type Transformer<V, K, C extends Collection<K, V>, U> = (value: V, key: K, collection: C) => U;

export default class Collection<K, V> extends Map<K, V> {
  /**
   * Removes the key and value from the map.
   * @param key - The key of the element to remove.
   * @returns An Optional containing the removed {key, value}, or empty if not found.
   */
  public remove = (key: K): Optional<MapEntry<K, V>> => {
    const object = this.get(key);
    if (object === void 0) return Optional.empty();
    this.delete(key);
    return Optional.of({ key, value: object });
  };

  /**
   * Provides a human-readable string representation.
   */
  public toString = (): string => {
    return `Collection(${this.toJSONString()})`;
  };

  /**
   * Converts the map to an array of {key, value} objects.
   */
  public toArray = (): MapEntry<K, V>[] => {
    return Array.from(this.entries()).map(([key, value]) => ({ key, value }));
  };

  /**
   * Returns the number of entries in the Collection.
   */
  public count = (): number => {
    return this.size;
  };

  /**
   * Returns true if the key does not exist in the map.
   */
  public missing = (key: K): boolean => {
    return !this.has(key);
  };

  /**
   * Converts the Collection to a JSON string.
   */
  public toJSONString = (): string => {
    return JSON.stringify(this.toArray());
  };

  /**
   * Checks if the map contains a specific value.
   */
  public contains = (value: V): boolean => {
    for (const val of this.values()) {
      if (val === value) return true;
    }
    return false;
  };

  /**
   * Merges entries from another map into this one.
   */
  public merge = (map: Map<K, V>): void => {
    for (const [key, value] of map.entries()) {
      this.set(key, value);
    }
  };

  /**
   * Filters the collection based on a predicate.
   * Returns a new Collection with entries that satisfy the predicate.
   */
  public filter = (predicate: Predicate<V, K, this>): Collection<K, V> => {
    const result = new Collection<K, V>();
    for (const [key, value] of this.entries()) {
      if (predicate(value, key, this)) {
        result.set(key, value);
      }
    }
    return result;
  };

  /**
   * Transforms the collection values and returns a new Collection with the transformed values.
   * Keys remain the same.
   */
  public mapValues = <U>(transformFn: Transformer<V, K, this, U>): Collection<K, U> => {
    const transformed = new Collection<K, U>();
    for (const [key, value] of this.entries()) {
      const newValue = transformFn(value, key, this);
      transformed.set(key, newValue);
    }
    return transformed;
  };

  /**
   * Maps the collection to an array of values based on a callback function.
   * Returns an array of transformed values.
   */
  public mapArray = <U>(callback: Transformer<V, K, this, U>): U[] => {
    const result: U[] = [];
    for (const [key, value] of this.entries()) {
      result.push(callback(value, key, this));
    }
    return result;
  };

  /**
   * Reduces the collection into a single value.
   */
  public reduce = <U>(reducer: Reducer<V, K, this, U>, initialValue: U): U => {
    let accumulator = initialValue;
    for (const [key, value] of this.entries()) {
      accumulator = reducer(accumulator, value, key, this);
    }
    return accumulator;
  };

  /**
   * Checks if all entries satisfy the predicate.
   */
  public every = (predicate: Predicate<V, K, this>): boolean => {
    for (const [key, value] of this.entries()) {
      if (!predicate(value, key, this)) return false;
    }
    return true;
  };

  /**
   * Checks if any entry satisfies the predicate.
   */
  public some = (predicate: Predicate<V, K, this>): boolean => {
    for (const [key, value] of this.entries()) {
      if (predicate(value, key, this)) return true;
    }
    return false;
  };

  /**
   * Finds the first entry that satisfies the predicate.
   * Returns an Optional containing [key, value] if found, otherwise empty.
   */
  public find = (predicate: Predicate<V, K, this>): Optional<[K, V]> => {
    for (const [key, value] of this.entries()) {
      if (predicate(value, key, this)) {
        return Optional.of([key, value]);
      }
    }
    return Optional.empty();
  };

  /**
   * Returns the value as an Optional.
   */
  public getOptional = (key: K): Optional<V> => {
    return Optional.ofNullable(this.get(key));
  };

  /**
   * Finds the key associated with the given value.
   * Returns an Optional containing the key if found, otherwise empty.
   */
  public keyOf = (value: V): Optional<K> => {
    for (const [key, val] of this.entries()) {
      if (val === value) return Optional.of(key);
    }
    return Optional.empty();
  };
}
