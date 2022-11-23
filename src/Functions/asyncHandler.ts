export default async (promise:Function, ...args:any[]):Promise<[any,null|Error]> => {
	try {
		const data = await promise(...args);
		return [data, null];
	} catch (e) {
		return [null, e as Error];
	}
}