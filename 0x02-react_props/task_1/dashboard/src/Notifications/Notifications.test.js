import React from 'react';
import { shallow } from 'enzyme';
import Notification from './Notifications';

describe('Notifications component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notification />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders three list items', () => {
    const wrapper = shallow(<Notification />);
    expect(wrapper.find('li')).toHaveLength(3);
  });

  it('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notification />);
    expect(wrapper.text()).toContain('Here is the list of notifications');
  });
});
