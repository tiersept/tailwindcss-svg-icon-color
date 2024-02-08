/**
 * * This util flattens a nested object to a single level key-value pair.
 * * used to flatten the color theme values for custom icon tailwind plugin.
 * * Example...
 *
 * {
 *  slate: {
 *    '50': '#f8fafc',
 *   },
 * }
 *
 * * To
 *
 * {
 *  'slate-50': '#f8fafc
 * }
 *
 */

module.exports = function getFlattenedObject(object, parentKey = "") {
  const result = {};

  Object.keys(object).forEach((key) => {
    const newKey = parentKey ? `${parentKey}-${key}` : key;

    if (typeof object[key] === "object" && !Array.isArray(object[key])) {
      const nestedObject = getFlattenedObject(object[key], newKey);
      Object.assign(result, nestedObject);
    } else {
      result[newKey] = object[key];
    }
  });

  return result;
};
