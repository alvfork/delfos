import {expect} from 'chai';

import {isUrl, isUrlOrEmpty} from './url';

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
      expect(isUrlOrEmpty('google.com')).to.be.true);
    it('When value is an url with www', () =>
      expect(isUrlOrEmpty('www.google.com')).to.be.true);
    it('When value is an url with http', () =>
      expect(isUrlOrEmpty('http://www.google.com')).to.be.true);
    it('When value is an url with https', () =>
      expect(isUrlOrEmpty('https://www.google.com')).to.be.true);
    it('When value is empty', () => expect(isUrlOrEmpty('')).to.be.true);
    it('When value is not an url', () =>
      expect(isUrlOrEmpty('fool')).to.be.false);
    it('When value is blank', () => expect(isUrlOrEmpty(' ')).to.be.false);
    it('When value is null', () => expect(isUrlOrEmpty(null)).to.be.false);
    it('When value is undefined', () =>
      expect(isUrlOrEmpty(undefined)).to.be.false);
  });
});
