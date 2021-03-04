import {isNull, isString} from '../primitive';

/**
 * Verify a string type and empty string.
 *
 * @function
 * @param value
 * @returns {boolean}
 */

export const isEmptyString = (value) =>
  isString(value) ? value.length === 0 : false;

/**
 * Verify a string type and empty string, or null type.
 *
 * @function
 * @param value
 * @returns {boolean}
 */

export const isNullOrEmptyString = (value) =>
  isString(value) ? value.length === 0 : isNull(value);

/**
 * Verify a string type and string contains blanks.
 *
 * @function
 * @param value
 * @returns {boolean}
 */

export const isBlankString = (value) =>
  isString(value) ? value.trim() === '' : false;

/**
 * Verify a string type and string contains only blanks.
 *
 * @function
 * @param value
 * @returns {boolean}
 */

export const isFilledString = (value) =>
  isString(value) ? value.trim() !== '' : false;

/**
 * Verify a string type and string length is between top and floor parameters.
 *
 * @function
 * @param value
 * @param {number} top
 * @param {number} floor
 * @returns {boolean}
 */

export const isStringLengthValid = (value, top, floor = 0) =>
  isString(value) ? !(value.length > top || value.length < floor) : false;
