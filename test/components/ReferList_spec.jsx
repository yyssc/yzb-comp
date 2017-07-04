import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon-sandbox';
import { shallow } from 'enzyme';

import ReferList from '../../src/components/ReferList';

describe('ReferList', () => {
  beforeEach(() => {
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('#render', () => {
    describe('renderWeekHeader', () => {
      it('there are 7 elements on each .DayPicker__week-header class', () => {
        const wrapper = shallow(<ReferList
          referDataUrl="http://172.20.4.220:8080/ficloud/refbase_ctr/queryRefJSON"
          referConditions={{
            refCode: 'dept',
            refType: 'table',
            displayFields: ['id', 'code', 'name'],
            fields: ['id', 'code', 'name'],
          }}
          filterBy={['code', 'name']}
          onChange={() => {}}
          onBlur={() => {}}
        />);
        const weekHeaders = wrapper.find('.DayPicker__week-header');
        weekHeaders.forEach((weekHeader) => {
          expect(weekHeader.find('li')).to.have.lengthOf(7);
        });
      });
    });
  });
});
