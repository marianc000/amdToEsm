import { convert } from './parser.js';
import { writeFile, readFile } from 'fs/promises';
import { findJsFiles } from './utils/walk.js';

async function main(dir) {
    console.log(">looking in:", dir);
    const files = findJsFiles(dir);

    for (const file of files) {
        console.log('>',file);
        try {
            let js = await readFile(file, { encoding: 'utf8' });
            let js2 = convert(js);
            await writeFile(file, js2);
        } catch (ex) {
            if (ex === "No define()")
                console.log('skipped ', file);
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