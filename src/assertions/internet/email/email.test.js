import {expect} from 'chai';

import {isEmail, isEmailOrEmpty} from './email';

describe('========= Email assertions ========= ', () => {
  describe('- Fuction: isEmail(value)', () => {
    it('When value is an email', () =>
      expect(isEmail('fool@gmail.com')).to.be.true);
    it('When value is an email with .', () =>
      expect(isEmail('fool.fool@gmail.com')).to.be.true);
    it('When value is an email with -', () =>
      expect(isEmail('fool-fool@gmail.com')).to.be.true);
    it('When value is an email with . at start', () =>
      expect(isEmail('.fool@gmail.com')).to.be.false);
    it('When value is not an email', () => expect(isEmail('fool')).to.be.false);
    it('When value is empty', () => expect(isEmail('')).to.be.false);
    it('When value is blank', () => expect(isEmail(' ')).to.be.false);
    it('When value is null', () => expect(isEmail(null)).to.be.false);
    it('When value is undefined', () => expect(isEmail(undefined)).to.be.false);
  });
  describe('- Fuction: isEmailOrEmpty(value)', () => {
    it('When value is an email', () =>
      expect(isEmailOrEmpty('fool@gmail.com')).to.be.true);
    it('When value is an email with .', () =>
      expect(isEmailOrEmpty('fool.fool@gmail.com')).to.be.true);
    it('When value is an email with -', () =>
      expect(isEmailOrEmpty('fool-fool@gmail.com')).to.be.true);
    it('When value is empty', () => expect(isEmailOrEmpty('')).to.be.true);
    it('When value is an email with . at start', () =>
      expect(isEmailOrEmpty('.fool@gmail.com')).to.be.false);
    it('When value is not an email', () =>
      expect(isEmailOrEmpty('fool')).to.be.false);

    it('When value is blank', () => expect(isEmailOrEmpty(' ')).to.be.false);
    it('When value is null', () => expect(isEmailOrEmpty(null)).to.be.false);
    it('When value is undefined', () =>
      expect(isEmailOrEmpty(undefined)).to.be.false);
  });
});
