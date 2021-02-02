import React from "react";

const DeleteTodo = ({id, todos, setTodos}) => {
    const removeTodo = async (id) => {
        try {
            const deleteTodo = await fetch(`${process.env.REACT_APP_API_URL}/${id}`, {
                method: "DELETE"
            });
            console.log(deleteTodo);
        } catch (err) {
            console.error(err.message);
        }
        setTodos(todos.filter(todo => todo.todo_id !== id));
    }
    return (
        <button className="btn btn-danger"
            onClick={() => removeTodo(id)}>
            Delete
        </button>
    )
}

export default DeleteTodo;