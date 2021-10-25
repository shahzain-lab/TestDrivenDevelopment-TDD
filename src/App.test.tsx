import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


test('App\'s stats', () => {
  render(<App />);

  const headerEle = screen.getByRole('heading');
  expect(headerEle).toBeInTheDocument();

  const textEle = screen.getByText('Hello World');
  expect(textEle).toBeInTheDocument()
})
