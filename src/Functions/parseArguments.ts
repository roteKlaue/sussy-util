const parseArgs = (args: string[]): (string | { flag: string, value?: string | undefined })[] => {
	const result = [];
	let currentFlag: { flag: string, value?: string } | null = null;

	for (let i = 2; i < args.length; i++) {
		const arg = args[i];

		if (arg.startsWith('--')) {
			currentFlag = { flag: arg.slice(2) };
		} else if (currentFlag) {
			currentFlag.value = arg;
			result.push(currentFlag);
			currentFlag = null;
		} else {
			result.push(arg);
		}
	}

	return result;
};

export default parseArgs;