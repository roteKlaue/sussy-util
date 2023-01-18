import { MapEntry } from "../Types";

export default class Collection<K, V> extends Map<K, V> {
	remove(key: K): MapEntry<K, V> | undefined {
		const object = this.get(key);
		if (!object) {
			return void 0;
		}
		this.delete(key);
		return { key: key, value: object };
	}

	toString(): string {
		return `Collection: ${this.toString()}`;
	}

	toArray(): MapEntry<K, V>[] {
		return Array.from(this.entries()).map(e => ({ key: e[0], value: e[1] }));;
	}

	count(): number {
		return this.size;
	}

	missing(key: K): boolean {
		return !this.has(key);
	}

	toJSONString(): string {
		return JSON.stringify(this.toArray());
	}
}