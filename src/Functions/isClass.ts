export default function(value: any):boolean {
    if(typeof value !== 'function') {
        return false;
    }

    try {
        value();
    } catch (e:any) {
        if (/^Class constructor/.test(e.message)) {
            return true;
        }
    }

    return false;
}