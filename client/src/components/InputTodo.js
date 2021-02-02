import React, { Fragment, useState } from "react";

const ImputTodo = () => {
    const [description, setDesc] = useState("");

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
            setDesc("");
        } catch (err) {
            console.log(err.message);
        }
    }
    return (
        <Fragment>
            <h1 className="text-center mt-5">Pern Stack Todo List</h1>
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

export default ImputTodo;