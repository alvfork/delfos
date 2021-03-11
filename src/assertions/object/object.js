import {isObject} from '../primitive/primitive';

/**
 * Assert null type.
 *
 * @function
 * @param {*} object
 * @returns {boolean}
 * @example
 * isEmptyObject({});  // true
 */

export const isEmptyObject = (object) =>
  isObject(object) && object !== null
    ? object.constructor === Object && Object.keys(object).length === 0
    : false;
