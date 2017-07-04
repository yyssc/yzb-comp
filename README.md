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
  npm install --save yzb-comp react@>=#.## react-dom@>=#.## ssc-refer2@>=#.##
  ```

## Maintaining

### First release

- put `0.0.0` in `version` section of `package.json`.
- run `npm run version:minor`

### Next release

- run `npm run version:patch` for patch release.

## 各种参照组件

可以供使用的参照组件都在`src/财务平台/components/`目录下。

- 科目表(refCode: accsubjectchart)
  - `AccSubjectChartRefer` 科目参照组件
  - `SimpleAccSubjectChartRefer` 科目参照组件 - 简单
- 科目表(refCode: subjectchart)
  - `SubjectChartRefer` 科目参照组件
  - `SimpleSubjectChartRefer` 科目参照组件 - 简单
- 科目(refCode: accsubject)
  - `AccSubjectRefer` 科目参照组件
  - `SimpleAccSubjectRefer` 科目参照组件 - 简单
  - `FilterAccSubjectRefer` 科目参照组件 - 两个参照，由科目表来过滤科目
- 科目(refCode: subject)
  - `SimpleSubjectRefer` 科目参照组件 - 简单
  - `FilterSubjectRefer` 科目参照组件 - 两个参照，由科目表来过滤科目

派生关系

- Refers
  - ReferList
    - BaseSubjectRefer
      - SimpleSubjectRefer
      - SimpleAccSubjectRefer
      - SimpleSubjectChartRefer
      - SimpleAccSubjectChartRefer

请不要直接使用`Base*Refer`，比如`BaseSubjectRefer`，这些是基类。如果想使用默认组件，请直接使用
`Simple*Refer`，比如`SimpleSubjectRefer`。

组装关系

- FilterSubjectRefer
  - SimpleSubjectChartRefer
  - SimpleSubjectRefer
- FilterAccSubjectRefer
  - SimpleAccSubjectChartRefer
  - SimpleAccSubjectRefer

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
