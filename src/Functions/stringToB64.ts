export default (value: String): String => {
    return Buffer.from(value).toString("base64");
}