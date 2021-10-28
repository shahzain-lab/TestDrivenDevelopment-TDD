import React from 'react'
import { User } from './Form';

type Props = {
    user: User[]
}

const List: React.FC<Props> = ({ user }) => {
    return (
        <div>
            {user.map((user: User) =>
                <span>{user.username}: {user.password}</span>
            )}
        </div>
    )
}

export default List;
