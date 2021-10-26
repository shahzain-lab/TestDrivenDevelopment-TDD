export enum Type {
    todo = 'LOAD_TODOLIST',
    singleTodo = 'LOAD_SINGLE_TODO'
}

export interface Todo {
    id: number,
    title: string,
    completed: boolean,
    userId: number
}

export type Action = {
    type: Type,
    todoList: Todo[],
    todo?: boolean
}

export type State = {
    todoList: Todo[],
    activeTodoItem: boolean;
}                                                                                              