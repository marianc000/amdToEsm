import { opendirSync } from 'fs';
import { join } from 'path';

export function findJsFiles(dir ) {
    const files = [];
    let stream;
    try {
        stream = opendirSync(dir);
        let e;
        while (e = stream.readSync()) {
            const path = join(dir, e.name);
            if (e.isDirectory()) files.push(...findJsFiles(path ));
            else if (e.isFile() && e.name.endsWith(".js")) files.push(path);
        }
    } finally {
        stream?.close();
    }
    return files;
}