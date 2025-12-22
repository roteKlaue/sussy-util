import MutableObject from '../Types/MutableObject';

class UrlUtils {
  private static instance: UrlUtils = new UrlUtils();
  private constructor() {}

  /**
   * If the URL is valid, it will return true, otherwise it will return false.
   * @param {string} url - The URL to validate.
   * @returns {boolean} A boolean value.
   */
  public isUrl(url: string): boolean {
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
  public parseUrl(url: string): URL {
    return new URL(url);
  }

  /**
   * It takes a URL as a string, and returns the domain name as a string
   * @param {string} url - The URL to get the domain name from.
   * @returns The hostname of the URL.
   */
  public getDomainName(url: string): string {
    return new URL(url).hostname;
  }

  /**
   * It takes a URL and returns the pathname of the URL
   * @param {string} url - The URL to parse.
   * @returns The pathname of the url.
   */
  public getPath(url: string): string {
    return new URL(url).pathname;
  }

  /**
   * It takes a URL and a set of key-value pairs and returns a new URL with the key-value pairs added
   * as query parameters.
   * @param {string} url - string - The URL to add the query parameters to.
   * @param params - MutableObject<string>
   * @returns A string
   */
  public addQueryParams(url: string, params: MutableObject<string>): string {
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
  public removeQueryParam(url: string, param: string): string {
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
  public editQueryParams(url: string, params: MutableObject<string>): string {
    const parsedUrl = this.parseUrl(url);
    Object.entries(params).forEach(([key, value]) => {
      if (parsedUrl.searchParams.has(key)) {
        parsedUrl.searchParams.delete(key);
      }
      parsedUrl.searchParams.set(key, value);
    });
    return parsedUrl.toString();
  }

  /**
   * It takes a URL and returns an object containing the query parameters as key-value pairs.
   * @param {string} url - The URL to extract query parameters from.
   * @returns {MutableObject<string>} An object containing the query parameters.
   */
  public getQueryParams(url: string): MutableObject<string> {
    const parsedUrl = this.parseUrl(url);
    const queryParams: MutableObject<string> = {};
    parsedUrl.searchParams.forEach((value, key) => (queryParams[key] = value));
    return queryParams;
  }

  /**
   * It takes a URL and a query parameter name, and returns the value of the specified query parameter.
   * @param {string} url - The URL to extract the query parameter value from.
   * @param {string} param - The query parameter name.
   * @returns {string | null} The value of the specified query parameter, or null if it doesn't exist.
   */
  public getQueryParamValue(url: string, param: string): string | null {
    const parsedUrl = this.parseUrl(url);
    return parsedUrl.searchParams.get(param);
  }

  /**
   * It takes a URL and a new path, and returns a new URL with the updated path.
   * @param {string} url - The URL to update the path for.
   * @param {string} newPath - The new path to set.
   * @returns {string} The updated URL with the new path.
   */
  public updatePath(url: string, newPath: string): string {
    const parsedUrl = this.parseUrl(url);
    parsedUrl.pathname = newPath;
    return parsedUrl.toString();
  }

  /**
   * It takes a URL and returns a boolean indicating whether it has any query parameters.
   * @param {string} url - The URL to check for query parameters.
   * @returns {boolean} A boolean value indicating if the URL has query parameters.
   */
  public hasQueryParams(url: string): boolean {
    const parsedUrl = this.parseUrl(url);
    return parsedUrl.searchParams && parsedUrl.searchParams.toString() !== '';
  }

  /**
   * Checks if the URL has a specific query parameter.
   * @param {string} url - The URL to check.
   * @param {string} param - The query parameter name.
   * @returns {boolean} True if the parameter exists, false otherwise.
   */
  public hasQueryParam(url: string, param: string): boolean {
    const parsedUrl = this.parseUrl(url);
    return parsedUrl.searchParams.has(param);
  }

  /**
   * Appends or updates query parameters from an object to a URL.
   * @param {string} url - The URL to update.
   * @param {MutableObject<string>} params - The query parameters to append or update.
   * @returns {string} The updated URL.
   */
  public updateQueryParams(url: string, params: MutableObject<string>): string {
    const parsedUrl = this.parseUrl(url);
    for (const [key, value] of Object.entries(params)) {
      parsedUrl.searchParams.set(key, value);
    }
    return parsedUrl.toString();
  }

  /**
   * Replaces specified query parameters with new values.
   * @param {string} url - The URL to replace query parameters in.
   * @param {MutableObject<string>} replacements - The replacements for query parameters.
   * @returns {string} The URL with replaced query parameters.
   */
  public replaceQueryParams(url: string, replacements: MutableObject<string>): string {
    const queryParams = this.getQueryParams(url);
    for (const [key, value] of Object.entries(replacements)) {
      if (queryParams.hasOwnProperty(key)) {
        queryParams[key] = value;
      }
    }
    return this.updateQueryParams(url, queryParams);
  }

  /**
   * Removes specified query parameters from a URL.
   * @param {string} url - The URL to remove query parameters from.
   * @param {string[]} paramsToRemove - The names of query parameters to remove.
   * @returns {string} The URL with specified query parameters removed.
   */
  public removeQueryParams(url: string, paramsToRemove: string[]): string {
    const parsedUrl = this.parseUrl(url);
    for (const param of paramsToRemove) {
      parsedUrl.searchParams.delete(param);
    }
    return parsedUrl.toString();
  }

  /**
   * Merges query parameters from two URLs, prioritizing parameters from the second URL.
   * @param {string} url1 - The first URL.
   * @param {string} url2 - The second URL.
   * @returns {string} The merged URL with query parameters.
   */
  public mergeQueryParams(url1: string, url2: string): string {
    const queryParams1 = this.getQueryParams(url1);
    const queryParams2 = this.getQueryParams(url2);
    const mergedParams = { ...queryParams1, ...queryParams2 };
    return this.updateQueryParams(url1, mergedParams);
  }

  public static getInstance(): UrlUtils {
    return this.instance;
  }
}

export default UrlUtils.getInstance();
