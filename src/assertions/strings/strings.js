import {isNull, isString} from '../primitive/primitive';

/**
 * Assert string type and empty string.
 *
 * @function
 * @param {*} value
 * @returns {boolean}
 * @example
 * isEmptyString('');         // true
 * isEmptyString(' ');        // false
 * isEmptyString(null);       // false
 * isEmptyString(undefined);  // false
 */

export const isEmptyString = (value) =>
  isString(value) ? value.length === 0 : false;

/**
 * Assert string type and empty string, or null type.
 *
 * @function
 * @param {*} value
 * @returns {boolean}
 * @example
 * isNullOrEmptyString('');         // true
 * isNullOrEmptyString(undefined);  // true
 * isNullOrEmptyString(' ');        // false
 * isNullOrEmptyString(null);       // false
 */

export const isNullOrEmptyString = (value) =>
  isString(value) ? value.length === 0 : isNull(value);

/**
 * Assert string type and string contains blanks.
 *
 * @function
 * @param {*} value
 * @returns {boolean}
 * @example
 * isBlankString('');         // true
 * isBlankString(' ');        // true
 * isBlankString(undefined);  // false
 * isBlankString(null);       // false
 */

export const isBlankString = (value) =>
  isString(value) ? value.trim() === '' : false;

/**
 * Assert string type and string contains only blanks.
 *
 * @function
 * @param {*} value
 * @returns {boolean}
 * @example
 * isFilledString('Delfos');    // true
 * isFilledString('');          // false
 * isFilledString(' ');         // false
 * isFilledString(369);         // false
 * isFilledString(null);        // false
 * isFilledString(undefined);   // false
 */

export const isFilledString = (value) =>
  isString(value) ? value.trim() !== '' : false;

/**
 * Assert string type and string length is between top and floor parameters.
 *
 * @function
 * @param {*} value
 * @param {number} top
 * @param {number} floor
 * @returns {boolean}
 * @example
 * isStringLengthValid('Delfos', 6);      // true
 * isStringLengthValid('Delfos', 6, 2);   // true
 * isStringLengthValid('Delfos', 3, 2);   // false
 * isStringLengthValid('Delfos', 14, 8);  // false
 */

export const isStringLengthValid = (value, top, floor = 0) =>
  isString(value) ? !(value.length > top || value.length < floor) : false;
