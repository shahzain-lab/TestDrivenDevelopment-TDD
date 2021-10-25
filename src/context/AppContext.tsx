import React, { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";

type Props = {
    children: React.ReactNode
}

export const AppContext = createContext({});

export const AppProvider: React.FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, {
        todoList: [],
        activeTodo: { id: 0 }
    })
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}