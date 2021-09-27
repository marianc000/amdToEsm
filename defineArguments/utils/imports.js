export default function text(v, specifier) {
   // console.log(">text",v,specifier);
    return `const ${v}=await fetch(new URL('${specifier}',import.meta.url)).then(response => response.text());`;
}

const TEXT_PLUGIN_PREFIX = 'text!';

export function getImport(v, sp) {
    //console.log(">getImport",v,sp);
    if (sp.startsWith(TEXT_PLUGIN_PREFIX)) {
        return text(v, sp.replace(TEXT_PLUGIN_PREFIX,''));
    }

    if (sp.startsWith('.')) sp += '.js';

    if (v)
        return `import ${v} from '${sp}';`;
    else
        return `import '${sp}';`;
}

export function toImports(paths, vars) {
    return paths.map((s, i) => getImport(vars[i], s)).join('\r\n');
}