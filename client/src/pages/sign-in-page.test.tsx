import React from 'react';
import { render, screen } from '@testing-library/react';
import SignInPage from './sign-in-page';

test('renders hello world', () => {
  render(<SignInPage />);
  // const linkElement = screen.getByText("Hello World");
  // expect(linkElement).toBeInTheDocument();
});
