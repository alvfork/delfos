import {expect} from 'chai';

import {isNotNullObject, isEmptyObject} from './object';

describe('========= Object assertions ========= ', () => {
  describe('- Fuction: isNotNullObject(value)', () => {
    it('When value is an empty object', () =>
      expect(isNotNullObject({})).to.be.true);
    it('When value is an empty string', () =>
      expect(isNotNullObject('')).to.be.false);
    it('When value is undefined', () =>
      expect(isNotNullObject(undefined)).to.be.false);
    it('When value is null', () => expect(isNotNullObject(null)).to.be.false);
    it('When value is zero', () => expect(isNotNullObject(0)).to.be.false);
  });

  describe('- Fuction: isEmptyObject(value)', () => {
    it('When value is an empty object', () =>
      expect(isEmptyObject({})).to.be.true);
    it('When value is an empty string', () =>
      expect(isEmptyObject('')).to.be.false);
    it('When value is undefined', () =>
      expect(isEmptyObject(undefined)).to.be.false);
    it('When value is null', () => expect(isEmptyObject(null)).to.be.false);
    it('When value is zero', () => expect(isNotNullObject(0)).to.be.false);
  });
});
