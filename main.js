import { convert } from './parser.js';
import { writeFile, readFile } from 'fs/promises';
import { walk } from './utils/walk.js';
 
async function main(dir) {
    console.log(">looking in:", dir);
    for await (const p of walk(dir, ".js")) {
        console.log(p);
        try {
            let js = await readFile(p, { encoding: 'utf8' });
            let js2 = convert(js);
            console.log(js.length, '=>', js2.length);
            await writeFile(p, js2);
        } catch (ex) {
            if (ex === "No define()")
                console.log('skipped ', p);
            else
                throw ex;
        }
    }
}

process.argv.forEach(function (val, index, array) {
    console.log(index + ': ' + val);
});

if (process.argv.length > 2) {
    main(process.argv[2]);
}