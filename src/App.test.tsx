import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


describe('<App />', () => {
  it('it show text Hello World', () => {
    render(<App />);
    expect(screen.getByText(/hello world/i)).toBeInTheDocument();
  })
})