export default async (promise:(...a:any)=>Promise<any>, ...args:any[]):Promise<[any,null|Error]> => {
	try {
		const data = await promise(...args);
		return [data, null];
	} catch (e) {
		return [null, e as Error];
	}
}