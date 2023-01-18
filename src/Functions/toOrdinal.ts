export default (n: number): string => {
    const lastDigit = n % 10;
    if (n === 11 || n === 12 || n === 13) {
        return n + 'th';
    } else if (lastDigit === 1) {
        return n + 'st';
    } else if (lastDigit === 2) {
        return n + 'nd';
    } else if (lastDigit === 3) {
        return n + 'rd';
    } else {
        return n + 'th';
    }
}