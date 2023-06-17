export default interface JSONObject {
    [key: string]: string | number | boolean | JSONObject | JSONObject[];
}