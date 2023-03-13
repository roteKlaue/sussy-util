import fs from "fs";
import path from "path";

/**
 * "If the package.json file exists in the given directory, return the directory, otherwise, return the
 * parent directory."
 * 
 * The function is recursive, meaning that it calls itself. It does this until it finds the
 * package.json file
 * @param {string} dirPath - The path to the directory you want to check.
 */
const temp = (dirPath: string): string => fs.existsSync(path.join(dirPath, "package.json")) ? dirPath : temp(path.resolve(`${dirPath}/../`));
export default temp;