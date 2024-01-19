import React from 'react';
import { render } from '@testing-library/react';
import CourseList from './CourseList';

// Check that it renders CourseList component without crashing
test('renders CourseList component without crashing', () => {
  render(<CourseList />);
});

// Check that it renders the 5 different rows
test('renders 5 different rows', () => {
  const { getByText } = render(<CourseList />);

  // You can customize the text in the getByText function based on your actual implementation
  expect(getByText('Available courses')).toBeInTheDocument();
  expect(getByText('Course name')).toBeInTheDocument();
  expect(getByText('ES6')).toBeInTheDocument();
  expect(getByText('Webpack')).toBeInTheDocument();
  expect(getByText('React')).toBeInTheDocument();
});
