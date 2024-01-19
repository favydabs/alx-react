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

  it('displays menu item when displayDrawer is false', () => {
    const { queryByText } = render(<Notifications displayDrawer={false} />);
    const menuItem = queryByText('Your notifications');
    expect(menuItem).toBeInTheDocument();
  });

  it('does not display div.Notifications when displayDrawer is false', () => {
    const { queryByTestId } = render(<Notifications displayDrawer={false} />);
    const notificationsDiv = queryByTestId('div.Notifications');
    expect(notificationsDiv).toBeNull();
  });

  it('displays menu item when displayDrawer is true', () => {
    const { queryByText } = render(<Notifications displayDrawer={true} />);
    const menuItem = queryByText('Your notifications');
    expect(menuItem).toBeInTheDocument();
  });

  it('displays div.Notifications when displayDrawer is true', () => {
    const { queryByTestId } = render(<Notifications displayDrawer={true} />);
    const notificationsDiv = queryByTestId('div.Notifications');
    expect(notificationsDiv).toBeInTheDocument();
  });
});
