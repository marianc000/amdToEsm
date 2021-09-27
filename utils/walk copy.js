import { opendir } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url'
import { dirname } from 'path'
 
import { convert } from '../parser.js';
import { writeFile, readFile } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

console.log({ __filename, __dirname })

async function* walk(dir) {
    for await (const d of await opendir(dir)) {
        const entry = join(dir, d.name);
        if (d.isDirectory()) yield* walk(entry);
        else if (d.isFile()) yield entry;
    }
}

// Then, use it with a simple async for loop
async function main(dir) {
    console.log(">dir", dir);
    for await (const p of walk(dir)) {
        if (p.endsWith(".js")) {
            console.log(p);
            try {
                let js = await readFile(p, { encoding: 'utf8' });
                let js2 = convert(js);
                console.log(js.length, '=>', js2.length);
                // await writeFile(p, js2   );
            } catch (ex) {
                if (ex === "No define()")
                    console.log('skipped ', p);
                else
                    throw ex;
            }
        }
    }
}

process.argv.forEach(function (val, index, array) {
    console.log(index + ': ' + val);
});

if (process.argv.length > 2) {
    main(process.argv[2]);
}