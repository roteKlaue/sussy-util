import { MutableObject } from "../Types";
import AbstractClass from "./AbstractClass";

export default class DataConverter extends AbstractClass {
    constructor() {
        super(DataConverter);
    }

    public static csvToJson(csv: string): object[] {
        const lines = csv.split('\n');
        const headers = lines[0].split(",");
        const jsonData: MutableObject<any>[] = [];

        for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(",");
            const obj: MutableObject<any> = {};

            for (let j = 0; j < headers.length; j++) {
                const header = headers[j];
                let value: any = values[j];

                if (value.startsWith('{') || value.startsWith('[')) {
                    value = JSON.parse(value);
                }

                if (!isNaN(Number(value))) {
                    value = Number(value);
                }

                if (value === 'true' || value === 'false') {
                    value = value === 'true';
                }
                obj[header] = value;
            }

            jsonData.push(obj);
        }

        return jsonData;
    }

    public static jsonToCsv(json: object[]): string {
        const csvRows: string[] = [];

        const headers = Object.keys(json[0]);
        csvRows.push(headers.join(","));

        for (const obj of json) {
            const values = headers.map(header => {
                const value = (obj as MutableObject<any>)[header];

                if (typeof value === 'object') {
                    return JSON.stringify(value);
                }

                return String(value);
            });

            csvRows.push(values.join(","));
        }

        return csvRows.join('\n');
    }
}