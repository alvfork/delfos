import {isNull, isString} from '../primitive';

export const isEmptyString = (value) =>
  isString(value) ? value.length === 0 : false;

export const isNullOrEmptyString = (value) =>
  isString(value) ? value.length === 0 : isNull(value);

export const isBlankString = (value) =>
  isString(value) ? value.trim() === '' : false;

export const isFilledString = (value) =>
  isString(value) ? value.trim() !== '' : false;

export const isStringLengthValid = (value, top, floor = 0) =>
  isString(value) ? !(value.length > top || value.length < floor) : false;
