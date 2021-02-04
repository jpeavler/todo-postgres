import React, {Fragment, useEffect} from "react";
import { useTodo, useUpdateTodo } from "../TodoContext";
import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";

const ListTodos = () => {
    const todos = useTodo();
    const setTodos = useUpdateTodo();

    useEffect(() => {
        const getTodos = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}`);
                const jsonData = await response.json();
                setTodos(jsonData);
            } catch (err) {
                console.error(err.message);
            }
        }
        getTodos();
    }, [setTodos]);

    const displayTodos = todos.map((todo) => {
        return (
            <tr key={todo.todo_id}>
                <td>{todo.description}</td>
                <td><EditTodo todo={todo}/></td>
                <td>
                    <DeleteTodo id={todo.todo_id}/>
                </td>
            </tr>
        )
    });
    return (
        <Fragment>
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>{displayTodos}</tbody>
            </table>
        </Fragment>
    )
}

export default ListTodos;