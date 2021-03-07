import {
  isNull,
  isString,
  isNumber,
  isObject,
  isFunction,
  isUndefined,
  isOptional,
} from './assertions/primitive/primitive';

import {
  isEmptyString,
  isNullOrEmptyString,
  isBlankString,
  isFilledString,
  isStringLengthValid,
} from './assertions/strings/strings';

import {isUrl, isOptionalUrl} from './assertions/internet/url/url';

import {isEmail, isOptionalEmail} from './assertions/internet/email/email';

module.exports = {
  isNull,
  isString,
  isNumber,
  isObject,
  isFunction,
  isUndefined,
  isOptional,

  isEmptyString,
  isNullOrEmptyString,
  isBlankString,
  isFilledString,
  isStringLengthValid,

  isUrl,
  isOptionalUrl,

  isEmail,
  isOptionalEmail,
};
