import React from 'react';
import { shallow, mount } from 'enzyme';
import LineItem from './index';

describe('LineItem component', () => {
  it('renders a line with text and value', () => {
    const wrapper = mount(<LineItem label="Liiiine" value={1.23} />);
    expect(wrapper.find('.line-item-label').text()).toEqual('Liiiine');
    expect(wrapper.find('.line-item-price span').text()).toEqual('£1.23');
  });

  it('renders a line with extra text', () => {
    const wrapper = shallow(<LineItem label="Line with extra" extraText="extra text" value={1.23} />);
    expect(wrapper.find('.line-item-extra').text()).toEqual('extra text');
  });

  it('renders a negative value', () => {
    const wrapper = mount(<LineItem label="Negative line" value={1.23} valueIsNegative />);
    expect(wrapper.find('.line-item-price span').text()).toEqual('-£1.23');
  });

  it('renders children', () => {
    const wrapper = shallow(<LineItem label="Line with children" value={1.23}><span className="child" /></LineItem>);
    expect(wrapper.find('.line-item-children').children().length).toEqual(1);
  });
})
