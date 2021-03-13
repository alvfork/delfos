import {expect} from 'chai';

import {isNotNullObject, isEmptyObject, hasProperty} from '../src/object';

const filledObject = {name: 'Delfos', version: 'v3.6.9'};
const deepFilledObject = {package: {name: 'Delfos', version: 'v3.6.9'}};

describe('========= Object assertions ========= ', () => {
  describe('- Fuction: isNotNullObject(object)', () => {
    it('When value is an empty object', () =>
      expect(isNotNullObject({})).to.be.true);
    it('When value is an filled object', () =>
      expect(isNotNullObject(filledObject)).to.be.true);
    it('When value is an empty string', () =>
      expect(isNotNullObject('')).to.be.false);
    it('When value is undefined', () =>
      expect(isNotNullObject(undefined)).to.be.false);
    it('When value is null', () => expect(isNotNullObject(null)).to.be.false);
    it('When value is zero', () => expect(isNotNullObject(0)).to.be.false);
  });

  describe('- Fuction: isEmptyObject(object)', () => {
    it('When value is an empty object', () =>
      expect(isEmptyObject({})).to.be.true);
    it('When value is an empty string', () =>
      expect(isEmptyObject('')).to.be.false);
    it('When value is undefined', () =>
      expect(isEmptyObject(undefined)).to.be.false);
    it('When value is null', () => expect(isEmptyObject(null)).to.be.false);
    it('When value is zero', () => expect(isEmptyObject(0)).to.be.false);
    it('When value is an filled object', () =>
      expect(isEmptyObject(filledObject)).to.be.false);
  });

  describe('- Fuction: hasProperty(object, property)', () => {
    it('When value is an filled object', () =>
      expect(hasProperty(filledObject, 'name')).to.be.true);
    it('When value is an filled deeper object', () =>
      expect(hasProperty(deepFilledObject, 'name')).to.be.false);
    it('When value is an empty object', () =>
      expect(hasProperty({}, 'name')).to.be.false);
    it('When value is an empty string', () =>
      expect(hasProperty('', 'name')).to.be.false);
    it('When value is undefined', () =>
      expect(hasProperty(undefined, 'name')).to.be.false);
    it('When value is null', () =>
      expect(hasProperty(null, 'name')).to.be.false);
    it('When value is zero', () => expect(hasProperty(0, 'name')).to.be.false);
  });
});
