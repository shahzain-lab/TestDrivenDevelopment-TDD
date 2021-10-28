import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Counter from "../components/Counter";


beforeEach(() => {
    render(<Counter />)
})

test('its shows counter header and initial value', () => {
    const header = screen.getByTestId('counterHeader')
    expect(header).toHaveTextContent('My Counter');

    expect(screen.getByTestId('counter')).toHaveTextContent('0');

    //ADD-BTN
    expect(screen.getByTestId('add-btn')).toHaveTextContent('+');
    //SUB-BTN
    expect(screen.getByTestId('sub-btn')).toHaveTextContent('-');

    //its check initial input value 1
    expect(screen.getByRole('textbox')).toHaveValue('1');

});

test('its check input change value', () => {
    const input = screen.getByTestId('input') as HTMLInputElement;
    fireEvent.change(input, {
        target: {
            value: '5'
        }
    });
    expect(input.value).toBe('5');
});

test('its shows add-button to change value', () => {
    const addBTN = screen.getByTestId('add-btn');
    const counter = screen.getByTestId('counter');
    expect(counter).toHaveTextContent('0');

    fireEvent.click(addBTN)
    expect(counter).toHaveTextContent('1')
});

test('its shows sub-button to change value', () => {
    const subBTN = screen.getByTestId('sub-btn');
    const counter = screen.getByTestId('counter');
    expect(counter).toHaveTextContent('0');

    fireEvent.click(subBTN)
    expect(counter).toHaveTextContent('-1')
});



