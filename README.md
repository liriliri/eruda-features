# eruda-features

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![License][license-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/eruda-features.svg
[npm-url]: https://npmjs.org/package/eruda-features
[travis-image]: https://img.shields.io/travis/liriliri/eruda-features.svg
[travis-url]: https://travis-ci.org/liriliri/eruda-features
[license-image]: https://img.shields.io/npm/l/eruda-features.svg

Eruda plugin for browser feature detections, thanks to [modernizr](https://github.com/Modernizr/Modernizr) project.

Red means unsupported, otherwise ok. All buttons is linked directly to related materials in [Can I Use](http://caniuse.com/) website.

## Demo

Browse it on your phone: 
[http://eruda.liriliri.io/](http://eruda.liriliri.io/)

## Install

```bash
npm install eruda-features --save
```

```javascript
eruda.add(erudaFeatures);
```

Make sure Eruda is loaded before this plugin, otherwise won't work.