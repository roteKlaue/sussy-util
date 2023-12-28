const debounce = (fn: Function, wait?: number, immediate = false): ((...args: any) => void) => {
	let timeout: number | undefined | NodeJS.Timeout;

	const setDebounce = (...args: any[]): void => {
		const later = () => {
			timeout = void 0;
			if (!immediate) {
				fn.apply(later, args);
			}
		};

		const callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait || 200);

		if (callNow) {
			fn.apply(setDebounce, args);
		}
	};

	return setDebounce;
};

export default debounce;