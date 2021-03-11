import {isObject} from '../primitive/primitive';

/**
 * Assert object type and non-null value.
 *
 * @function
 * @param {*} object
 * @returns {boolean}
 * @example
 * isNotNullObject({});                                    // true
 * isNotNullObject({name: 'Delfos', version: 'v3.6.9'});   // true
 * isNotNullObject(null);                                  // false
 * isNotNullObject(undefined);                             // false
 */

export const isNotNullObject = (object) => isObject(object) && object !== null;

/**
 * Assert object type, non-null value, and presence of at least one property.
 *
 * @function
 * @param {*} object
 * @returns {boolean}
 * @example
 * isEmptyObject({});                                      // true
 * isEmptyObject(null);                                    // false
 * isEmptyObject(undefined);                               // false
 * isEmptyObject({name: 'Delfos', version: 'v3.6.9'});     // false
 */

export const isEmptyObject = (object) =>
  isNotNullObject(object)
    ? object.constructor === Object && Object.keys(object).length === 0
    : false;
