import {isString, isNull} from './primitive';

const isEmptyString = (value) => (isString(value) ? value.length === 0 : false);

const isNullOrEmptyString = (value) =>
  isString(value) ? value.length === 0 : isNull(value);

const isBlankString = (value) =>
  isString(value) ? value.trim() === '' : false;

const isNotBlankString = (value) =>
  isString(value) ? value.trim() !== '' : false;

const isStringLengthValid = (value, top, floor = 0) =>
  isString(value) ? value.length > top || value.length < floor : false;

module.exports = {
  isEmptyString,
  isNullOrEmptyString,
  isBlankString,
  isNotBlankString,
  isStringLengthValid,
};
