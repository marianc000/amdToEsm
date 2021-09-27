import { opendir } from 'fs/promises';
import { join } from 'path';
 
export async function* walk(dir,ext) {
    //console.log("searching for: ",ext);
    for await (const d of await opendir(dir)) {
        const entry = join(dir, d.name);
        if (d.isDirectory()) yield* walk(entry,ext);
        else if (d.isFile()&&d.name.endsWith(ext)) yield entry;
    }
}
 