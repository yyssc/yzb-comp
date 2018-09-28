import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import FilterAccSubjectRefer from '../src/components/FilterAccSubjectRefer';

// const referDataUrl = 'http://127.0.0.1:3009/refbase_ctr/queryRefJSON';
const referDataUrl = 'http://172.20.4.220/ficloud/refbase_ctr/queryRefJSON';

storiesOf('FilterAccSubjectRefer', module)
  .add('default', () => (
    <FilterAccSubjectRefer
      rightRefCode="accsubject"
      referDataUrl={referDataUrl}
      onChange={action('FilterAccSubjectRefer::onChange')}
    />
  ));
