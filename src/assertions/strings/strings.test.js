const {expect} = require('chai');
const {
  isEmptyString,
  isNullOrEmptyString,
  isBlankString,
  isNotBlankString,
  isStringLengthValid,
} = require('../../index');

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
      expect(isBlankString('fool')).to.be.false);
  });
  describe('- Fuction: isNotBlankString(value)', () => {
    it('When value is a not blank string', () =>
      expect(isNotBlankString('fool')).to.be.true);
    it('When value is an empty string', () =>
      expect(isNotBlankString('')).to.be.false);
    it('When value is a string with space blanks', () =>
      expect(isNotBlankString(' ')).to.be.false);
    it('When value is undefined', () =>
      expect(isNotBlankString(undefined)).to.be.false);
    it('When value is null', () => expect(isBlankString(null)).to.be.false);
  });
  describe('- Fuction: isStringLengthValid(value, top, floor = 0)', () => {
    it('When value is fool and top is 4', () =>
      expect(isStringLengthValid('fool', 4)).to.be.true);
    it('When value is fool and top is 4 and floor is 2', () =>
      expect(isStringLengthValid('fool', 4)).to.be.true);
    it('When value is fool and top is 3', () =>
      expect(isStringLengthValid('fool', 3)).to.be.false);
    it('When value is fool and top is 16 and floor is 8', () =>
      expect(isStringLengthValid('fool', 16, 8)).to.be.false);
  });
});
