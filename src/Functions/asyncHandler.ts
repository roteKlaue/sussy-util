export default async <T extends Error>(promise: (...a: any) => Promise<any>, ...args: any[]): Promise<[any, null | T]> => {
	try {
		const data = await promise(...args);
		return [data, null];
	} catch (e) {
		return [null, e as T];
	}
}