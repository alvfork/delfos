import {
  isNull,
  isString,
  isNumber,
  isObject,
  isFunction,
  isUndefined,
} from './assertions/primitive/primitive';

import {
  isEmptyString,
  isNullOrEmptyString,
  isBlankString,
  isFilledString,
  isStringLengthValid,
} from './assertions/strings/strings';

import {isUrl, isUrlOrEmpty} from './assertions/internet/url/url';

import {isEmail, isEmailOrEmpty} from './assertions/internet/email/email';

module.exports = {
  isNull,
  isString,
  isNumber,
  isObject,
  isFunction,
  isUndefined,

  isEmptyString,
  isNullOrEmptyString,
  isBlankString,
  isFilledString,
  isStringLengthValid,

  isUrl,
  isUrlOrEmpty,

  isEmail,
  isEmailOrEmpty,
};
