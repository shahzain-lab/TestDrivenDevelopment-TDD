import React from 'react';
import { render, screen } from './CustomRender';
import App from '../components/App';


describe('<App />', () => {
  it('it show text Hello World', () => {
    const component = render(<App />);
    expect(component).toBeTruthy()
  })
})