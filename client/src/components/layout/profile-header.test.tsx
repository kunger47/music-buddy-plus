import React from 'react';
import { render, screen } from '@testing-library/react';
import ProfileHeader from './profile-header';

test('renders hello world', () => {
  render(<ProfileHeader />);
  // const linkElement = screen.getByText("Hello World");
  // expect(linkElement).toBeInTheDocument();
});
