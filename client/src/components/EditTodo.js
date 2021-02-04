import React, { Fragment, useState } from "react";
import { useTodo, useUpdateTodo} from "../TodoContext";

const EditTodo = ({ todo }) => {
    const [description, setDescription] = useState(todo.description);
    const todos = useTodo();
    const setTodos = useUpdateTodo();

    const updateDescription = async (e) => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch(`${process.env.REACT_APP_API_URL}/${todo.todo_id}`, {
                method: "PUT",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(body)
            });
            const jsonData = await response.json();
            console.log(jsonData);
            let todosCopy = [...todos];
            todosCopy.forEach((currentTodo, index) => {
                if(currentTodo.todo_id === jsonData.todo_id) {
                    todosCopy[index] = jsonData;
                }
            });
            console.log("List of Todos: ", todosCopy);
            setTodos(todosCopy);
        } catch (err) {
            console.error(err.message);
        }
    }
    return (
        <Fragment>
            <button type="button"
                className="btn btn-warning" 
                data-toggle="modal"
                data-target={`#id${todo.todo_id}`}>
                Edit
            </button>
            <div className="modal fade" 
                id={`id${todo.todo_id}`} 
                tabIndex="-1" 
                role="dialog" 
                aria-labelledby="exampleModalLabel" 
                aria-hidden="true">
                <div className="modal-dialog" 
                    role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" 
                                id="exampleModalLabel">
                                Edit Todo Item
                            </h5>
                            <button type="button" 
                                className="close" 
                                data-dismiss="modal" 
                                aria-label="Close">
                                <span aria-hidden="true">
                                    &times;
                                </span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <input type="text"
                                className="form-control" 
                                value={description} 
                                onChange={({target}) => setDescription(target.value)}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" 
                                className="btn btn-warning" 
                                data-dismiss="modal"
                                onClick={e => updateDescription(e)}>
                                Edit
                            </button>
                            <button type="button" 
                                className="btn btn-secondary" 
                                data-dismiss="modal">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
        )
}

export default EditTodo;