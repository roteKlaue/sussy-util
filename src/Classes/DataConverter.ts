interface JSONObject {
    [key: string]: string | number | boolean | JSONObject | JSONObject[];
}

export default class DataConverter {
    /**
     * It takes a CSV string and returns an array of objects.
     * The first line of the CSV is assumed to be the header row.
     * The header row is used to create the keys for the objects in the array.
     * The values for the keys are taken from the subsequent rows.
     * @param {string} csv - string - The CSV string you want to convert to JSON
     * @returns An array of objects.
     */
    public static csvToJson(csv: string): object[] {
        const lines = csv.split('\n');
        const headers = lines[0].split(',');
        const jsonData: JSONObject[] = [];

        for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(',');
            const obj: JSONObject = {};

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


    /**
     * It takes an array of objects and returns a CSV string.
     * The first object in the array is taken as for the properties of the csv string.
     * 
     * The function takes two parameters:
     * json: an array of objects
     * del: the delimiter to use in the CSV string (defaults to a comma)
     * @param {object[]} json - object[] - The JSON object you want to convert to CSV.
     * @param {string} [del=,] - The delimiter to use in the CSV file.
     * @returns A string
     */
    public static jsonToCsv(json: JSONObject[], del: string = ","): string {
        const csvRows: string[] = [];

        const headers = Object.keys(json[0]);
        csvRows.push(headers.join(del));

        for (const obj of json) {
            const values = headers.map(header => {
                const value = obj[header];

                if (typeof value === 'object') {
                    return JSON.stringify(value);
                }

                return String(value);
            });

            csvRows.push(values.join(del));
        }

        return csvRows.join('\n');
    }
}