import { Compiler } from 'webpack';
import { PathMap } from './types/PathMap';
import { readFile, writeFile, checkIfVerifiable } from './helpers';
class ModuleLogger {
    apply(compiler: Compiler) {
        compiler.hooks.normalModuleFactory.tap('ModuleLogger', normalModuleFactory => {
            normalModuleFactory.hooks.module.tap('ModuleLogger', (_module, _createData, resolveData) => {
                const path: string = _createData.resource;
                const isVerifiable: boolean = checkIfVerifiable(path)
                
                if (isVerifiable) {
                    let paths: PathMap = readFile('usedPath.json');
                    paths[path] = true;
                    writeFile('usedPath.json', paths)
                }

                return _module;
            });
        });
    }
}

export default ModuleLogger;
