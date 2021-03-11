import {expect} from 'chai';

import {
  isEmptyString,
  isNullOrEmptyString,
  isBlankString,
  isFilledString,
  isStringLengthValid,
} from './string';

describe('========= String assertions ========= ', () => {
  describe('- Fuction: isEmptyString(value)', () => {
    it('When value is an empty string', () =>
      expect(isEmptyString('')).to.be.true);
    it('When value is undefined', () =>
      expect(isEmptyString(undefined)).to.be.false);
    it('When value is null', () => expect(isEmptyString(null)).to.be.false);
    it('When value is a string with space blanks', () =>
      expect(isEmptyString(' ')).to.be.false);
  });

  describe('- Fuction: isNullOrEmptyString(value)', () => {
    it('When value is an empty string', () =>
      expect(isNullOrEmptyString('')).to.be.true);
    it('When value is null', () =>
      expect(isNullOrEmptyString(null)).to.be.true);
    it('When value is a string with space blanks', () =>
      expect(isNullOrEmptyString(' ')).to.be.false);
    it('When value is undefined', () =>
      expect(isNullOrEmptyString(undefined)).to.be.false);
  });

  describe('- Fuction: isBlankString(value)', () => {
    it('When value is an empty string', () =>
      expect(isBlankString('')).to.be.true);
    it('When value is a string with space blanks', () =>
      expect(isBlankString(' ')).to.be.true);
    it('When value is undefined', () =>
      expect(isBlankString(undefined)).to.be.false);
    it('When value is null', () => expect(isBlankString(null)).to.be.false);
    it('When value is a not blank string', () =>
      expect(isBlankString('star')).to.be.false);
  });

  describe('- Fuction: isFilledString(value)', () => {
    it('When value is a not blank string', () =>
      expect(isFilledString('star')).to.be.true);
    it('When value is an empty string', () =>
      expect(isFilledString('')).to.be.false);
    it('When value is a string with space blanks', () =>
      expect(isFilledString(' ')).to.be.false);
    it('When value is a number', () => expect(isFilledString(369)).to.be.false);
    it('When value is undefined', () =>
      expect(isFilledString(undefined)).to.be.false);
    it('When value is null', () => expect(isBlankString(null)).to.be.false);
  });

  describe('- Fuction: isStringLengthValid(value, top, floor = 0)', () => {
    it('When value is star and top is 4', () =>
      expect(isStringLengthValid('star', 4)).to.be.true);
    it('When value is star and top is 4 and floor is 2', () =>
      expect(isStringLengthValid('star', 4, 2)).to.be.true);
    it('When value is star and top is 3', () =>
      expect(isStringLengthValid('star', 3)).to.be.false);
    it('When value is star and top is 16 and floor is 8', () =>
      expect(isStringLengthValid('star', 16, 8)).to.be.false);
    it('When value is star and top is 3 and floor is 2', () =>
      expect(isStringLengthValid('star', 3, 2)).to.be.false);
    it('When value is null and top is 3 and floor is 2', () =>
      expect(isStringLengthValid(null, 3, 2)).to.be.false);
  });
});
