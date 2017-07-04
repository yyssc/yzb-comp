import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import SimpleAccSubjectRefer from '../src/components/SimpleAccSubjectRefer';

// const referDataUrl = 'http://127.0.0.1:3009/refbase_ctr/queryRefJSON';
const referDataUrl = 'http://172.20.4.220:8080/ficloud/refbase_ctr/queryRefJSON';

// 科目档案参照
storiesOf('SimpleAccSubjectRefer', module)
  .add('default', () => (
    <SimpleAccSubjectRefer
      referDataUrl={referDataUrl}
      onChange={action('SimpleAccSubjectRefer::onChange')}
      onBlur={action('SimpleAccSubjectRefer::onBlur')}
    />
  ));
