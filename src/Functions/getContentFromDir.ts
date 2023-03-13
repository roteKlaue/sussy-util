import { MutableObject } from "../Types/";
import fs from "fs";

/**
 * It takes a directory path as a string, and returns an object with the directory's contents as
 * properties.
 * @param {string} dir - string - The directory to read from
 * @returns An object with the content of the directory.
 */
const getContentFromDirectory = (dir: string) => {
    const result = {} as MutableObject<any>;
    fs.readdirSync(dir).forEach((path: string) => {
        if (fs.lstatSync(`${dir}/${path}`).isDirectory()) {
            return result[path] = getContentFromDirectory(`${dir}/${path}`);
        }
        result[path.replace(".js", "")] = require(`${dir}/${path}`);
    });
    return result;
}

export default getContentFromDirectory;