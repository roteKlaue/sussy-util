export default function(a,b) {
    const newObj = {};
    for (const key in a) {
        newObj[key] = a[key];
    }
    for (const key in b) {
        newObj[key] = b[key];
    }
    return newObj;
}