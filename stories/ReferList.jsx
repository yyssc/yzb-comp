/* eslint-disable no-alert, no-console */

import React from 'react';

import { storiesOf, action } from '@kadira/storybook';
// import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import ReferList from '../src/components/ReferList';

storiesOf('ReferList', module)
  .add('default', () => (
    <ReferList
      referDataUrl={window.referDataUrl}
      referConditions={{
        refCode: 'dept',
        refType: 'table',
        displayFields: ['id', 'code', 'name'],
        fields: ['id', 'code', 'name'],
      }}
      filterBy={['code', 'name']}
      onChange={action('ReferList::onChange')}
      onBlur={action('ReferList::onBlur')}
    />
  ))
  .add('clear()', () => {
    let referListRef;
    return (
      <div>
        <button onClick={() => {
          referListRef.clear();
        }}
        >clear</button>
        <ReferList
          ref={(c) => {
            referListRef = c;
          }}
          referDataUrl={referDataUrl}
          referConditions={{
            refCode: 'dept',
            refType: 'table',
            displayFields: ['id', 'code', 'name'],
            fields: ['id', 'code', 'name'],
          }}
          filterBy={['code', 'name']}
          onChange={action('ReferList::onChange')}
          onBlur={action('ReferList::onBlur')}
        />
      </div>
    );
  });
