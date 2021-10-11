import { readFile } from 'fs/promises';

export function loadFile(relPath,base) {
    let filePath = new URL(relPath, base);
    return readFile(filePath, { encoding: 'utf8' });
}
 