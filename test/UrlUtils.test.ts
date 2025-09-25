import { UrlUtil } from "../src";

describe('UrlUtil', () => {
  describe('basic validation & parsing', () => {
    test('isUrl returns true for absolute URLs and false for invalid strings', () => {
      expect(UrlUtil.isUrl('https://example.com')).toBe(true);
      expect(UrlUtil.isUrl('http://localhost:8080/path')).toBe(true);
      expect(UrlUtil.isUrl('not a url')).toBe(false);
      expect(UrlUtil.isUrl('/relative/path')).toBe(false);
    });

    test('parseUrl returns a URL object for a valid URL', () => {
      const urlStr = 'https://example.com/some/path?x=1';
      const parsed = UrlUtil.parseUrl(urlStr);
      expect(parsed).toBeInstanceOf(URL);
      expect(parsed.hostname).toBe('example.com');
      expect(parsed.pathname).toBe('/some/path');
      expect(parsed.searchParams.get('x')).toBe('1');
    });

    test('getDomainName and getPath', () => {
      const url = 'https://sub.domain.example.com/a/b';
      expect(UrlUtil.getDomainName(url)).toBe('sub.domain.example.com');
      expect(UrlUtil.getPath(url)).toBe('/a/b');
    });
  });

  describe('query param helpers', () => {
    test('addQueryParams appends params (does not overwrite existing)', () => {
      const base = 'https://example.com/path';
      const result = UrlUtil.addQueryParams(base, { a: '1', b: 'two' });
      const parsed = new URL(result);
      expect(parsed.searchParams.get('a')).toBe('1');
      expect(parsed.searchParams.get('b')).toBe('two');
    });

    test('removeQueryParam removes a single param', () => {
      const url = 'https://example.com/?a=1&b=2';
      const out = UrlUtil.removeQueryParam(url, 'a');
      const p = new URL(out);
      expect(p.searchParams.has('a')).toBe(false);
      expect(p.searchParams.get('b')).toBe('2');
    });

    test('editQueryParams updates existing keys and sets new ones (deletes then sets)', () => {
      const url = 'https://example.com/?a=old&c=3';
      const out = UrlUtil.editQueryParams(url, { a: 'new', b: '2' });
      const p = new URL(out);
      expect(p.searchParams.get('a')).toBe('new'); // old replaced
      expect(p.searchParams.get('b')).toBe('2');   // newly set
      expect(p.searchParams.get('c')).toBe('3');   // untouched
    });

    test('getQueryParams returns a plain object of params', () => {
      const url = 'https://example.com/?a=1&b=2';
      const params = UrlUtil.getQueryParams(url);
      expect(params).toEqual({ a: '1', b: '2' });
    });

    test('getQueryParamValue returns value or null', () => {
      const url = 'https://example.com/?a=1';
      expect(UrlUtil.getQueryParamValue(url, 'a')).toBe('1');
      expect(UrlUtil.getQueryParamValue(url, 'b')).toBeNull();
    });

    test('updateQueryParams sets/overwrites params', () => {
      const url = 'https://example.com/?a=1';
      const out = UrlUtil.updateQueryParams(url, { a: '9', b: '8' });
      const p = new URL(out);
      expect(p.searchParams.get('a')).toBe('9');
      expect(p.searchParams.get('b')).toBe('8');
    });

    test('replaceQueryParams only replaces keys that already exist', () => {
      const url = 'https://example.com/?a=1&b=2';
      // replace a, attempt to replace c (which does not exist)
      const out = UrlUtil.replaceQueryParams(url, { a: '9', c: '10' });
      const p = new URL(out);
      expect(p.searchParams.get('a')).toBe('9');  // replaced
      expect(p.searchParams.get('b')).toBe('2');  // unchanged
      expect(p.searchParams.has('c')).toBe(false); // not added by replace
    });

    test('removeQueryParams removes multiple parameters', () => {
      const url = 'https://example.com/?a=1&b=2&c=3';
      const out = UrlUtil.removeQueryParams(url, ['a', 'c']);
      const p = new URL(out);
      expect(p.searchParams.has('a')).toBe(false);
      expect(p.searchParams.get('b')).toBe('2');
      expect(p.searchParams.has('c')).toBe(false);
    });

    test('mergeQueryParams merges params from two URLs with second URL taking precedence', () => {
      const url1 = 'https://example.com/?a=1&b=2';
      const url2 = 'https://example.com/?b=9&c=3';
      const out = UrlUtil.mergeQueryParams(url1, url2);
      const p = new URL(out);
      expect(p.searchParams.get('a')).toBe('1'); // from url1
      expect(p.searchParams.get('b')).toBe('9'); // overridden by url2
      expect(p.searchParams.get('c')).toBe('3'); // from url2
    });
  });

  describe('path, protocol, port, absolute checks', () => {
    test('updatePath replaces pathname but keeps origin and params', () => {
      const url = 'https://example.com/old/path?a=1';
      const out = UrlUtil.updatePath(url, '/new/path');
      const p = new URL(out);
      expect(p.pathname).toBe('/new/path');
      expect(p.origin).toBe('https://example.com');
      expect(p.searchParams.get('a')).toBe('1');
    });

    test('hasQueryParams and hasQueryParam', () => {
      expect(UrlUtil.hasQueryParams('https://example.com/')).toBe(false);
      expect(UrlUtil.hasQueryParams('https://example.com/?a=1')).toBe(true);

      expect(UrlUtil.hasQueryParam('https://example.com/?a=1', 'a')).toBe(true);
      expect(UrlUtil.hasQueryParam('https://example.com/?a=1', 'b')).toBe(false);
    });

    test('getProtocol and getPort', () => {
      expect(UrlUtil.getProtocol('https://example.com')).toBe('https:');
      expect(UrlUtil.getPort('http://example.com:8080/')).toBe('8080');
    });

    test('isAbsoluteUrl returns true for absolute url', () => {
      expect(UrlUtil.isAbsoluteUrl('https://example.com/path')).toBe(true);
    });
  });

  describe('encoding & decoding', () => {
    test('encodeUrlComponent and decodeUrlComponent roundtrip', () => {
      const raw = 'a b &/?';
      const encoded = UrlUtil.encodeUrlComponent(raw);
      expect(encoded).not.toBe(raw);
      const decoded = UrlUtil.decodeUrlComponent(encoded);
      expect(decoded).toBe(raw);
    });
  });

  describe('robustness & error behavior', () => {
    test('parseUrl throws on invalid input', () => {
      expect(() => UrlUtil.parseUrl('not-a-url')).toThrow();
    });

    test('isUrl returns false for relative paths (no protocol)', () => {
      expect(UrlUtil.isUrl('/relative/path?x=1')).toBe(false);
    });
  });
});