import {isFilledString, isEmptyString} from '../../strings';
import {isString} from '../../primitive';

const MAX_URL_LENGTH = 2048;
const URL_REGEX = /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;

/**
 * Assert string type, filled and valid URL. The max length of URL is 2048 characters.
 *
 * @function
 * @param value
 * @returns {boolean}
 */

export const isUrl = (value) => {
  if (!isFilledString(value) || value.length > MAX_URL_LENGTH) return false;
  return URL_REGEX.test(value);
};

/**
 * Assert string type, empty string or valid URL. The max length of URL is 2048 characters.
 *
 * @function
 * @param value
 * @returns {boolean}
 */

export const isUrlOrEmpty = (value) => {
  if (isEmptyString(value)) return true;
  if (isString(value) && value.length < MAX_URL_LENGTH)
    return URL_REGEX.test(value);

  return false;
};
