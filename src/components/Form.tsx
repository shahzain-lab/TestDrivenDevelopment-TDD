import React, { useState } from 'react'

export interface User {
    username: string;
    password: string
}

type Props = {
    onSubmit: (user: User) => void;
}

const Form: React.FC<Props> = ({ onSubmit }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!username) {
            setError('username is required')
        } else if (!password) {
            setError('password is required')
        } else {
            setError('')
            const user: User = { username, password }
            onSubmit(user)
        }
    }



    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
                type="text"
                value={username}
                data-testid="username"
                placeholder="Username..."
                onChange={e => setUsername(e.target.value)}
            />
            <label htmlFor="Password">Password</label>
            <input
                type="password"
                value={password}
                data-testid="getPassword"
                placeholder="Password..."
                onChange={e => setPassword(e.target.value)}
            />
            <button>Submit</button>
            {error ? <h2 role="alert">{error}</h2> : null}
        </form>
    )
}

export default Form
