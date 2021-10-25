import { Action, State } from "../types/Reducer.types";

export const AppReducer = (state: State, action: Action) => {
    switch (action.type) {
        case "LOAD_TODOLIST":
        // return { ...state, todoList: action.todoList };
        case "LOAD_SINGLE_TODO":
        // return { ...state, activeToDoItem: action.todo };
        default:
            return state;
    }
}