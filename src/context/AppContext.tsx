import React, { createContext, useReducer } from "react";
import { Action, State } from "../types/Reducer.types";
import { AppReducer } from "./AppReducer";

type Props = {
    children: React.ReactNode
}

interface IAppContext {
    state: State,
    dispatch: React.Dispatch<Action>
}

const initialState: State = {
    todoList: [],
    activeTodoItem: false
}

export const AppContext = createContext<IAppContext>({
    state: initialState,
    dispatch: () => "Hello"
});

export const AppProvider: React.FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}