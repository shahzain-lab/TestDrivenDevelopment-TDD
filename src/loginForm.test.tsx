import { render, screen } from '@testing-library/react';
import LoginForm from './loginForm';
import userEvent from '@testing-library/user-event';

test('test form', () => {
    render(<LoginForm />);

    const formValues = screen.getByTestId('login-form');
    expect(formValues).toBeInTheDocument()

    const getInput = screen.getAllByTestId('username');
    expect(getInput).toBeDefined();

    const getLabel = screen.getByText('Password:');
    expect(getLabel).toBeInTheDocument()

})


test('true checkbox', () => {
    render(<LoginForm />);

    userEvent.click(screen.getByRole('checkbox'));
    expect(screen.getByLabelText('Remember me?')).toBeChecked()
})