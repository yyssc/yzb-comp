import React from 'react';
// import PropTypes from 'prop-types';

import BaseSubjectRefer from './BaseSubjectRefer';

/**
 * 科目表参照组件
 * - subjectchart
 */

const propTypes = {
};

const defaultProps = {
};

export default function SimpleSubjectChartRefer(props) {
  return (
    <BaseSubjectRefer
      {...props}
      placeholder="请选择科目表..."
      refCode="subjectchart"
    />
  );
}

SimpleSubjectChartRefer.propTypes = propTypes;
SimpleSubjectChartRefer.defaultProps = defaultProps;
