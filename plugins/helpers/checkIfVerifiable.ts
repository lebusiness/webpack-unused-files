const check: Array<RegExp> = [
    /.*node_modules.*/,
    /\.json$/,
    /.*plugins.*/,
    /\.config\.[tj]s$/,
    /README\.md$/,
    /\.git.*$/,
    /\.nvmrc$/,
    /\.prettierrc\.yaml$/,
    /index\.html$/,
];

export function checkIfVerifiable(path: string) {
    let isUsed:boolean = true;
    check.forEach(reg => {
        if (path.match(reg)) {
            isUsed = false;
        }
    });
    return isUsed
}
