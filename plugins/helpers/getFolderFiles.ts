const fs = require('fs');
const path = require('path');
import { PathMap } from '../types/PathMap';
import { isFile } from './isFile';

let globalPath: string = __dirname.slice(0, __dirname.indexOf("/plugins")) + '/';

export function getPaths(thisPath: string): PathMap {
    let paths: PathMap = {};

    const files: [string] = fs.readdirSync(thisPath);
    const filesJoin = files.map((fileName: string) => {
        return path.join(thisPath, fileName);
    });

    filesJoin.forEach((item: string) => {
        if (isFile(item)) paths[globalPath + item] = true;
        else {
            const subPaths: PathMap = getPaths(item);
            paths = { ...paths, ...subPaths };
        }
    });
    
    return paths;
}
