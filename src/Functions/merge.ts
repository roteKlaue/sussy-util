export default function(a:{[k: string]: any},b:{[k: string]: any}):{[k: string]: any} {
    for (const key in b) {
        if(!a[key] ) { continue; }
        a[key] = b[key];
    }
    return a;
}