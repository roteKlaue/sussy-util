import { execSync } from "node:child_process"

export default (milliseconds: number): void => {
    execSync(`sleep ${milliseconds}`);
}