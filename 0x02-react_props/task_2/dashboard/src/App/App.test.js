import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('contains the Notifications component', () => {
    const { getByTestId } = render(<App />);
    const notificationsComponent = getByTestId('notifications-component');
    expect(notificationsComponent).toBeInTheDocument();
  });

  it('contains the Header component', () => {
    const { getByTestId } = render(<App />);
    const headerComponent = getByTestId('header-component');
    expect(headerComponent).toBeInTheDocument();
  });

  it('contains the Login component', () => {
    const { getByTestId } = render(<App />);
    const loginComponent = getByTestId('login-component');
    expect(loginComponent).toBeInTheDocument();
  });

  it('contains the Footer component', () => {
    const { getByTestId } = render(<App />);
    const footerComponent = getByTestId('footer-component');
    expect(footerComponent).toBeInTheDocument();
  });
});
