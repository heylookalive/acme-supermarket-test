import React from 'react';
import { shallow } from 'enzyme';
import BasketCount from './index';

describe('ButtonCount component', () => {
  it('renders the default count as 0', () => {
    const wrapper = shallow(<BasketCount />);
    expect(wrapper.text()).toEqual('0');
  });

  it('renders the count', () => {
    const wrapper = shallow(<BasketCount count={22} />);
    expect(wrapper.text()).toEqual('22');
  });
})
