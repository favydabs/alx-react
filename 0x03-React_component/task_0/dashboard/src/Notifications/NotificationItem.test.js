import React from 'react';
import { render } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
  it('renders without crashing', () => {
    render(<NotificationItem type="default" value="test" />);
  });

  it('renders correct html with type and value props', () => {
    const { getByTestId } = render(
      <NotificationItem type="default" value="test" />
    );
    const listItem = getByTestId('notification-item');
    expect(listItem).toHaveAttribute('data-notification-type', 'default');
    expect(listItem).toContainHTML('<span>test</span>');
  });

  it('renders correct html with html prop', () => {
    const { getByTestId } = render(
      <NotificationItem
        type="default"
        value="test"
        html={{ __html: '<u>test</u>' }}
      />
    );
    const listItem = getByTestId('notification-item');
    expect(listItem).toHaveAttribute('data-notification-type', 'default');
    expect(listItem).toContainHTML('<div><u>test</u></div>');
  });
});
