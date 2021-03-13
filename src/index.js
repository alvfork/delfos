import {
  isNull,
  isString,
  isNumber,
  isObject,
  isFunction,
  isUndefined,
  isOptional,
} from './basics';

import {
  isEmptyString,
  isNullOrEmptyString,
  isBlankString,
  isFilledString,
  isStringLengthValid,
} from './string';

import {isNotNullObject, isEmptyObject, hasProperty} from './object';

import {isUrl, isOptionalUrl} from './url';

import {isEmail, isOptionalEmail} from './email';

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
