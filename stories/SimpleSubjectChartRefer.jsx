import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import SimpleSubjectChartRefer from '../src/components/SimpleSubjectChartRefer';

// const referDataUrl = 'http://127.0.0.1:3009/refbase_ctr/queryRefJSON';
const referDataUrl = 'http://172.20.4.220/ficloud/refbase_ctr/queryRefJSON';

// 科目表档案参照
storiesOf('SimpleSubjectChartRefer', module)
  .add('default', () => (
    <SimpleSubjectChartRefer
      referDataUrl={referDataUrl}
      onChange={action('SimpleSubjectChartRefer::onChange')}
      onBlur={action('SimpleSubjectChartRefer::onBlur')}
    />
  ));
