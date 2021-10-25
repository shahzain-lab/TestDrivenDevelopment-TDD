enum Type {
    todo = 'LOAD_TODOLIST',
    singleTodo = 'LOAD_SINGLE_TODO'
}

export type Action = {
    type: Type,
    payload: {}
}

export type State = {
    todoList: [],
    activeTodo: { id: number }
}