/* eslint-disable object-shorthand */

// components
const BaseSubjectRefer = require('./lib/components/BaseSubjectRefer').default;
const FilterAccSubjectRefer = require('./lib/components/FilterAccSubjectRefer').default;
const ReferList = require('./lib/components/ReferList').default;
const SimpleAccSubjectChartRefer = require('./lib/components/SimpleAccSubjectChartRefer').default;
const SimpleAccSubjectRefer = require('./lib/components/SimpleAccSubjectChartRefer').default;
const SimpleSubjectChartRefer = require('./lib/components/SimpleAccSubjectChartRefer').default;
const SimpleSubjectRefer = require('./lib/components/SimpleAccSubjectChartRefer').default;

// shapes
const HelloWorldShape = require('./lib/shapes/HelloWorldShape').default;

module.exports = {
  BaseSubjectRefer: BaseSubjectRefer,
  FilterAccSubjectRefer: FilterAccSubjectRefer,
  ReferList: ReferList,
  SimpleAccSubjectChartRefer: SimpleAccSubjectChartRefer,
  SimpleAccSubjectRefer: SimpleAccSubjectRefer,
  SimpleSubjectChartRefer: SimpleSubjectChartRefer,
  SimpleSubjectRefer: SimpleSubjectRefer,

  HelloWorldShape: HelloWorldShape,
};
