import { AbstractClassInstanceCallError } from '../Error';
import { Constructor } from '../Types';

export default class AbstractClass<T extends object> {
	public constructor(Constructor: Constructor<T>) {
		const isClass = (arg: Function) => {
			if (typeof arg !== 'function') {
				return false;
			}
			try {
				arg();
			}
			catch (e) {
				if (/^Class constructor/.test((e as Error).message)) {
					return true;
				}
			}
			return false;
		};

		if (!isClass(Constructor)) throw new TypeError('Constructor must be the constructor of a class.');
		if (this.constructor === Constructor) {
			// if constructor is the same as the instance constructor then we know that a user is trying to make a new instance of an abstract class
			throw new AbstractClassInstanceCallError('You can\'t instantiate a new instance of a abstract class.');
		}

		if(this.constructor === AbstractClass.prototype.constructor) {
			throw new AbstractClassInstanceCallError('You can\'t instantiate a new instance of a abstract class.');
		}
	}
}