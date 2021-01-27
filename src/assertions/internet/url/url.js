import {isFilledString, isEmptyString} from '../../strings';
import {isString} from '../../primitive';

const MAX_URL_LENGTH = 2048;
const URL_REGEX = /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;

export const isUrl = (value) => {
  if (!isFilledString(value) || value.length > MAX_URL_LENGTH) return false;
  return URL_REGEX.test(value);
};

export const isUrlOrEmpty = (value) => {
  if (isEmptyString(value)) return true;
  if (isString(value) && value.length < MAX_URL_LENGTH)
    return URL_REGEX.test(value);

  return false;
};
