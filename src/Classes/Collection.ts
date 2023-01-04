import AlreadyExistsInCollectionError from "../Error/AlreadyExistsInCollectionError";
import ImprovedArray from "./ImprovedArray";
import MapEntries from "../Types/MapEntry";

export default class Collection<K, V> {
	// TODO: Documentation
	private map: ImprovedArray<MapEntries<K, V>> = new ImprovedArray<MapEntries<K, V>>();

	get(key: K): V | undefined {
		return this.map.find((e) => e.key === key)?.value;
	}

	set({ key, value }: MapEntries<K, V>): void {
		const object = this.map.find((e) => e.key === key);
		if (object) {
			throw new AlreadyExistsInCollectionError("There is already a key value pair with this key");
		}

		this.map.push({ key: key, value: value });
	}

	put(kv: MapEntries<K, V>): void {
		this.map = this.map.filter((e) => e.key !== kv.key) as ImprovedArray<MapEntries<K, V>>;
		this.map.push(kv);
	}

	remove(key: K): MapEntries<K, V> {
		const object = this.map.find((e) => e.key === key);
		if (!object) {
			throw new AlreadyExistsInCollectionError("There is no a key value pair with this key");
		}
		return this.map.remove(this.map.indexOf(object));
	}

	toString(): string {
		return `Collection: ${this.map.toString()}`;
	}

	toArray(): MapEntries<K, V>[] {
		return this.map;
	}

	count(): number {
		return Object.keys(this.map).length;
	}

	has(key: K): boolean {
		return !!this.map.find((e) => e.key === key);
	}

	missing(key: K): boolean {
		return !this.has(key);
	}

	toJSONString(): string {
		return JSON.stringify(this.map);
	}
}