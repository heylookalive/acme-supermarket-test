import React from 'react';
import { shallow } from 'enzyme';
import Button from './index';

describe('Button component', () => {
  let button;
  const mockClickHandler = jest.fn();

  beforeAll(() => {
    button = shallow(<Button text="Click me" clickHandler={mockClickHandler} />);
  });

  it('renders text as expecte', () => {
    expect(button.text()).toEqual('Click me');
  });

  it('click handler works', () => {
    button.find('button').simulate('click');
    expect(mockClickHandler.mock.calls.length).toEqual(1);
  });
});
