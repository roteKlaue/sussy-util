export default async function (promise:Function, ...args:any[]) {
	try {
		const data = await promise(...args);
		return [data, null];
	} catch (e) {
		return [null, e];
	}
}