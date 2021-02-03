import React, { Fragment } from "react";
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";
import { TodoProvider } from "./TodoContext";
import './App.css';

function App() {
  return (
    <TodoProvider>
      <Fragment>
        <div className="container">
          <h1 className="text-center mt-5">Pern Stack Todo List</h1>
          <InputTodo/>
          <ListTodos/>
        </div>
      </Fragment>
    </TodoProvider>
  );
}

export default App;
