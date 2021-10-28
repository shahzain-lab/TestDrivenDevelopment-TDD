import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";


beforeEach(() => {
    render(<Counter />)
})

describe('testing: <Counter />', () => {
    it('its shows counter header and initial value', () => {
        const header = screen.getByTestId('counterHeader')
        expect(header).toHaveTextContent('My Counter');

        expect(screen.getByTestId('counter')).toHaveTextContent('0');
    });

    it('its check counter btn', () => {
        //ADD-BTN
        expect(screen.getByTestId('add-btn')).toHaveTextContent('+');
        //SUB-BTN
        expect(screen.getByTestId('sub-btn')).toHaveTextContent('-');
    });

    it('its check initial input value 1', () => {
        expect(screen.getByRole('textbox')).toHaveValue('1');
    });;

    it('its check input change value', () => {
        const input = screen.getByTestId('input') as HTMLInputElement;
        fireEvent.change(input, {
            target: {
                value: '5'
            }
        });
        expect(input.value).toBe('5');
    });

    it('its check add button change value', () => {
        const addBTN = screen.getByTestId('add-btn');
        const counter = screen.getByTestId('counter');
        expect(counter).toHaveTextContent('0');

        fireEvent.click(addBTN)
        expect(counter).toHaveTextContent('1')
    });

    it('its check add button change value', () => {
        const subBTN = screen.getByTestId('sub-btn');
        const counter = screen.getByTestId('counter');
        expect(counter).toHaveTextContent('0');

        fireEvent.click(subBTN)
        expect(counter).toHaveTextContent('-1')
    });

});



