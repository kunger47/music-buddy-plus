import React from 'react';
import { render, screen } from '@testing-library/react';
import PlaylistPage from './playlist-page';

test('renders hello world', () => {
  render(<PlaylistPage />);
  // const linkElement = screen.getByText("Hello World");
  // expect(linkElement).toBeInTheDocument();
});
