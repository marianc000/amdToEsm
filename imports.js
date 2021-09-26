 
export function getImport(v, sp) {
    if (sp.startsWith('.')) sp += '.js';

    if (v)
        return `import ${v} from '${sp}';`;
    else
        return `import '${sp}';`;
}

export function toImports(paths, vars) {
    return paths.map((s, i) => getImport(vars[i], s)).join('\n');
}