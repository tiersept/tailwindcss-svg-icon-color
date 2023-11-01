const plugin = require("tailwindcss/plugin");

const getFlattenedObject = require("./src/getFlattenedObject");

module.exports = plugin.withOptions(function (options = {}) {
  return function ({ matchUtilities, theme }) {
    const className = options.className ?? 'icon-color'
    const colors = theme('colors');

    const flattenedColors = getFlattenedObject(colors);

    matchUtilities(
      {
        [`.${className}`]: value => ({
          '> path': {
            fill: value,
          },
        }),
      },
      { values: flattenedColors }
    );
  };
});
