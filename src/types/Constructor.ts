declare type Constructor<T extends object> = new (...params: any[]) => T;

export default Constructor;