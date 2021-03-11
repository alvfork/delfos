import {isObject} from '../primitive/primitive';

/**
 * Assert object type and non-null value.
 *
 * @function
 * @param {*} object
 * @returns {boolean}
 * @example
 * isEmptyObject({});  // true
 */

export const isNotNullObject = (object) => isObject(object) && object !== null;

/**
 * Assert object type, non-null value and presence of at least one property.
 *
 * @function
 * @param {*} object
 * @returns {boolean}
 * @example
 * isEmptyObject({});    // true
 * isEmptyObject(null);  // false
 * isEmptyObject({name: 'Delfos', version: 'v3.6.9'});  // false
 */

export const isEmptyObject = (object) =>
  isObject(object) && object !== null
    ? object.constructor === Object && Object.keys(object).length === 0
    : false;
