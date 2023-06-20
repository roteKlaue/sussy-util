import MutableObject from "./MutableObject";

export default interface JSONObject extends MutableObject<string | number | boolean | JSONObject | JSONObject[] | string[] | boolean[] | number[]> {}