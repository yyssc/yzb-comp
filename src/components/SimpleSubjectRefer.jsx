import React from 'react';
// import PropTypes from 'prop-types';

import BaseSubjectRefer from './BaseSubjectRefer';

/**
 * 科目参照组件
 * - subject
 */

const propTypes = {
};

const defaultProps = {
};

export default function SimpleSubjectRefer(props) {
  return (
    <BaseSubjectRefer
      {...props}
      placeholder="请选择科目..."
      refCode="subject"
    />
  );
}

SimpleSubjectRefer.propTypes = propTypes;
SimpleSubjectRefer.defaultProps = defaultProps;
