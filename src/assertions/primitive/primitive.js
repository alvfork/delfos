/**
 * Assert null type.
 *
 * @function
 * @param value
 * @returns {boolean}
 */

export const isNull = (value) => value === null;

/**
 * Assert string type.
 *
 * @function
 * @param value
 * @returns {boolean}
 */

export const isString = (value) => typeof value === 'string';

/**
 * Assert number type.
 *
 * @function
 * @param value
 * @returns {boolean}
 */

export const isNumber = (value) => typeof value === 'number';

/**
 * Assert object type.
 *
 * @function
 * @param value
 * @returns {boolean}
 */

export const isObject = (value) => typeof value === 'object';

/**
 * Assert function type.
 *
 * @function
 * @param value
 * @returns {boolean}
 */

export const isFunction = (value) => typeof value === 'function';

/**
 * Assert undefined type.
 *
 * @function
 * @param value
 * @returns {boolean}
 */

export const isUndefined = (value) => typeof value === 'undefined';

/**
 * Assert undefined type or null.
 *
 * @function
 * @param {*} value
 * @returns {boolean}
 */

export const isOptional = (value) => isUndefined(value) || isNull(value);
