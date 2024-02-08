# tailwindcss-svg-icon-color

A plugin that adds the `icon-color-...` utility class to your arsenal of classes to use on svg's.
Assuming the icon's are designed and exported to only obtain their colors from the fill property set on the path.

## Installation

To install the package, run

    npm install tailwindcss-svg-icon-color --save-dev

    yarn add -D tailwindcss-svg-icon-color

## Config

In your `tailwind.config.js` file, import the plugin as follows.

```javascript
const svgIconColor = require("tailwindcss-svg-icon-color");

module.exports = {
  plugins: [svgIconColor],
};
```

## Example usage

The class targets the `path` property in the svg and adds a fill color from the theme file.

```javascript
<IconArrowRight className="icon-color-yellow-400 hover:icon-color-yellow-200 [&>path]:transition-all [&>path]:duration-300" />
```
