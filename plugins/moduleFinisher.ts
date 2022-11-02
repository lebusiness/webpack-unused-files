import { Compiler } from 'webpack';
import { getPaths, readFile, writeFile } from './helpers';
import { PathMap } from './types/PathMap';

class moduleFinisher {
    apply(compiler: Compiler) {
        compiler.hooks.done.tap('moduleFinisher', () => {
            let paths: PathMap = readFile('usedPath.json');
            const allPaths: PathMap = getPaths('src/');
            const diffPaths: Array<string> = [];

            for (let path in allPaths) {
                if (!paths[path] && !path.match(/.html$/)) {
                    diffPaths.push(path);
                }
            }

            writeFile('unused.json', diffPaths);
        });
    }
}

export default moduleFinisher;
