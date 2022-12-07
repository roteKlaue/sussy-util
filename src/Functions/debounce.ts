export default (fn: Function, wait?:number, immediate = false):Function => {
    let timeout:number|undefined|NodeJS.Timeout;

    const setDebounce = (...args:any[]) => {
        const later = () => {
            timeout = undefined;
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
}