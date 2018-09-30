import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('App component', () => {
  let Component;

  beforeEach(() => {
    Component = shallow(<App /> )
  })

  it('should render without crashing', () => {
    expect(Component).toHaveLength(1);
  })
})