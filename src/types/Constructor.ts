declare type Constructor<T extends {}> = new (...params: any[]) => T;

export default Constructor;
