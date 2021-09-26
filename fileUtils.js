import { readFile } from 'fs/promises';

export function loadFile(relPath) {
    let filePath = new URL(relPath, import.meta.url);
    return readFile(filePath, { encoding: 'utf8' });
}