import MutableObject from "../Types/MutableObject";
import AbstractClass from "./AbstractClass";

export default class UrlUtils extends AbstractClass {
    /**
     * If the URL is valid, it will return true, otherwise it will return false.
     * @param {string} url - The URL to validate.
     * @returns {boolean} A boolean value.
     */
    public static isUrl(url: string): boolean {
        try {
            new URL(url);
            return true;
        } catch (e) {
            return false;
        }
    }

    /**
     * It takes a string and returns a URL object
     * @param {string} url - The URL to parse.
     * @returns A new URL object.
     */
    public static parseUrl(url: string): URL {
        return new URL(url);
    }

    /**
     * It takes a URL as a string, and returns the domain name as a string
     * @param {string} url - The URL to get the domain name from.
     * @returns The hostname of the URL.
     */
    public static getDomainName(url: string): string {
        return new URL(url).hostname;
    }

    /**
     * It takes a URL and returns the pathname of the URL
     * @param {string} url - The URL to parse.
     * @returns The pathname of the url.
     */
    public static getPath(url: string): string {
        return new URL(url).pathname;
    }

    /**
     * It takes a URL and a set of key-value pairs and returns a new URL with the key-value pairs added
     * as query parameters.
     * @param {string} url - string - The URL to add the query parameters to.
     * @param params - MutableObject<string>
     * @returns A string
     */
    public static addQueryParams(url: string, params: MutableObject<string>): string {
        const parsedUrl = this.parseUrl(url);
        Object.entries(params).forEach(([key, value]) => parsedUrl.searchParams.append(key, value));
        return parsedUrl.toString();
    }

    /**
     * It takes a URL and a query parameter name, and returns the URL with the query parameter removed.
     * @param {string} url - The URL to be parsed.
     * @param {string} param - The query parameter to remove
     * @returns A string
     */
    public static removeQueryParam(url: string, param: string): string {
        const parsedUrl = this.parseUrl(url);
        parsedUrl.searchParams.delete(param);
        return parsedUrl.toString();
    }

    /**
     * It takes a URL and a set of key-value pairs, and returns a new URL with the query parameters
     * updated to match the key-value pairs
     * @param {string} url - string - The URL to edit
     * @param params - MutableObject<string>
     * @returns A string
     */
    public static editQueryParams(url: string, params: MutableObject<string>): string {
        const parsedUrl = this.parseUrl(url);
        Object.entries(params).forEach(([key, value]) => {
            if (parsedUrl.searchParams.has(key)) {
                parsedUrl.searchParams.delete(key);
            }
            parsedUrl.searchParams.set(key, value);
        });
        return parsedUrl.toString();
    }
}