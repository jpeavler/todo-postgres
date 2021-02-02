import React, { Fragment, useState } from "react";

const InputTodo = () => {
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