import { MutableObject } from "../Types/";
import fs from "fs";

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