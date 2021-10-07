export function splice(str, s, e) {
    return str.substring(0, s) + str.substring(e);
}

export function replace(str, s, e, newStr) {
    return str.substring(0, s) + newStr + str.substring(e);
}

export function adjustNewlines(str) {
    return str.replaceAll('\r', '');
}