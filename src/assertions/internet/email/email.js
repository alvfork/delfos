import {isFilledString, isEmptyString} from '../../strings';
import {isString} from '../../primitive';

const MAX_EMAIL_LENGTH = 128;
const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const isEmail = (value) => {
  if (!isFilledString(value) || value.length > MAX_EMAIL_LENGTH) return false;
  return EMAIL_REGEX.test(value);
};

export const isEmailOrEmpty = (value) => {
  if (isEmptyString(value)) return true;
  if (isString(value) && value.length < MAX_EMAIL_LENGTH)
    return EMAIL_REGEX.test(value);

  return false;
};
