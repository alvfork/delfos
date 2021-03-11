import {expect} from 'chai';

import {isEmptyObject} from './object';

describe('========= Object assertions ========= ', () => {
  describe('- Fuction: isEmptyObject(value)', () => {
    it('When value is an empty object', () =>
      expect(isEmptyObject({})).to.be.true);
    it('When value is an empty string', () =>
      expect(isEmptyObject('')).to.be.false);
    it('When value is undefined', () =>
      expect(isEmptyObject(undefined)).to.be.false);
    it('When value is null', () => expect(isEmptyObject(null)).to.be.false);
    it('When value is a string with space blanks', () =>
      expect(isEmptyObject(' ')).to.be.false);
  });
});
