import {expect} from 'chai';
import {
  isNull,
  isString,
  isNumber,
  isObject,
  isFunction,
  isUndefined,
  isOptional,
} from './primitive';

describe('========= Primitive assertions ========= ', () => {
  describe('- Fuction: isNull(value)', () => {
    it('When value is null', () => expect(isNull(null)).to.be.true);
    it('When value is undefined', () => expect(isNull(undefined)).to.be.false);
    it('When value is a string empty', () => expect(isNull('')).to.be.false);
    it('When value is false', () => expect(isNull(false)).to.be.false);
    it('When value is an empty object', () => expect(isNull({})).to.be.false);
    it('When value is a number', () => expect(isNull(1234)).to.be.false);
    it('When value is a function', () => expect(isNull(() => {})).to.be.false);
  });
  describe('- Fuction: isString(value)', () => {
    it('When value is string', () => expect(isString('star')).to.be.true);
    it('When value is an empty string', () => expect(isString('')).to.be.true);
    it('When value is null', () => expect(isString(null)).to.be.false);
    it('When value is undefined', () =>
      expect(isString(undefined)).to.be.false);
    it('When value is false', () => expect(isString(false)).to.be.false);
    it('When value is an empty object', () => expect(isString({})).to.be.false);
    it('When value is a number', () => expect(isString(1234)).to.be.false);
    it('When value is a function', () =>
      expect(isString(() => {})).to.be.false);
  });

  describe('- Fuction: isNumber(value)', () => {
    it('When value is number', () => expect(isNumber(1234)).to.be.true);
    it('When value is a negative number', () =>
      expect(isNumber(-1)).to.be.true);
    it('When value is null', () => expect(isNumber(null)).to.be.false);
    it('When value is undefined', () =>
      expect(isNumber(undefined)).to.be.false);
    it('When value is false', () => expect(isNumber(false)).to.be.false);
    it('When value is an empty object', () => expect(isNumber({})).to.be.false);
    it('When value is a string containing a number', () =>
      expect(isNumber('1234')).to.be.false);
    it('When value is a function', () =>
      expect(isNumber(() => {})).to.be.false);
  });

  describe('- Fuction: isObject(value)', () => {
    it('When value is an object', () =>
      expect(isObject({star: 'star'})).to.be.true);
    it('When value is an empty object', () => expect(isObject({})).to.be.true);
    it('When value is null', () => expect(isObject(null)).to.be.true);
    it('When value is undefined', () =>
      expect(isObject(undefined)).to.be.false);
    it('When value is false', () => expect(isObject(false)).to.be.false);
    it('When value is a number', () => expect(isObject(1234)).to.be.false);
    it('When value is a function', () =>
      expect(isObject(() => {})).to.be.false);
  });

  describe('- Fuction: isFunction(value)', () => {
    it('When value is a function', () =>
      expect(isFunction(() => {})).to.be.true);
    it('When value is an empty object', () =>
      expect(isFunction({})).to.be.false);
    it('When value is null', () => expect(isFunction(null)).to.be.false);
    it('When value is undefined', () =>
      expect(isFunction(undefined)).to.be.false);
    it('When value is false', () => expect(isFunction(false)).to.be.false);
    it('When value is a number', () => expect(isFunction(1234)).to.be.false);
  });

  describe('- Fuction: isUndefined(value)', () => {
    it('When value is undefined', () =>
      expect(isUndefined(undefined)).to.be.true);
    it('When value is a function', () =>
      expect(isUndefined(() => {})).to.be.false);
    it('When value is an empty object', () =>
      expect(isUndefined({})).to.be.false);
    it('When value is null', () => expect(isUndefined(null)).to.be.false);
    it('When value is false', () => expect(isUndefined(false)).to.be.false);
    it('When value is a number', () => expect(isUndefined(0)).to.be.false);
  });

  describe('- Fuction: isOptional(value)', () => {
    it('When value is undefined', () =>
      expect(isOptional(undefined)).to.be.true);
    it('When value is null', () => expect(isOptional(null)).to.be.true);
    it('When value is a function', () =>
      expect(isOptional(() => {})).to.be.false);
    it('When value is an empty object', () =>
      expect(isOptional({})).to.be.false);
    it('When value is false', () => expect(isOptional(false)).to.be.false);
    it('When value is a number', () => expect(isOptional(0)).to.be.false);
  });
});
