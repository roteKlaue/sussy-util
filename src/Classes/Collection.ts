import { MapEntry } from '../Types';
import Optional from './Optional';

type Predicate<V, K> = (value: V, key: K, collection: Collection<K, V>) => boolean;

export default class Collection<K, V> extends Map<K, V> {
  /**
   * It removes the key and value from the map.
   * @param {K} key - The key of the element to remove from the Map object.
   * @returns The object that was removed from the map.
   */
  public remove(key: K): Optional<MapEntry<K, V>> {
    const object = this.get(key);
    if (!object) {
      return Optional.empty();
    }
    this.delete(key);
    return Optional.of({ key: key, value: object });
  }

  public toString(): string {
    return `Collection: (${this.toJSONString().trim()})`;
  }

  /**
   * It converts the map to an array of objects.
   * @returns An array of objects with key and value properties.
   */
  public toArray(): MapEntry<K, V>[] {
    return Array.from(this.entries()).map((e) => ({ key: e[0], value: e[1] }));
  }

  /**
   * It returns the size of the stack.
   * @returns The size of the list.
   */
  public count(): number {
    return this.size;
  }

  /**
   * returns true if the key is not in the map
   * @param {K} key - K
   * @returns A boolean value.
   */
  public missing(key: K): boolean {
    return !this.has(key);
  }

  /**
   * It converts the object to a JSON string.
   * @returns The JSON string representation of the array.
   */
  public toJSONString(): string {
    return JSON.stringify(this.toArray());
  }

  /**
   * It checks if the map contains a specific value.
   * @param {V} value - The value to search for in the map.
   * @returns A boolean value indicating whether the value is found in the map.
   */
  public contains(value: V): boolean {
    for (const entry of this.entries()) {
      if (entry[1] === value) {
        return true;
      }
    }
    return false;
  }

  /**
   * It merges the entries from another map into the current map.
   * @param {Collection<K, V>} map - The map to merge with the current map.
   */
  public merge(map: Collection<K, V>): void {
    for (const [key, value] of map.entries()) {
      this.set(key, value);
    }
  }

  /**
   * It returns a new Collection containing entries that satisfy the provided predicate function.
   * @param {Function} predicate - A predicate function that is called for each entry with arguments (value, key, collection).
   * @returns A new Collection containing entries that satisfy the predicate function.
   */
  public filter(predicate: Predicate<V, K>): Collection<K, V> {
    const filteredCollection = new Collection<K, V>();
    for (const [key, value] of this.entries()) {
      if (predicate(value, key, this)) {
        filteredCollection.set(key, value);
      }
    }
    return filteredCollection;
  }

  /**
   * It performs a transformation on each entry in the Collection and returns a new Collection with the transformed entries.
   * @param {Function} transformFn - A function that is called for each entry with arguments (value, key, collection).
   * @returns A new Collection with the transformed entries.
   */
  public map<U>(
    transformFn: (value: V, key: K, collection: Collection<K, V>) => U,
  ): Collection<K, U> {
    const transformedCollection = new Collection<K, U>();
    for (const [key, value] of this.entries()) {
      const transformedValue = transformFn(value, key, this);
      transformedCollection.set(key, transformedValue);
    }
    return transformedCollection;
  }

  /**
   * It performs a reduce operation on the Collection, accumulating a single value based on the entries.
   * @param {Function} reducer - A reducer function that is called for each entry with arguments (accumulator, value, key, collection).
   * @param {any} initialValue - An initial value for the accumulator.
   * @returns The accumulated value after applying the reducer function to each entry.
   */
  public reduce<U>(
    reducer: (accumulator: U, value: V, key: K, collection: Collection<K, V>) => U,
    initialValue: U,
  ): U {
    let accumulator = initialValue;
    for (const [key, value] of this.entries()) {
      accumulator = reducer(accumulator, value, key, this);
    }
    return accumulator;
  }

  /**
   * It checks if all entries in the Collection satisfy the provided predicate function.
   * @param {Function} predicate - A predicate function that is called for each entry with arguments (value, key, collection).
   * @returns A boolean value indicating whether all entries satisfy the predicate function.
   */
  public every(predicate: Predicate<V, K>): boolean {
    for (const [key, value] of this.entries()) {
      if (!predicate(value, key, this)) {
        return false;
      }
    }
    return true;
  }

  /**
   * It checks if any entry in the Collection satisfies the provided predicate function.
   * @param {Function} predicate - A predicate function that is called for each entry with arguments (value, key, collection).
   * @returns A boolean value indicating whether any entry satisfies the predicate function.
   */
  public some(predicate: Predicate<V, K>): boolean {
    for (const [key, value] of this.entries()) {
      if (predicate(value, key, this)) {
        return true;
      }
    }
    return false;
  }
}
