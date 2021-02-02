import React, { Fragment, useState } from "react";
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  
  return (
    <Fragment>
      <div className="container">
        <h1 className="text-center mt-5">Pern Stack Todo List</h1>
        <InputTodo/>
        <ListTodos/>
      </div>
    </Fragment>
  );
}

export default App;
