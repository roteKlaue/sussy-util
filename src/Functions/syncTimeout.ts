import { execSync } from "node:child_process"

/**
 * @param {number} milliseconds - The number of milliseconds to wait for the process to continue
*/
export default (milliseconds: number): void => {
    execSync(`sleep ${milliseconds}`);
}