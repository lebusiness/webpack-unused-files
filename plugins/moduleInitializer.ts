import { Compiler } from 'webpack';
import { writeFile } from './helpers';

class moduleInitializer {
    apply(compiler: Compiler) {
        compiler.hooks.initialize.tap('moduleFinisher', () => {
            writeFile("usedPath.json", {})
        });
    }
}

export default moduleInitializer;
