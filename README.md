# emoji-mashup

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![License][license-src]][license-href]

Easily create & mashup custom emojis ♻️🥴

## Install


```sh
# Using npm
npm install emoji-mashup

# Using yarn
yarn add emoji-mashup
```


## Usage

### `createCustomEmoji({ base, mouth?, eyes?, special? })`

This method converts the given emojis and then creates an SVG as string which you can write and edit.

```js
const { createCustomEmoji } = require("emoji-mashup");

const newEmoji = { base: "🥴", mouth: "🥴", eyes: "💀", special: "🤕" };
var emojiCombined = createCustomEmoji(newEmoji);

// You receive a string with the svg data, in this example we write a file with that.
// You will generate a mashup of 🥴, 💀 & 🤕.
```

## License

Published under MIT - Made with 💚  by TrantLabs

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/emoji-mashup/latest.svg
[npm-version-href]: https://npmjs.com/package/emoji-mashup
[npm-downloads-src]: https://img.shields.io/npm/dt/emoji-mashup.svg
[npm-downloads-href]: https://npmjs.com/package/emoji-mashup
[github-actions-ci-src]: https://github.com/trantlabs/emoji-mashup/actions/workflows/ci.yml/badge.svg
[github-actions-ci-href]: https://github.com/trantlabs/emoji-mashup/actions?query=workflow%3Aci
[license-src]: https://img.shields.io/npm/l/emoji-mashup.svg
[license-href]: https://npmjs.com/package/emoji-mashup