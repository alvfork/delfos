import {isObject} from './basics';

/**
 * Assert object type and non-null value.
 *
 * @function
 * @param {*} object
 * @returns {boolean}
 * @example
 * isNotNullObject({});                                  // true
 * isNotNullObject({name: 'delfos', version: 'v3.6.9'}); // true
 * isNotNullObject(null);                                // false
 * isNotNullObject(undefined);                           // false
 */

export const isNotNullObject = (object) => isObject(object) && object !== null;

/**
 * Assert object type, non-null value, and presence of at least one property.
 *
 * @function
 * @param {*} object
 * @returns {boolean}
 * @example
 * isEmptyObject({});                                  // true
 * isEmptyObject(null);                                // false
 * isEmptyObject(undefined);                           // false
 * isEmptyObject({name: 'delfos', version: 'v3.6.9'}); // false
 */

export const isEmptyObject = (object) =>
  isNotNullObject(object)
    ? object.constructor === Object && Object.keys(object).length === 0
    : false;

/**
 * Assert object type, non-null value, and presence of a specific property,
 * this property must be at the first level of the indicated object.
 *
 * @function
 * @param {*} object
 * @param {string} property
 * @returns {boolean}
 * @example
 * hasProperty(name: 'Delfos', version: 'v3.6.9'}, 'name');             // true
 * hasProperty({}, 'name');                                             // false
 * hasProperty(null, 'name');                                           // false
 * hasProperty(undefined, 'name');                                      // false
 * hasProperty({package: {name: 'delfos', version: 'v3.6.9'}}, 'name'); // false
 */

export const hasProperty = (object, property) =>
  isNotNullObject(object)
    ? Object.prototype.hasOwnProperty.call(object, property)
    : false;
