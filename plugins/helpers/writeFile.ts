const fs = require('fs');
import { PathMap } from "../types/PathMap";

export function writeFile(path: string, body: PathMap| Array<string>): void {
    fs.writeFileSync(path, JSON.stringify(body));
}
