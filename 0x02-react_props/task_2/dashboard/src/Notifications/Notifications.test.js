import React from 'react';
import { render } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  it('renders NotificationItem elements instead of li', () => {
    const { getAllByTestId } = render(<Notifications />);
    const notificationItems = getAllByTestId('notification-item');
    expect(notificationItems.length).toBeGreaterThanOrEqual(1);
  });

  it('verifies the first NotificationItem renders the correct html', () => {
    const { getByTestId } = render(<Notifications />);
    const firstNotificationItem = getByTestId('notification-item');
    expect(firstNotificationItem).toHaveTextContent('New course available');
  });

  it('renders without crashing', () => {
    render(<Notifications />);
  });
});
