/**
 * Converts the given number of bytes to a human-readable string that represents the file size.
 *
 * @param {number} bytes - The number of bytes to convert.
 * @returns {string} A human-readable string representing the file size.
 */
export default (bytes: number): string => {
    if (bytes === 0) return '0 B';
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return (bytes / Math.pow(1024, i)).toPrecision(3) + ' ' + sizes[i];
}