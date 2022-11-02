const fs = require('fs');
import { PathMap } from "../types/PathMap";

export function readFile(path: string): PathMap {
    let paths = JSON.parse(fs.readFileSync(path, 'utf8'));
    return paths;
}
