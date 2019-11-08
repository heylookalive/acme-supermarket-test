import React from 'react';
import { mount } from 'enzyme';
import Product from './index';

describe('Product component', () => {
  const testProduct = {
    code: 'TST1',
    name: 'Test product',
    price: 2
  };
  let mockAddToBasketHandler;
  let wrapper;

  beforeAll(() => {
    mockAddToBasketHandler = jest.fn();
    wrapper = mount(<Product product={testProduct} addToBasketHandler={mockAddToBasketHandler} />);
  });

  it('renders with correct name and price', () => {
    expect(wrapper.find('h3').text()).toEqual('Test product');
    expect(wrapper.find('span').text()).toEqual('£2.00');
  });

  it('works when clicking add to basket', () => {
    wrapper.find('button').simulate('click');
    expect(mockAddToBasketHandler.mock.calls.length).toEqual(1);
    expect(mockAddToBasketHandler.mock.calls[0][0]).toEqual(testProduct);
  })
});
