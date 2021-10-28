import { render, screen } from "@testing-library/react"
import Form from '../components/Form';
import userEvent from '@testing-library/user-event'


const setup = () => {
    const handleSubmit = jest.fn();
    const utills = render(<Form onSubmit={handleSubmit} />);
    const changeUsername = (value: string) => {
        userEvent.type(utills.getByTestId(/username/i), value);
    }
    const changePassword = (value: string) => {
        userEvent.type(utills.getByTestId(/getPassword/i), value)
    }
    const user = { username: 'username', password: 'user#/*1ff' };
    const submitEv = () => userEvent.click(utills.getByText(/submit/i));

    return {
        ...utills,
        changeUsername,
        changePassword,
        user,
        submitEv,
        handleSubmit
    }
}


const setupSuccessCase = () => {
    const utills = setup();
    utills.changeUsername(utills.user.username);
    utills.changePassword(utills.user.password);
    utills.submitEv();
    return utills;
}

const setupNoPasswordCase = () => {
    const utills = setup();
    utills.changeUsername(utills.user.username);
    utills.submitEv();
    const errorMessage = utills.getByRole('alert');
    return { ...utills, errorMessage }
}

const setupNoUsernameCase = () => {
    const utills = setup();
    utills.changePassword(utills.user.password);
    utills.submitEv();
    const errorMessage = utills.getByRole('alert');
    return { ...utills, errorMessage }
}

test('call onSubmit with username and password when the submit is clicked', () => {
    const { handleSubmit, user } = setupSuccessCase()
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith(user);
});


test('get error message on clicking when no password is provided', () => {
    const { handleSubmit, errorMessage } = setupNoPasswordCase();
    expect(errorMessage).toHaveTextContent(/password is required/i);
    expect(handleSubmit).not.toHaveBeenCalled()
});

test('get error message on clicking when no username is provided', () => {
    const { handleSubmit, errorMessage } = setupNoUsernameCase();
    expect(errorMessage).toHaveTextContent(/username is required/i);
    expect(handleSubmit).not.toHaveBeenCalled();
});

