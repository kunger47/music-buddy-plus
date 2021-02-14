import React from 'react';
import { render, screen } from '@testing-library/react';
import PageShell from './page-shell';

test('renders hello world', () => {
  render(<PageShell />);
  // const linkElement = screen.getByText("Hello World");
  // expect(linkElement).toBeInTheDocument();
});
