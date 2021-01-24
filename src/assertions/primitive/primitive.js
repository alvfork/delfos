module.exports = {
  isNull: (value) => value === null,
  isString: (value) => typeof value === 'string',
  isNumber: (value) => typeof value === 'number',
  isObject: (value) => typeof value === 'object',
  isFunction: (value) => typeof value === 'function',
  isUndefined: (value) => typeof value === 'undefined',
};
