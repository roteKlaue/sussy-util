declare type Constructor<T extends object> = new (...params: never[]) => T;

export default Constructor;
