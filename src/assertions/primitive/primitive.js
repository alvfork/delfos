/**
 * Verify a null type.
 *
 * @function
 * @param value
 * @returns {boolean}
 */

export const isNull = (value) => value === null;

/**
 * Verify a string type.
 *
 * @function
 * @param value
 * @returns {boolean}
 */

export const isString = (value) => typeof value === 'string';

/**
 * Verify a number type.
 *
 * @function
 * @param value
 * @returns {boolean}
 */

export const isNumber = (value) => typeof value === 'number';

/**
 * Verify a object type.
 *
 * @function
 * @param value
 * @returns {boolean}
 */

export const isObject = (value) => typeof value === 'object';

/**
 * Verify a function type.
 *
 * @function
 * @param value
 * @returns {boolean}
 */

export const isFunction = (value) => typeof value === 'function';

/**
 * Verify a undefined type.
 *
 * @function
 * @param value
 * @returns {boolean}
 */

export const isUndefined = (value) => typeof value === 'undefined';
