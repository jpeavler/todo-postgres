import React, { Fragment, useState } from "react";
import { useTodo, useUpdateTodo } from "../TodoContext";

const InputTodo = () => {
    const [description, setDesc] = useState("");
    const todos = useTodo();
    const setTodos = useUpdateTodo();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch(`${process.env.REACT_APP_API_URL}`, {
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(body)
            });
            console.log(response);
            const jsonData = await response.json();
            const todosCopy = [...todos];
            todosCopy.push(jsonData);
            setTodos(todosCopy);
            setDesc("");
        } catch (err) {
            console.log(err.message);
        }
    }
    return (
        <Fragment>
            <form className="d-flex" onSubmit={handleSubmit}>
                <input className="form-control"
                    value={description} 
                    type="text"
                    onChange = {({target}) => setDesc(target.value)}
                />
                <button className="btn btn-success">
                    Add
                </button>
            </form>
        </Fragment>
    );
}

export default InputTodo;