import React, {Fragment, useEffect, useState} from "react";
import DeleteTodo from "./DeleteTodo";

const ListTodos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodos();
    }, []);

    const getTodos = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}`);
            const jsonData = await response.json();
            setTodos(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    const displayTodos = todos.map((todo) => {
        console.log("Todo's Id", todo.todo_id);
        return (
            <tr key={todo.todo_id}>
                <td>{todo.description}</td>
                <td>Edit</td>
                <td>
                    <DeleteTodo id={todo.todo_id}
                        todos={todos}
                        setTodos={setTodos}
                    />
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