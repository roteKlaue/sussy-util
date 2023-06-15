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
    public static jsonToCsv(json: object[], del: string = ","): string {
        const keys = Object.keys(json[0]);
        const csv = json.map((obj: any) => keys.map(k => obj[k]).join(del));
        csv.unshift(keys.join(","));
        return csv.join("\n");
    }
}