# yzb-comp <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![Build Status][travis-svg]][travis-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

> An npm package boilerplate.

![yzb-comp in action](https://raw.githubusercontent.com/yyssc/yzb-comp/master/yzb-comp-demo.gif)

## Live Playground

For examples of the component in action, go to https://yyssc.github.io/yzb-comp.

OR

To run that demo on your own computer:
* Clone this repository
* `npm install`
* `npm run storybook`
* Visit http://localhost:9001/

## Getting Started
### Install dependencies
Ensure packages are installed with correct version numbers by running:
  ```sh
  (
    export PKG=yzb-comp;
    npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g; s/ *//g' | xargs npm install --save "$PKG"
  )
  ```

  Which produces and runs a command like:

  ```sh
  npm install --save yzb-comp react@>=#.## react-dom@>=#.## react-addons-shallow-compare@>=#.##
  ```

## Maintaining

### First release

- put `0.0.0` in `version` section of `package.json`.
- run `npm run version:minor`

### Next release

- run `npm run version:patch` for patch release.

[package-url]: https://npmjs.org/package/yzb-comp
[npm-version-svg]: http://versionbadg.es/yyssc/yzb-comp.svg
[travis-svg]: https://travis-ci.org/yyssc/yzb-comp.svg
[travis-url]: https://travis-ci.org/yyssc/yzb-comp
[deps-svg]: https://david-dm.org/yyssc/yzb-comp.svg
[deps-url]: https://david-dm.org/yyssc/yzb-comp
[dev-deps-svg]: https://david-dm.org/yyssc/yzb-comp/dev-status.svg
[dev-deps-url]: https://david-dm.org/yyssc/yzb-comp#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/yzb-comp.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/yzb-comp.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/yzb-comp.svg
[downloads-url]: http://npm-stat.com/charts.html?package=yzb-comp
