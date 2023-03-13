import { PromiseOr } from "../Types";

/**
 * Executes the given asynchronous function with the provided parameters, and 
 * calls the callback function when the function has completed with either 
 * the resolved value or the error that occurred.
 * 
 * @async
 * @param {function(...args: any[]): PromiseOr<any>} func - The asynchronous function to execute.
 * @param {function} callback - The callback function to call when the function has completed.
 * @param {...any} params - The parameters to pass to the asynchronous function.
 * @returns {Promise<void>} A Promise that resolves when the function has completed and the callback has been called.
 */
export default async (func: (...args: any[]) => PromiseOr<any>, callback: Function, ...params: any[]): Promise<void> => {
    try {
        const res = await func(...params);
        callback(res, null);
    } catch (e) {
        callback(null, e);
    }
}