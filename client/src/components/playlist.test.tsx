import React from 'react';
import { render, screen } from '@testing-library/react';
import Profile from './profile';

test('renders hello world', () => {
  render(<Profile />);
});
