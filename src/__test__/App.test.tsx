import App from "../components/App"
import { render } from '@testing-library/react';

test('check header text correctly', () => {
    const { getByTestId } = render(<App />);
    const headerEle = getByTestId('header');
    expect(headerEle.textContent).toBe('Getting started with React Testing');
})

