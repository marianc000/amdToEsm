export default function text(v, specifier) {
    return `const ${v}=await fetch(new URL('${specifier}',import.meta.url)).then(response => response.text());`;
}

const TEXT_PLUGIN_PREFIX = 'text!';

export function getImport(v, sp) {
    if (sp.startsWith(TEXT_PLUGIN_PREFIX)) {
        return text(v, sp.replace(TEXT_PLUGIN_PREFIX,''));
    }

    if (sp.includes('/')) sp += '.js'; // do not add .js only to bare specifiers
    if (v)
        return `import ${v} from '${sp}';`;
    else
        return `import '${sp}';`;
}

export function toImports(paths, vars=[]) {
    return paths.map((s, i) => getImport(vars[i], s)).join('\r\n');
}