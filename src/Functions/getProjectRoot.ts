import fs from "fs";
import path from "path";

const temp = (dirPath: string):string  => fs.existsSync(path.join(dirPath, "package.json"))? dirPath : temp(path.resolve(`${dirPath}/../`));

export function getProjectRoot():string {
    return temp(__dirname);
}