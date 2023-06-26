export default (val:String):String => {
    return Buffer.from(val, 'base64').toString("utf8");
}