import React, {useContext, useState} from 'react';

const TodoContext = React.createContext();
const UpdateTodoContext = React.createContext();

export function useTodo() {
    return useContext(TodoContext);
}

export function useUpdateTodo() {
    return useContext(UpdateTodoContext);
}

export function TodoProvider({ children }) {
    const [todos, setTodos] = useState([]);

    // function updateTodos(updatedTodos) {
    //     setTodos(updatedTodos);
    // }

    return (
        <TodoContext.Provider value={todos}>
            <UpdateTodoContext.Provider value={setTodos}>
                {children}
            </UpdateTodoContext.Provider>
        </TodoContext.Provider>
    )
}