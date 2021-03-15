/**
 * Assert null value.
 *
 * @function
 * @param {*} value
 * @returns {boolean}
 * @example
 * isString('delfos');  // true
 */

export const isNull = (value: any): boolean => value === null;

/**
 * Assert string type.
 *
 * @function
 * @param {*} value
 * @returns {boolean}
 * @example
 * isString('delfos');  // true
 */

export const isString = (value: any): boolean => typeof value === 'string';

/**
 * Assert number type.
 *
 * @function
 * @param {*} value
 * @returns {boolean}
 * @example
 * isNumber(369);  // true
 */

export const isNumber = (value: any): boolean => typeof value === 'number';

/**
 * Assert object type.
 *
 * @function
 * @param {*} value
 * @returns {boolean}
 * @example
 * isObject({name: 'Delfos', version: 'v3.6.9'});  // true
 */

export const isObject = (value: any): boolean => typeof value === 'object';

/**
 * Assert function type.
 *
 * @function
 * @param {*} value
 * @returns {boolean}
 * @example
 * isFunction(() => {});  // true
 */

export const isFunction = (value: any): boolean => typeof value === 'function';

/**
 * Assert undefined type.
 *
 * @function
 * @param {*} value
 * @returns {boolean}
 * @example
 * isUndefined(undefined);  // true
 */

export const isUndefined = (value: any): boolean =>
  typeof value === 'undefined';

/**
 * Assert undefined type or value null.
 *
 * @function
 * @param {*} value
 * @returns {boolean}
 * @example
 * isOptional(null);       // true
 * isOptional(undefined);  // true
 */

export const isOptional = (value: any): boolean =>
  isUndefined(value) || isNull(value);
