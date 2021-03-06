import {expect} from 'chai';

import {isEmail, isOptionalEmail} from './email';

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
  describe('- Fuction: isOptionalEmail(value)', () => {
    it('When value is an email', () =>
      expect(isOptionalEmail('fool@gmail.com')).to.be.true);
    it('When value is an email with .', () =>
      expect(isOptionalEmail('fool.fool@gmail.com')).to.be.true);
    it('When value is an email with -', () =>
      expect(isOptionalEmail('fool-fool@gmail.com')).to.be.true);
    it('When value is empty', () => expect(isOptionalEmail('')).to.be.true);
    it('When value is null', () => expect(isOptionalEmail(null)).to.be.true);
    it('When value is undefined', () =>
      expect(isOptionalEmail(undefined)).to.be.true);
    it('When value is an email with . at start', () =>
      expect(isOptionalEmail('.fool@gmail.com')).to.be.false);
    it('When value is not an email', () =>
      expect(isOptionalEmail('fool')).to.be.false);
    it('When value is zero', () => expect(isOptionalEmail(0)).to.be.false);
    it('When value is blank', () => expect(isOptionalEmail(' ')).to.be.false);
  });
});
