import {isFilledString, isEmptyString} from '../../string/string';
import {isString, isOptional} from '../../basics/basics';

const MAX_EMAIL_LENGTH = 128;
const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/**
 * Assert string type and valid email. The max length of the email is 128
 * characters
 *
 * @function
 * @param {*} value
 * @returns {boolean}
 * @example
 * isEmail('apolo@delfos.com');  // true
 */

export const isEmail = (value) => {
  if (!isFilledString(value) || value.length > MAX_EMAIL_LENGTH) return false;
  return EMAIL_REGEX.test(value);
};

/**
 * Assert undefined type, empty string, null or valid email.
 * The max length of email is 128 characters
 *
 * @function
 * @param {*} value
 * @returns {boolean}
 * @example
 * isOptionalEmail('');                       // true
 * isOptionalEmail(null);                     // true
 * isOptionalEmail(undefined);                // true
 * isOptionalEmail('laeonidas@delfos.com');   // true
 */

export const isOptionalEmail = (value) => {
  if (isOptional(value) || isEmptyString(value)) return true;
  if (isString(value) && value.length < MAX_EMAIL_LENGTH)
    return EMAIL_REGEX.test(value);

  return false;
};
