import { MapEntry } from "../Types";

export default class Collection<K, V> extends Map<K, V> {
	/**
	 * It removes the key and value from the map.
	 * @param {K} key - The key of the element to remove from the Map object.
	 * @returns The object that was removed from the map.
	 */
	public remove(key: K): MapEntry<K, V> | undefined {
		const object = this.get(key);
		if (!object) {
			return void 0;
		}
		this.delete(key);
		return { key: key, value: object };
	}

	public toString(): string {
		return `Collection: ${this.toString()}`;
	}

	/**
	 * It converts the map to an array of objects.
	 * @returns An array of objects with key and value properties.
	 */
	public toArray(): MapEntry<K, V>[] {
		return Array.from(this.entries()).map(e => ({ key: e[0], value: e[1] }));
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
}