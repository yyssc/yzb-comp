import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import SimpleSubjectRefer from '../src/components/SimpleSubjectRefer';

// const referDataUrl = 'http://127.0.0.1:3009/refbase_ctr/queryRefJSON';
const referDataUrl = 'http://172.20.4.220/ficloud/refbase_ctr/queryRefJSON';

// 科目档案参照
storiesOf('SimpleSubjectRefer', module)
  .add('default', () => (
    <SimpleSubjectRefer
      referDataUrl={referDataUrl}
      onChange={action('SimpleSubjectRefer::onChange')}
      onBlur={action('SimpleSubjectRefer::onBlur')}
    />
  ));
