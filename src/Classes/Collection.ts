import AlreadyExistsInCollectionError from "../Error/AlreadyExistsInCollectionError";
import impArray from "./ImprovedArray";
import MapEntries from "../Interfaces/MapEntry";

export default class Collection <K,V> {
	private map:impArray<MapEntries<K,V>> = new impArray<MapEntries<K,V>>();

	get(key:K):V|undefined {
		return this.map.find((e) => e.key === key)?.value;
	}

	set({key,value}: { key:K, value:V }):void {
		const object = this.map.find((e) => e.key === key);
		if(object) {
		 	throw new AlreadyExistsInCollectionError("There is already a key value pair with this key");
		}

		this.map.push({key:key, value:value});
	}


	remove(key:K):MapEntries<K,V> {
		const object = this.map.find((e) => e.key === key);
		if(!object){
			throw new AlreadyExistsInCollectionError("There is no a key value pair with this key");
		}
		return this.map.remove(this.map.indexOf(object));
	}

	toString():string {
        return `Collection: ${this.map.toString()}`;
    }

	toArray():MapEntries<K,V>[] {
		return this.map;
	}
}