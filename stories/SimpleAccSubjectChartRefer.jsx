import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import SimpleAccSubjectChartRefer from '../src/components/SimpleAccSubjectChartRefer';

// const referDataUrl = 'http://127.0.0.1:3009/refbase_ctr/queryRefJSON';
const referDataUrl = 'http://172.20.4.220:8080/ficloud/refbase_ctr/queryRefJSON';

// 科目表档案参照
storiesOf('SimpleAccSubjectChartRefer', module)
  .add('default', () => (
    <SimpleAccSubjectChartRefer
      referDataUrl={referDataUrl}
      onChange={action('SimpleAccSubjectChartRefer::onChange')}
      onBlur={action('SimpleAccSubjectChartRefer::onBlur')}
    />
  ));
