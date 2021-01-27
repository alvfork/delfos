# Delfos

Tiny set of assertions. Common validations

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![MIT License](https://img.shields.io/npm/l/delfos)](https://opensource.org/licenses/MIT)
[![travis build](https://img.shields.io/travis/com/alvfork/delfos)](https://travis-ci.com/alvfork/delfos)
[![codecov coverage](https://img.shields.io/codecov/c/github/alvfork/delfos)](https://codecov.io/github/alvfork/delfos)
[![version](https://img.shields.io/npm/v/delfos)](https://www.npmjs.com/package/delfos)
[![downloads](https://img.shields.io/npm/dm/delfos)](https://npm-stat.com/charts.html?package=delfos)


# Install
```
$ npm install delfos --save
```

# Why?
Our intention is to offer a tiny solution that provide concrete and essential validations for projects that do not require out-of-the-ordinary validations. Currently there are excellent libraries that offer large sets of functions to build validations, however the focus here is to offer the essential ones in order to maintain a compact library.

# Usage
```js
import {isFilledString, isBlankString} from 'delfos';

isFilledString('foo')  // true
isFilledString(null)   // false
isFilledString('')     // false
isFilledString('  ')   // false

isBlankString('')      // true
isBlankString(' ')     // true
isBlankString('foo')   // false
isBlankString(null)    // false
```
>Please note that `!isBlankString` is not equivalent to `isFilledString`, e.g.
>```js
>!isBlankString(369)     // true
>isFilledString(369)     // false
>```
>If you need to validate the condition that the value is a string and that it is not blank, please use `isFilledString`
# Assertions

>## String
>```js
>isEmptyString(value)
>```
>```js
>isNullOrEmptyString(value)
>```
>```js
>isBlankString(value)
>```
>```js
>isFilledString(value)
>```
>```js
>isStringLengthValid(value, top, floor = 0)
>```

>## Internet
>```js
>isUrl(value)
>```
>```js
>isUrlOrEmpty(value)
>```
>```js
>isEmail(value)
>```
>```js
>isEmailOrEmpty(value)
>```

>## Primitive
>```js
>isNull(value)
>```
>```js
>isString(value)
>```
>```js
>isNumber(value)
>```
>```js
>isObject(value)
>```
>```js
>isFunction(value)
>```
>```js
>isUndefined(value)
>```

# Contribute
If you would like to collaborate in any way with this project or would like to provide a suggestion/opinion, please do not doubt to do so, it will be appreciated.
