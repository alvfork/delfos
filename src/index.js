import {
  isNull,
  isString,
  isNumber,
  isObject,
  isFunction,
  isUndefined,
  isOptional,
} from './assertions/basics/basics';

import {
  isEmptyString,
  isNullOrEmptyString,
  isBlankString,
  isFilledString,
  isStringLengthValid,
} from './assertions/string/string';

import {
  isNotNullObject,
  isEmptyObject,
  hasProperty,
} from './assertions/object/object';

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

  isNotNullObject,
  isEmptyObject,
  hasProperty,

  isUrl,
  isOptionalUrl,

  isEmail,
  isOptionalEmail,
};
