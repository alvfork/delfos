import {isFilledString, isEmptyString} from './string';
import {isString, isOptional} from './basics';

const MAX_URL_LENGTH = 2048;
const URL_REGEX = /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;

/**
 * Assert string type, filled and valid URL. The max length of the URL is 2048
 * characters.
 *
 * @function
 * @param {*} value
 * @returns {boolean}
 * @example
 * isUrl('https://www.npmjs.com/package/delfos');  // true
 */

export const isUrl = (value: any): boolean => {
  if (!isFilledString(value) || value.length > MAX_URL_LENGTH) return false;
  return URL_REGEX.test(value);
};

/**
 * Assert string type, empty string or valid URL. The max length of URL is 2048
 * characters.
 *
 * @function
 * @param {*} value
 * @returns {boolean}
 * @example
 * isOptionalUrl('');                                 // true
 * isOptionalUrl(null);                               // true
 * isOptionalUrl(undefined);                          // true
 * isOptionalUrl('https://www.ancient.eu/Athens/');   // true
 */

export const isOptionalUrl = (value: any): boolean => {
  if (isOptional(value) || isEmptyString(value)) return true;
  if (isString(value) && value.length < MAX_URL_LENGTH)
    return URL_REGEX.test(value);

  return false;
};
