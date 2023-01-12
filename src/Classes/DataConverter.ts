import AbstractClass from "./AbstractClass";

export default class DataConverter extends AbstractClass {
    constructor() {
        super(DataConverter);
    }

    public static csvToJson(csv: string): object[] {
        const lines = csv.split("\n");
        const headers = lines[0].split(",");
        const json: object[] = [];

        for (let i = 1; i < lines.length; i++) {
            const currentline = lines[i].split(",");
            if (currentline.length > 1) {
                const obj: any = {};
                for (let j = 0; j < headers.length; j++) {
                    obj[headers[j]] = currentline[j];
                }
                json.push(obj);
            }
        }
        return json;
    }

    public static jsonToCsv(json: object[]): string {
        const keys = Object.keys(json[0]);
        const csv = json.map((obj: any) => keys.map(k => obj[k]).join(","));
        csv.unshift(keys.join(","));
        return csv.join("\n");
    }
}