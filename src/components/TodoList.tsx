import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { Todo, Type } from '../types/Reducer.types';


const TodoList = () => {
    const [loading, setLoading] = useState(true);
    const { state, dispatch } = useContext(AppContext)


    React.useEffect(() => {
        axios.get<Todo[]>("https://jsonplaceholder.typicode.com/todos").then((resp) => {
            const { data } = resp;
            dispatch({ type: Type.todo, todoList: data });
            setLoading(false);
        }).catch(err => err);
    }, [dispatch, setLoading]);

    return (
        <div>
            {loading ? <h2>Fetching todos...</h2> :
                (
                    <ul>
                        {state.todoList.slice(0, 15).map((item: Todo) => {
                            const { id, title } = item;
                            return (
                                <li key={id}>
                                    <Link to={`/item/${id}`} data-testid={id}>
                                        {title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                )
            }
        </div>
    )
};

export default TodoList;