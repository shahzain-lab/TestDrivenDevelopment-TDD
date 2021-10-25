import React from "react";


function LoginForm() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [remember, setRemember] = React.useState(false);

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setUsername(value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setPassword(value);
    };

    const handleRememberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { checked } = e.target;
        setRemember(checked);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <form data-testid="login-form" onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
                data-testid="username"
                type="text"
                name="username"
                value='{username}'
                onChange={handleUsernameChange}
            />

            <label htmlFor="password">Password:</label>
            <input
                data-testid="password"
                type="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
            />

            <label>
                <input
                    data-testid="remember"
                    name="remember"
                    type="checkbox"
                    checked={remember}
                    onChange={handleRememberChange}
                />
                Remember me?
            </label>

            <button type="submit" data-testid="submit">
                Sign in
            </button>
        </form>
    );
}

export default LoginForm;