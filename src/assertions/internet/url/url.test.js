import {expect} from 'chai';

import {isUrl, isOptionalUrl} from './url';

describe('========= Url assertions ========= ', () => {
  describe('- Fuction: isUrl(value)', () => {
    it('When value is an url', () => expect(isUrl('google.com')).to.be.true);
    it('When value is an url with www', () =>
      expect(isUrl('www.google.com')).to.be.true);
    it('When value is an url with http', () =>
      expect(isUrl('http://www.google.com')).to.be.true);
    it('When value is an url with https', () =>
      expect(isUrl('https://www.google.com')).to.be.true);
    it('When value is not an url', () => expect(isUrl('fool')).to.be.false);
    it('When value is empty', () => expect(isUrl('')).to.be.false);
    it('When value is blank', () => expect(isUrl(' ')).to.be.false);
    it('When value is null', () => expect(isUrl(null)).to.be.false);
    it('When value is undefined', () => expect(isUrl(undefined)).to.be.false);
  });

  describe('- Fuction: isUrlOrEmpty(value)', () => {
    it('When value is an url', () =>
      expect(isOptionalUrl('google.com')).to.be.true);
    it('When value is an url with www', () =>
      expect(isOptionalUrl('www.google.com')).to.be.true);
    it('When value is an url with http', () =>
      expect(isOptionalUrl('http://www.google.com')).to.be.true);
    it('When value is an url with https', () =>
      expect(isOptionalUrl('https://www.google.com')).to.be.true);
    it('When value is null', () => expect(isOptionalUrl(null)).to.be.true);
    it('When value is undefined', () =>
      expect(isOptionalUrl(undefined)).to.be.true);
    it('When value is empty', () => expect(isOptionalUrl('')).to.be.true);
    it('When value is not an url', () =>
      expect(isOptionalUrl('fool')).to.be.false);
    it('When value is zero', () => expect(isOptionalUrl(0)).to.be.false);
    it('When value is blank', () => expect(isOptionalUrl(' ')).to.be.false);
  });
});
